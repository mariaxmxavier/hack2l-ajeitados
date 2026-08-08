# hack2l-ajeitados
Projeto do time ajeitados para o hackaton2l 

## Entrada oficial de implementação

Toda implementação começa pelo orquestrador `preto-velho`: ele cria/assume o
trabalho no Beads, planeja, delega unidades independentes e exige validação,
revisão adversarial e evidência de PR antes da entrega. Use:

```bash
npm run preto-velho -- "descreva a implementação"
```

Isso executa `copilot --agent=preto-velho`. Iniciar o CLI sem selecionar esse
agente pode permitir um bypass do orquestrador.

### Canary operacional

```bash
python scripts/validate-agent-harness.py
python scripts/smoke-beads-dag.py
npm run observability:validate
git diff --check
```

## WhatsApp LangGraph Audio Pipeline

Ambiente inicial para processar uma conversa do WhatsApp, separar mensagens de texto e audio, passar os audios por uma etapa de processamento ElevenLabs e enviar tudo para um agente dummy.

## Estrutura

- `src/pipeline/antifraude.js`: pipeline oficial ponta a ponta.
- `src/knowledge/index.js`: parser OKF e índice unificado SQLite/FTS5.
- `src/integrations/gorilla-process.js`: integração com o pipeline Gorilla Python.
- `src/legacy/old/`: fluxo inicial de WhatsApp e RAG mantido para compatibilidade.
- `.env.example`: variaveis esperadas para ElevenLabs.

## Como rodar

```bash
npm install
copy .env.example .env
npm start
```

`npm start` executa a pipeline antifraude completa. Os comandos históricos
continuam disponíveis como `npm run start:legacy`, `npm run monitor`, `npm run
rag` e `npm run fraude`.

Para simular um monitoramento de WhatsApp, rode:

```bash
npm run monitor
```

O monitor le os eventos em `data/conversa-simulada.json`, espera o `delayMs` de cada item e envia o historico atualizado da conversa para o LangGraph a cada nova mensagem.

Para testar o RAG local, rode:

```bash
npm run rag -- "cliente quer saber prazo do pedido"
```

O RAG cria automaticamente `data/rag.sqlite` caso o banco ainda nao exista e retorna os `topK=3` casos com maior similaridade dentro das ultimas 24 horas. Cada caso e uma conversa de WhatsApp salva pelo monitor.

## Pipeline antifraude ponta a ponta

O fluxo integrado executa o LangGraph de WhatsApp, chama o pipeline Gorilla
Python em modo offline, transforma a resposta em documentos OKF/PKF, indexa a
base revisada e recupera evidencias no SQLite/FTS5. O resultado inclui risco,
proveniencia e a recomendacao `pausar` ou `escalar`.

```bash
npm run pipeline:offline
```

Por padrao, a execucao usa `gorilla/templates/response/response_poll_completed.json`
como fixture e nao consome a API. Para uma chamada real, defina `GORILLA_OFFLINE=0`
e configure `GORILLA_API_KEY`; para manter os
artefatos temporarios durante uma depuracao, use `PIPELINE_KEEP_ARTIFACTS=1`.

O indice unificado fica em `data/index/knowledge.sqlite` e usa os namespaces
`reviewed`, `conversation:<id>` e `dynamic:<run_id>`. O namespace dinamico e
removido no final da execucao.

## Observabilidade Metaswarm + Agent Flow

Os dois repositorios permanecem separados. Este projeto e responsavel por
emitir eventos e consultar o Beads; o Agent Flow observa o arquivo JSONL e
visualiza a execucao. O contrato compartilhado esta em
`.agent-observability/schema.json`.

Para emitir uma decisao de roteamento:

```bash
npm run observability:emit -- route_decision --session session-1 --agent orchestrator-1 --target researcher-1 --role researcher --bead hack2l-ajeitados-sx6 --reason "Need codebase research"
```

Para consultar o estado normalizado do Beads e validar o log:

```bash
npm run observability:read-beads
npm run observability:validate
```

O log `.agent-observability/events.jsonl` e gerado localmente e nao deve ser
versionado. Para visualizar eventos em tempo real, abra o checkout separado de
Agent Flow em `C:\Users\dudax\repos\agent-flow` dentro do VS Code, execute
`Agent Flow: Connect to Event Source`, escolha `Watch JSONL File` e selecione
este arquivo. O Agent Flow aceita tanto eventos legados com `time` numerico
quanto o contrato canonico com `timestamp` ISO.

Para testar a analise antifraude contra o dataset de golpes:

```bash
npm run fraude -- "URGENTE sua conta foi bloqueada, clique no link e informe o codigo SMS"
```

Para comparar as conversas recentes salvas no RAG das ultimas 24 horas com o dataset de golpes:

```bash
npm run fraude:recentes
```

Configure `HF_TOKEN` para usar embeddings pela API da Hugging Face. Sem token, o modulo usa embedding local de fallback para manter o fluxo testavel.

## Fluxo atual

1. Normaliza a conversa recebida.
2. Divide mensagens entre `texto` e `audio`.
3. Transcreve audios com ElevenLabs Speech-to-Text quando houver `ELEVENLABS_API_KEY` e arquivo local.
4. Envia as mensagens processadas para um agente dummy.
5. Salva a conversa processada como um caso no RAG.
6. Busca as 3 conversas mais semelhantes das ultimas 24 horas.
7. Compara as conversas recentes com `dataset_golpes.csv` e calcula score antifraude combinando sinais de pontuacao/texto e similaridade RAG.

Neste primeiro momento, se nao houver chave da ElevenLabs ou o arquivo de audio nao existir, a transcricao cai para um retorno dummy. O ponto de extensao legado esta em `src/legacy/old/agentes.js`.

## Formato do evento monitorado

```json
{
  "delayMs": 1000,
  "mensagem": {
    "id": "wa-001",
    "conversaId": "cliente-joao",
    "autor": "cliente",
    "tipo": "texto",
    "conteudo": "Oi, bom dia.",
    "timestamp": "2026-08-08T10:00:00-03:00"
  }
}
```
