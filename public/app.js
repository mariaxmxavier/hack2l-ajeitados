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

let eventos = [];
let historico = [];
let rodando = false;
let audioAtual = null;
let audioOrientacao = null;
let ultimoCenarioAleatorio = null;

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

  await rodarLote(eventosSelecionados);

  rodando = false;
  startButton.disabled = false;
  scenarioEl.disabled = false;
}

async function rodarSequencial(eventosSelecionados) {
  for (const evento of eventosSelecionados) {
    if (!rodando) {
      return;
    }

    await esperar(evento.delayMs ?? 0);
    const mensagem = receberMensagem(evento.mensagem);

    renderizarMensagem(mensagem);
    await analisarHistorico();
  }
}

async function rodarLote(eventosSelecionados) {
  for (const evento of eventosSelecionados) {
    const mensagem = receberMensagem(evento.mensagem);

    renderizarMensagem(mensagem);
    await esperar(120);
  }

  await analisarHistorico();
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
  statusBadge.textContent = "Analisando";

  const analise = await fetch("/api/analisar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mensagens: historico,
      threshold: Number(thresholdEl.value) / 100
    })
  }).then((res) => res.json());

  atualizarAnalise(analise);

  if (analise.notificacoes.length && !document.querySelector(".security-alert-message")) {
    renderizarAlertaSeguranca(analise);
  }

  statusBadge.textContent = analise.notificacoes.length ? "Alerta enviado" : "Monitorando";
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

  return {
    "normal-pedido": {
      nome: "Texto normal: pedido",
      tipo: "normal",
      eventos: [eventoRapido({
        id: `normal-pedido-${Date.now()}`,
        conversaId: "demo-normal-pedido",
        autor: "cliente",
        tipo: "texto",
        conteudo: "Oi, bom dia. Quero saber se meu pedido ja saiu para entrega.",
        timestamp: new Date().toISOString()
      })]
    },
    "normal-entrega": {
      nome: "Texto normal: app oficial",
      tipo: "normal",
      eventos: [eventoRapido({
        id: `normal-entrega-${Date.now()}`,
        conversaId: "demo-normal-entrega",
        autor: "cliente",
        tipo: "texto",
        conteudo: "Tudo certo, obrigado. Vou acompanhar pelo aplicativo oficial.",
        timestamp: new Date().toISOString()
      })]
    },
    "normal-audio": {
      nome: "Audio normal: reembolso",
      tipo: "normal",
      eventos: audio1 ? [eventoRapido({
        ...audio1,
        conversaId: "demo-normal-audio",
        transcricaoSimulada: "Oi, bom dia. Quero saber se meu pedido ja saiu para entrega."
      })] : []
    },
    "golpe-audio-pix": {
      nome: "Audio risco: Pix urgente",
      tipo: "risco",
      eventos: audio2 ? [eventoRapido(audio2)] : []
    },
    "golpe-texto-pix": {
      nome: "Texto risco: Pix urgente",
      tipo: "risco",
      eventos: [eventoRapido({
        id: `golpe-texto-pix-${Date.now()}`,
        conversaId: "demo-golpe-texto-pix",
        autor: "cliente",
        tipo: "texto",
        conteudo: "Oi, preciso que voce faca um Pix de devolucao agora para esta chave. Nao conta para ninguem, e urgente.",
        timestamp: new Date().toISOString()
      })]
    },
    "golpe-texto-link": {
      nome: "Texto risco: link e codigo",
      tipo: "risco",
      eventos: [eventoRapido({
        id: `golpe-texto-link-${Date.now()}`,
        conversaId: "demo-golpe-texto-link",
        autor: "cliente",
        tipo: "texto",
        conteudo: "Sua conta foi bloqueada hoje. Clique neste link e informe o codigo SMS para liberar: http://verifica-conta.shop",
        timestamp: new Date().toISOString()
      })]
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

function eventoRapido(mensagem) {
  return {
    delayMs: 120,
    mensagem: { ...mensagem }
  };
}

function reiniciarDemo() {
  historico = [];
  rodando = false;
  messagesEl.innerHTML = "";
  pararAudioAtual();
  atualizarAnalise(null);
  statusBadge.textContent = "Pronto";
  startButton.disabled = false;
  scenarioEl.disabled = false;
}

function renderizarMensagem(mensagem) {
  const item = document.createElement("article");
  item.className = `message ${mensagem.autor === "cliente" ? "incoming" : "outgoing"}`;

  const meta = document.createElement("span");
  meta.className = "message-meta";
  meta.textContent = mensagem.tipo === "audio" ? "Audio recebido" : mensagem.autor;
  item.append(meta);

  if (mensagem.tipo === "audio") {
    item.append(criarPlayerAudio(mensagem.audioUrl, "0:15"));

    const transcript = document.createElement("details");
    transcript.className = "transcript";
    transcript.innerHTML = `<summary>Ver transcricao analisada</summary><p>${escapeHtml(mensagem.transcricaoSimulada ?? "Audio encaminhado para transcricao.")}</p>`;
    item.append(transcript);
  } else {
    const texto = document.createElement("p");
    texto.textContent = mensagem.conteudo;
    item.append(texto);
  }

  messagesEl.append(item);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function criarPlayerAudio(src, duracao) {
  const audio = new Audio(src);
  const wrap = document.createElement("div");
  const playButton = document.createElement("button");

  wrap.className = "chat-audio";
  playButton.className = "play-dot";
  playButton.type = "button";
  playButton.textContent = "Play";
  playButton.addEventListener("click", async () => {
    await alternarAudio(audio, playButton);
  });
  audio.addEventListener("ended", () => {
    playButton.textContent = "Replay";
  });

  wrap.append(playButton, criarWave(), criarDuracao(duracao));
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
        <p>Assistente de Seguranca <span>- Online</span></p>
      </div>
      <strong>Risco alto</strong>
    </div>
    <div class="voice-card">
      <div class="bot-face">IA</div>
      <div>
        <h3>Orientacao por voz</h3>
        <p>Voz gerada por IA</p>
        <div class="voice-row">
          <button id="voiceButton" type="button">Play</button>
          <span class="wave"></span>
          <small>0:15</small>
        </div>
      </div>
    </div>
    <div class="warning-card">
      <div class="sound-icon">|||</div>
      <p><strong>Atencao: isso pode ser golpe.</strong><br>Nao faca um novo Pix. Se o valor entrou por engano, devolva apenas pela funcao oficial do banco.</p>
    </div>
    <div class="reasons">
      <h3>Por que suspeitamos:</h3>
      <div>${motivos.map((motivo) => `<span>${formatarSinal(motivo)}</span>`).join("")}</div>
    </div>
    <div class="recommended-action">
      <div class="shield-ok">OK</div>
      <p>Acao recomendada<br><strong>Usar 'Devolver Pix' no app do banco</strong></p>
    </div>
    <div class="alert-actions">
      <button type="button" id="guideButton">Tocar orientacao</button>
      <button type="button" class="danger">Bloquear contato</button>
    </div>
  `;

  messagesEl.append(alerta);
  alerta.querySelector("#voiceButton").addEventListener("click", tocarOrientacao);
  alerta.querySelector("#guideButton").addEventListener("click", tocarOrientacao);
  messagesEl.scrollTop = messagesEl.scrollHeight;
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
  scoreBreakdown.textContent = analise
    ? `Pipeline: final ${percentual}% = RAG ${Math.round((analise.fraude?.rag?.score ?? 0) * 100)}% x 55% + sinais ${Math.round((analise.fraude?.pontuacao?.score ?? 0) * 100)}% x 45%.`
    : "Aguardando saida da pipeline.";
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
    li.innerHTML = `<strong>${match.rotulo}/${match.categoria}</strong><span>${Math.round(match.similaridade * 100)}% similar</span>`;
    matchesEl.append(li);
  }

  if (matches.length === 0) {
    matchesEl.innerHTML = "<li>Aguardando mensagens.</li>";
  }
}

function criarWave() {
  const wave = document.createElement("span");
  wave.className = "wave-mini";
  return wave;
}

function criarDuracao(texto) {
  const duracao = document.createElement("small");
  duracao.textContent = texto;
  return duracao;
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
