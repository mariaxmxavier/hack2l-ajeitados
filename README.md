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

- `src/orquestracao.js`: monta o grafo LangGraph e define a ordem do processo.
- `src/agentes.js`: concentra os nos/agentes usados pelo grafo.
- `src/monitor-whatsapp-simulado.js`: simula monitoramento de WhatsApp com mensagens chegando ao longo do tempo.
- `src/rag.js`: salva conversas como casos e busca os `topK=3` mais semelhantes nas ultimas 24 horas.
- `.env.example`: variaveis esperadas para ElevenLabs.

## Como rodar

```bash
npm install
copy .env.example .env
npm start
```

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

## Fluxo atual

1. Normaliza a conversa recebida.
2. Divide mensagens entre `texto` e `audio`.
3. Transcreve audios com ElevenLabs Speech-to-Text quando houver `ELEVENLABS_API_KEY` e arquivo local.
4. Envia as mensagens processadas para um agente dummy.
5. Salva a conversa processada como um caso no RAG.
6. Busca as 3 conversas mais semelhantes das ultimas 24 horas.

Neste primeiro momento, se nao houver chave da ElevenLabs ou o arquivo de audio nao existir, a transcricao cai para um retorno dummy. O ponto de extensao esta em `transcreverAudioDummy`, dentro de `src/agentes.js`.

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
