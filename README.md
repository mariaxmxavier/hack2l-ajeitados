# Hack2L Ajeitados — MVP de deteccao de golpes

Pipeline local que recebe uma conversa de WhatsApp, normaliza texto e audio,
executa uma busca Gorilla, transforma os resultados em OKF, consulta o RAG
unificado e retorna uma recomendacao operacional (`pausar` ou `escalar`).

## 1. Estou na pasta do repositorio. O que faco?

Abra um terminal nessa pasta e execute os comandos abaixo.

### Windows PowerShell — demonstração pelo mockup

```powershell
npm install
python -m pip install -r gorilla/requirements.txt
npm run demo
```

Abra **http://localhost:5173**. Se essa porta estiver ocupada, o terminal informa a próxima porta escolhida. Na tela, selecione um exemplo, clique em **Iniciar demo**, acompanhe a conversa, a consulta Gorilla, o RAG, a decisão e a ação simulada de bloquear contato. A seção **Ver saída técnica da pipeline** mostra o envelope retornado pelo LangGraph.

### Linux/macOS — demonstração pelo mockup

```bash
npm install
python3 -m pip install -r gorilla/requirements.txt
npm run demo
```

`npm run demo` usa a pipeline oficial e uma resposta Gorilla de fixture, portanto não precisa de API key e não faz chamadas externas. A primeira execução cria o índice local em `data/index/knowledge.sqlite`; a decisão, o quality gate e as evidências ficam visíveis na interface.

Para executar somente a pipeline pelo terminal, sem a interface:

```powershell
npm start
```

Para repetir a demonstracao com outra entrada JSON:

```powershell
npm run pipeline:offline -- data/conversa-simulada.json
```

O arquivo deve conter uma lista de mensagens ou uma lista de objetos com a
chave `mensagem`.

## 2. O que acontece durante a demonstracao?

```text
conversa WhatsApp
  -> normalizacao e transcricao de audio
  -> consulta Gorilla Python
  -> validacao e bundle OKF dinamico
  -> indexacao SQLite/FTS5
  -> retrieval reviewed + conversation + dynamic
  -> deduplicacao e rerank
  -> risco e decisao
  -> limpeza dos artefatos dinamicos
```

O resultado Gorilla fica temporariamente em uma pasta do sistema. O namespace
`dynamic:<run_id>` tambem e removido ao terminar. A fonte persistente e
`knowledge/reviewed/`; o SQLite e somente o indice.

## 3. Usar a API real do Gorilla (opcional)

No PowerShell:

```powershell
$env:GORILLA_OFFLINE="0"
$env:GORILLA_API_KEY="sua-chave"
npm run demo
```

No Linux/macOS:

```bash
export GORILLA_OFFLINE=0
export GORILLA_API_KEY="sua-chave"
npm run demo
```

Nunca commite `.env` ou chaves. Para voltar ao modo demonstracao, remova
`GORILLA_OFFLINE` ou defina `GORILLA_OFFLINE=1`.

## 4. Validar antes de apresentar

Execute a sequencia completa:

```bash
npm test
npm start
python scripts/validate-agent-harness.py
python scripts/smoke-beads-dag.py
npm run observability:validate
git diff --check
```

Comandos adicionais:

```bash
npm run fraude -- "URGENTE pix, informe o codigo SMS"
npm run fraude:recentes
npm run monitor
```

## 5. Arquitetura do repositorio

```text
src/entrypoints/       entradas CLI
src/pipeline/          grafo LangGraph antifraude
src/knowledge/         parser OKF, embeddings e indice SQLite/FTS5
src/integrations/      Gorilla subprocesso e integracoes externas
src/demo-server.js     API local que conecta o mockup ao LangGraph
public/                mockup web servido por npm run demo
knowledge/reviewed/    fonte canonica OKF versionada
gorilla/               cliente Python e pipeline de bundle OKF
tests/                 testes unitarios e integrados
scripts/               canarios, observabilidade e ferramentas
src/legacy/old/        fluxo antigo mantido somente por compatibilidade
docs/                  documentacao de arquitetura
```

O fluxo oficial e `npm start`/`npm run pipeline:offline`. Os comandos
`start:legacy`, `monitor`, `rag` e `fraude` continuam apontando para o codigo
historico em `src/legacy/old/`.

## 6. Entrada oficial de implementacao

Toda alteracao de codigo deve comecar pelo orquestrador `preto-velho`:

```bash
npm run preto-velho -- "descreva a implementacao"
```

Ele cria ou assume o trabalho no Beads, exige validacao e coordena a entrega.

## Documentacao adicional

- [Arquitetura da pipeline](docs/pipeline-architecture.md)
- [Pipeline Gorilla](gorilla/README.md)
- [Inventario do harness](docs/agent-harness-inventory.md)
