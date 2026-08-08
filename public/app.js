import { buildWaveformHeights } from "/vendor/m4ss1ck-waveform.js";

const messagesEl = document.querySelector("#messages");
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const thresholdEl = document.querySelector("#threshold");
const thresholdValueEl = document.querySelector("#thresholdValue");
const scenarioEl = document.querySelector("#scenario");
const statusBadge = document.querySelector("#statusBadge");
const riskScore = document.querySelector("#riskScore");
const riskBar = document.querySelector("#riskBar");
const scoreBreakdown = document.querySelector("#scoreBreakdown");
const alertBox = document.querySelector("#alertBox");
const familyNotice = document.querySelector("#familyNotice");
const signalsEl = document.querySelector("#signals");
const matchesEl = document.querySelector("#matches");
const decisionSummaryEl = document.querySelector("#decisionSummary");
const pipelineOutputEl = document.querySelector("#pipelineOutput");
const architectureSteps = [...document.querySelectorAll("#architectureRail li")];

let eventos = [];
let historico = [];
let rodando = false;
let audioAtual = null;
let audioOrientacao = null;
let ultimoCenarioAleatorio = null;
let ultimaAnalise = null;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

renderizarEstadoInicial();

thresholdEl.addEventListener("input", () => {
  thresholdValueEl.textContent = `${thresholdEl.value}%`;
});

startButton.addEventListener("click", async () => {
  if (!rodando) {
    await iniciarDemo();
  }
});

resetButton.addEventListener("click", () => {
  window.location.reload();
});
scenarioEl.addEventListener("change", reiniciarDemo);

async function iniciarDemo() {
  rodando = true;
  startButton.disabled = true;
  scenarioEl.disabled = true;
  statusBadge.textContent = "Monitorando";

  if (eventos.length === 0) {
    eventos = await fetch("/api/demo-events").then((res) => res.json());
  }

  const eventosSelecionados = selecionarEventos(eventos, scenarioEl.value);

  await rodarSequencial(eventosSelecionados);

  rodando = false;
  startButton.disabled = false;
  scenarioEl.disabled = false;
}

async function rodarSequencial(eventosSelecionados) {
  for (const [indice, evento] of eventosSelecionados.entries()) {
    if (!rodando) {
      return;
    }

    statusBadge.textContent = `Mensagem ${indice + 1} de ${eventosSelecionados.length}`;
    await esperar(evento.delayMs ?? 0);
    const digitando = mensagemDoContato(evento.mensagem) ? renderizarDigitando() : null;
    if (digitando) await esperar(520);
    digitando?.remove();
    const mensagem = receberMensagem(evento.mensagem);

    renderizarMensagem(mensagem);
    if (evento.analisarApos) {
      await analisarHistorico();
    }
  }
}

function mensagemDoContato(mensagem) {
  return mensagem.autor !== "usuario";
}

function receberMensagem(mensagemOriginal) {
  const mensagem = {
    ...mensagemOriginal,
    recebidoEm: new Date().toISOString()
  };

  historico.push(mensagem);
  return mensagem;
}

async function analisarHistorico() {
  const transicao = renderizarTransicaoAnalise();
  let etapaAtual = 0;
  atualizarTransicao(transicao, etapaAtual);
  const progresso = setInterval(() => {
    etapaAtual = Math.min(etapaAtual + 1, architectureSteps.length - 1);
    atualizarTransicao(transicao, etapaAtual);
  }, 520);

  let analise;
  try {
    const resposta = await fetch("/api/analisar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mensagens: historico,
        threshold: Number(thresholdEl.value) / 100
      })
    });
    analise = await resposta.json();
    if (!resposta.ok) throw new Error(analise.erro ?? "Falha ao executar a pipeline.");
  } catch (error) {
    clearInterval(progresso);
    finalizarTransicao(transicao, "Falha ao analisar a mensagem.", "error");
    statusBadge.textContent = "Falha na analise";
    scoreBreakdown.textContent = error.message;
    return;
  }
  clearInterval(progresso);

  ultimaAnalise = analise;
  atualizarAnalise(analise);
  const alertaAtivo = Boolean(analise.notificacoes.length);
  finalizarTransicao(
    transicao,
    alertaAtivo ? "Alerta enviado — interrompa a conversa." : "Análise concluída — monitoramento ativo.",
    alertaAtivo ? "alert" : "success"
  );
  await esperar(280);

  if (alertaAtivo && !document.querySelector(".security-alert-message")) {
    renderizarAlertaSeguranca(analise);
  }

  statusBadge.textContent = alertaAtivo ? "Alerta enviado" : "Analise concluida";
}

function renderizarTransicaoAnalise() {
  const item = document.createElement("article");
  const etapas = ["Ouvindo áudio", "Verificando sinais", "Comparando casos", "Preparando orientação"];
  item.className = "pipeline-transition";
  item.innerHTML = `
    <div class="pipeline-transition-head"><span>Assistente de Segurança</span><strong>Processando</strong></div>
    <ol class="pipeline-stages">${etapas.map((etapa) => `<li>${etapa}</li>`).join("")}</ol>
    <p class="pipeline-transition-result" aria-live="polite">Preparando análise...</p>
  `;
  messagesEl.append(item);
  rolarConversa();
  return {
    item,
    etapas: [...item.querySelectorAll(".pipeline-stages li")],
    resultado: item.querySelector(".pipeline-transition-result")
  };
}

function atualizarTransicao(transicao, indiceAtivo) {
  const indiceHumano = Math.min(Math.floor(indiceAtivo / 2), transicao.etapas.length - 1);
  transicao.etapas.forEach((etapa, indice) => {
    etapa.classList.toggle("is-complete", indice < indiceHumano);
    etapa.classList.toggle("is-current", indice === indiceHumano);
  });
  transicao.resultado.textContent = `${transicao.etapas[indiceHumano].textContent}...`;
  atualizarArquitetura(indiceAtivo);
  statusBadge.textContent = `Pipeline ${indiceAtivo + 1}/${architectureSteps.length}`;
  rolarConversa();
}

function finalizarTransicao(transicao, mensagem, estado) {
  transicao.item.classList.add(`is-${estado}`);
  transicao.etapas.forEach((etapa) => {
    etapa.classList.remove("is-current");
    etapa.classList.add("is-complete");
  });
  architectureSteps.forEach((etapa) => {
    etapa.classList.remove("is-current");
    etapa.classList.add("is-complete");
  });
  transicao.resultado.textContent = mensagem;
  rolarConversa();
}

function atualizarArquitetura(indiceAtivo) {
  architectureSteps.forEach((etapa, indice) => {
    etapa.classList.toggle("is-complete", indice < indiceAtivo);
    etapa.classList.toggle("is-current", indice === indiceAtivo);
  });
}

function selecionarEventos(lista, cenario) {
  const banco = montarBancoDeCenarios(lista);

  if (cenario === "aleatorio") {
    return sortearCenario(banco).eventos;
  }

  if (banco[cenario]) {
    return banco[cenario].eventos;
  }

  return banco["normal-pedido"].eventos;
}

function montarBancoDeCenarios(lista) {
  const audio1 = lista[0]?.mensagem;
  const audio2 = lista[1]?.mensagem;
  const agora = () => new Date().toISOString();

  return {
    "audio-mae": {
      nome: "Áudio real — conversa com a mãe",
      tipo: "risco",
      eventos: [
        audio1 ? eventoRapido({ ...audio1, conversaId: "demo-audio-mae", id: "audio-mae-1" }) : null,
        eventoRapido({ id: "audio-mae-resposta", conversaId: "demo-audio-mae", autor: "usuario", tipo: "texto", conteudo: "Oi, filho. Está tudo bem?", timestamp: agora() }),
        eventoRapido({ id: "audio-mae-risco", conversaId: "demo-audio-mae", autor: "cliente", tipo: "texto", conteudo: "Troquei de número. Preciso que você faça um Pix agora e não conte para ninguém.", timestamp: agora() }, true)
      ].filter(Boolean)
    },
    "audio-tio": {
      nome: "Áudio real — conversa com o tio",
      tipo: "risco",
      eventos: [
        audio2 ? eventoRapido({ ...audio2, conversaId: "demo-audio-tio", id: "audio-tio-1" }) : null,
        eventoRapido({ id: "audio-tio-resposta", conversaId: "demo-audio-tio", autor: "usuario", tipo: "texto", conteudo: "Oi. Me explica com calma, por favor.", timestamp: agora() }),
        eventoRapido({ id: "audio-tio-risco", conversaId: "demo-audio-tio", autor: "cliente", tipo: "texto", conteudo: "Estou usando outro número. Preciso de um Pix urgente para resolver isso hoje.", timestamp: agora() }, true)
      ].filter(Boolean)
    },
    "normal-pedido": {
      nome: "Texto normal: pedido",
      tipo: "normal",
      eventos: [
        eventoRapido({ id: `normal-pedido-${Date.now()}`, conversaId: "demo-normal-pedido", autor: "usuario", tipo: "texto", conteudo: "Olá! Pode me atualizar sobre meu pedido?", timestamp: agora() }),
        eventoRapido({ id: `normal-pedido-resposta-${Date.now()}`, conversaId: "demo-normal-pedido", autor: "cliente", tipo: "texto", conteudo: "Bom dia! Seu pedido já saiu para entrega e chega até as 18h.", timestamp: agora() }, true)
      ]
    },
    "normal-entrega": {
      nome: "Texto normal: app oficial",
      tipo: "normal",
      eventos: [
        eventoRapido({ id: `normal-entrega-${Date.now()}`, conversaId: "demo-normal-entrega", autor: "cliente", tipo: "texto", conteudo: "Acompanhe a entrega apenas pelo aplicativo oficial.", timestamp: agora() }),
        eventoRapido({ id: `normal-entrega-resposta-${Date.now()}`, conversaId: "demo-normal-entrega", autor: "usuario", tipo: "texto", conteudo: "Tudo certo, obrigado. Vou acompanhar pelo app.", timestamp: agora() }, true)
      ]
    },
    "golpe-texto-pix": {
      nome: "Texto risco: Pix urgente",
      tipo: "risco",
      eventos: [
        eventoRapido({ id: `golpe-pix-abertura-${Date.now()}`, conversaId: "demo-golpe-texto-pix", autor: "usuario", tipo: "texto", conteudo: "Olá. Vi sua ligação perdida. Quem fala?", timestamp: agora() }),
        eventoRapido({ id: `golpe-texto-pix-${Date.now()}`, conversaId: "demo-golpe-texto-pix", autor: "cliente", tipo: "texto", conteudo: "Sou do financeiro. Faça um Pix de devolução agora para esta chave. Não conte para ninguém, é urgente.", timestamp: agora() }, true)
      ]
    },
    "golpe-texto-link": {
      nome: "Texto risco: link e codigo",
      tipo: "risco",
      eventos: [
        eventoRapido({ id: `golpe-link-abertura-${Date.now()}`, conversaId: "demo-golpe-texto-link", autor: "cliente", tipo: "texto", conteudo: "Olá. Detectamos um acesso incomum na sua conta.", timestamp: agora() }),
        eventoRapido({ id: `golpe-link-resposta-${Date.now()}`, conversaId: "demo-golpe-texto-link", autor: "usuario", tipo: "texto", conteudo: "Como posso verificar isso com segurança?", timestamp: agora() }),
        eventoRapido({ id: `golpe-texto-link-${Date.now()}`, conversaId: "demo-golpe-texto-link", autor: "cliente", tipo: "texto", conteudo: "Clique neste link e informe o código SMS para liberar hoje: http://verifica-conta.shop", timestamp: agora() }, true)
      ]
    }
  };
}

function sortearCenario(banco) {
  const chaves = Object.keys(banco);
  let chave = chaves[Math.floor(Math.random() * chaves.length)];

  if (chaves.length > 1 && chave === ultimoCenarioAleatorio) {
    const alternativas = chaves.filter((item) => item !== ultimoCenarioAleatorio);
    chave = alternativas[Math.floor(Math.random() * alternativas.length)];
  }

  ultimoCenarioAleatorio = chave;
  statusBadge.textContent = `Sorteado: ${banco[chave].nome}`;
  return banco[chave];
}

function clonarEventoRapido(evento) {
  return {
    delayMs: 120,
    mensagem: { ...evento.mensagem }
  };
}

function eventoRapido(mensagem, analisarApos = false) {
  return {
    delayMs: 420,
    analisarApos,
    mensagem: { ...mensagem }
  };
}

function reiniciarDemo() {
  historico = [];
  ultimaAnalise = null;
  rodando = false;
  messagesEl.innerHTML = "";
  renderizarEstadoInicial();
  pararAudioAtual();
  atualizarAnalise(null);
  atualizarArquitetura(-1);
  statusBadge.textContent = "Pronto";
  startButton.disabled = false;
  scenarioEl.disabled = false;
}

function renderizarMensagem(mensagem) {
  messagesEl.querySelector(".conversation-placeholder")?.remove();
  const item = document.createElement("article");
  item.className = `message ${mensagem.autor === "cliente" ? "incoming" : "outgoing"}`;

  const meta = document.createElement("span");
  meta.className = "message-meta";
  meta.textContent = mensagem.autor === "usuario"
    ? "Você"
    : mensagem.tipo === "audio"
      ? "Novo contato • áudio"
      : "Novo contato";
  item.append(meta);

  if (mensagem.tipo === "audio") {
    item.append(criarPlayerAudio(mensagem.audioUrl, "0:15"));

    const transcript = document.createElement("details");
    transcript.className = "transcript";
    transcript.innerHTML = `<summary>Ver transcricao analisada</summary><p>${escapeHtml(mensagem.transcricaoSimulada ?? "Audio encaminhado para transcricao.")}</p>`;
    item.append(transcript);
    setTimeout(() => { transcript.open = true; rolarConversa(); }, 850);
  } else {
    const texto = document.createElement("p");
    texto.textContent = mensagem.conteudo;
    item.append(texto);
  }

  const horario = document.createElement("time");
  horario.className = "message-time";
  horario.textContent = formatarHorario(mensagem.timestamp ?? mensagem.recebidoEm);
  item.append(horario);

  if (mensagem.autor === "usuario") {
    const status = document.createElement("span");
    status.className = "message-status";
    status.textContent = "✓✓";
    status.title = "Lida";
    item.append(status);
  }

  messagesEl.append(item);
  rolarConversa();
}

function renderizarDigitando() {
  const item = document.createElement("article");
  item.className = "typing-indicator";
  item.setAttribute("aria-label", "Novo contato esta digitando");
  item.innerHTML = "<span></span><span></span><span></span>";
  messagesEl.append(item);
  rolarConversa();
  return item;
}

function renderizarEstadoInicial() {
  messagesEl.innerHTML = `
    <div class="conversation-date">Hoje</div>
    <div class="conversation-placeholder"><strong>A conversa aparecerá aqui</strong>Escolha um cenário e acompanhe a proteção em tempo real.</div>
  `;
}

function rolarConversa() {
  messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: reducedMotion.matches ? "auto" : "smooth" });
}

function criarPlayerAudio(src, duracao) {
  const audio = new Audio(src);
  const wrap = document.createElement("div");
  const playButton = document.createElement("button");
  const duracaoEl = criarDuracao(duracao);

  wrap.className = "chat-audio";
  audio.preload = "metadata";
  playButton.className = "play-dot";
  playButton.type = "button";
  playButton.textContent = "Play";
  playButton.addEventListener("click", async () => {
    await alternarAudio(audio, playButton);
  });
  audio.addEventListener("ended", () => {
    playButton.textContent = "Replay";
  });
  audio.addEventListener("loadedmetadata", () => {
    duracaoEl.textContent = formatarDuracao(audio.duration);
  });
  audio.addEventListener("error", () => {
    playButton.disabled = true;
    playButton.textContent = "Audio indisponivel";
    wrap.title = "O arquivo de audio desta demonstracao nao foi encontrado no servidor.";
  });

  wrap.append(playButton, criarWave(), duracaoEl);
  return wrap;
}

async function alternarAudio(audio, button) {
  if (audioAtual && audioAtual !== audio) {
    pararAudioAtual();
  }

  if (audio.paused) {
    audioAtual = audio;
    button.textContent = "Pause";
    await audio.play();
    return;
  }

  audio.pause();
  button.textContent = "Play";
}

function pararAudioAtual() {
  if (!audioAtual) {
    return;
  }

  audioAtual.pause();
  audioAtual.currentTime = 0;
  audioAtual = null;
}

function renderizarAlertaSeguranca(analise) {
  const alerta = document.createElement("article");
  const motivos = (analise.fraude?.pontuacao?.sinais ?? []).slice(0, 3);
  alerta.className = "security-alert-message";
  alerta.innerHTML = `
    <div class="alert-head">
      <div class="shield">!</div>
      <div>
        <h2>Alerta de Golpe</h2>
        <p>Assistente de Segurança <span>• online</span></p>
      </div>
      <strong>Risco alto</strong>
    </div>
    <p class="alert-summary"><strong>Isso pode ser golpe.</strong> Não envie dinheiro, senha ou código por esta conversa.</p>
    <ul class="alert-reasons">${motivos.map((motivo) => `<li>${formatarSinal(motivo)}</li>`).join("")}</ul>
    <div class="recommended-action">
      <span>Ação recomendada</span>
      <strong>Confirme tudo pelo aplicativo oficial do banco.</strong>
    </div>
    <div class="alert-actions">
      <button type="button" id="guideButton">Ouvir orientação</button>
      <button type="button" class="danger" id="blockButton">Bloquear contato</button>
    </div>
  `;

  messagesEl.append(alerta);
  alerta.querySelector("#guideButton").addEventListener("click", tocarOrientacao);
  alerta.querySelector("#blockButton").addEventListener("click", bloquearContato);
  rolarConversa();
}

async function tocarOrientacao(event) {
  const button = event.currentTarget;

  try {
    button.textContent = "Carregando";

    if (!audioOrientacao) {
      audioOrientacao = new Audio("/api/orientacao-audio");
      audioOrientacao.addEventListener("ended", () => {
        document.querySelectorAll("#voiceButton, #guideButton").forEach((item) => {
          item.textContent = item.id === "guideButton" ? "Tocar orientacao" : "Replay";
        });
      });
    }

    audioOrientacao.currentTime = 0;
    await audioOrientacao.play();
    document.querySelectorAll("#voiceButton, #guideButton").forEach((item) => {
      item.textContent = "Tocando";
    });
  } catch {
    falarOrientacaoNoNavegador();
    button.textContent = "Replay";
  }
}

function falarOrientacaoNoNavegador() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(
    "Atencao, isso pode ser golpe. Nao faca um novo Pix. Devolva apenas pela funcao oficial do banco. Sua familia tambem esta sendo avisada."
  );
  const vozPortugues = window.speechSynthesis
    .getVoices()
    .find((voz) => /^pt[-_]/i.test(voz.lang));

  utterance.lang = "pt-BR";

  if (vozPortugues) {
    utterance.voice = vozPortugues;
    utterance.lang = vozPortugues.lang;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function atualizarAnalise(analise) {
  const score = analise?.fraude?.scoreFinal ?? 0;
  const percentual = Math.round(score * 100);
  const sinais = analise?.fraude?.pontuacao?.sinais ?? [];
  const matches = analise?.fraude?.rag?.matches ?? [];
  const alertaAtivo = Boolean(analise?.notificacoes?.length);

  riskScore.textContent = `${percentual}%`;
  riskBar.style.width = `${percentual}%`;
  riskBar.dataset.risco = analise?.fraude?.risco ?? "baixo";
  const decisao = analise?.pipeline?.decision;
  scoreBreakdown.textContent = analise
    ? `Pipeline oficial: risco ${percentual}%, melhor evidencia RAG ${Math.round((analise.fraude?.rag?.score ?? 0) * 100)}%, threshold ${Math.round((decisao?.threshold ?? analise.threshold ?? 0.7) * 100)}%.`
    : "Aguardando saida da pipeline.";
  decisionSummaryEl.textContent = analise
    ? `Decisao: ${(decisao?.action ?? "escalar").replaceAll("_", " ")} — ${decisao?.recommendedAction ?? "revisar evidencias."}${analise.pipeline?.gorillaError ? " (modo degradado)" : ""}`
    : "Decisao: aguardando analise.";
  pipelineOutputEl.textContent = analise ? JSON.stringify(analise.pipeline, null, 2) : "Aguardando execucao.";
  alertBox.hidden = !alertaAtivo;
  familyNotice.hidden = !alertaAtivo;

  signalsEl.innerHTML = "";
  for (const sinal of sinais) {
    const li = document.createElement("li");
    li.textContent = formatarSinal(sinal);
    signalsEl.append(li);
  }

  if (sinais.length === 0) {
    signalsEl.innerHTML = "<li>Nenhum sinal forte ate agora.</li>";
  }

  matchesEl.innerHTML = "";
  for (const match of matches) {
    const li = document.createElement("li");
    const titulo = document.createElement("strong");
    const similaridade = document.createElement("span");
    titulo.textContent = `${match.rotulo}/${match.categoria}`;
    similaridade.textContent = `${Math.round(match.similaridade * 100)}% similar`;
    li.append(titulo, similaridade);
    matchesEl.append(li);
  }

  if (matches.length === 0) {
    matchesEl.innerHTML = "<li>Aguardando mensagens.</li>";
  }
}

async function bloquearContato(event) {
  const button = event.currentTarget;
  const runId = ultimaAnalise?.pipeline?.runId;
  if (!runId) return;

  button.disabled = true;
  button.textContent = "Registrando...";
  try {
    const resposta = await fetch("/api/acoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ runId, action: "bloquear_contato" })
    });
    const registro = await resposta.json();
    if (!resposta.ok) throw new Error(registro.erro ?? "Nao foi possivel registrar a acao.");
    button.textContent = "Contato bloqueado (simulacao)";
    statusBadge.textContent = "Acao registrada";
  } catch (error) {
    button.disabled = false;
    button.textContent = "Tentar bloquear contato";
    statusBadge.textContent = error.message;
  }
}

function criarWave() {
  const wave = document.createElement("span");
  wave.className = "wave-mini";
  const seed = `${historico.length}-${Date.now()}`;
  for (const height of buildWaveformHeights(seed)) {
    const bar = document.createElement("i");
    bar.style.height = `${height}%`;
    wave.append(bar);
  }
  return wave;
}

function criarDuracao(texto) {
  const duracao = document.createElement("small");
  duracao.textContent = texto;
  return duracao;
}

function formatarDuracao(segundos) {
  if (!Number.isFinite(segundos)) return "Audio";
  const minutos = Math.floor(segundos / 60);
  const resto = Math.floor(segundos % 60).toString().padStart(2, "0");
  return `${minutos}:${resto}`;
}

function formatarHorario(valor) {
  const data = valor ? new Date(valor) : new Date();
  if (Number.isNaN(data.getTime())) return "agora";
  return new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(data);
}

function formatarSinal(sinal) {
  return sinal
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

function escapeHtml(texto) {
  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
