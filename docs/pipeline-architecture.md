# Arquitetura da pipeline antifraude

## Execução

`src/entrypoints/pipeline-cli.js` inicia o grafo em
`src/pipeline/antifraude.js`. O grafo normaliza a conversa e o áudio, monta a
consulta, executa `gorilla/main.py` em subprocesso, valida o bundle OKF, indexa
os documentos, recupera evidências, calcula risco, decide e limpa os artefatos
dinâmicos.

```text
WhatsApp/CLI -> ingestão -> áudio -> Gorilla -> OKF dinâmico -> índice SQLite/FTS5
             -> reviewed + dynamic -> rerank -> risco -> decisão -> cleanup
```

## Índice e proveniência

`knowledge/reviewed/` é a fonte canônica persistente. O banco em
`data/index/knowledge.sqlite` é somente o índice e usa os namespaces
`reviewed`, `conversation:<id>` e `dynamic:<run_id>`. O namespace dinâmico e o
diretório temporário do Gorilla são removidos ao final da execução.

Cada resultado mantém `sourceType`, `sourcePath`, namespace, score lexical,
score vetorial e score combinado. A conversa atual só entra no namespace
`conversation` depois da recuperação.

## Decisão

O MVP usa regras determinísticas: execução degradada ou evidência insuficiente
gera `escalar`; risco `>= 0.75` gera `pausar`; risco intermediário gera
`escalar`. A decisão é recomendação operacional e não movimenta valores.

## Comandos

```bash
npm start
npm run pipeline:offline
npm test
python scripts/validate-agent-harness.py
python scripts/smoke-beads-dag.py
npm run observability:validate
```

O fluxo histórico foi movido para `src/legacy/old/` e permanece acessível pelos
comandos `start:legacy`, `monitor`, `rag` e `fraude`.
