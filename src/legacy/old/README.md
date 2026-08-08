# Implementações legadas

Esta pasta preserva o fluxo inicial de WhatsApp, o RAG de conversas e o
experimento `fraude-rag` para compatibilidade e comparação. A execução oficial
da pipeline antifraude fica em `src/pipeline/antifraude.js` e é iniciada por
`npm run pipeline:offline`.

Os scripts `start`, `monitor`, `rag` e `fraude` continuam disponíveis, mas
apontam explicitamente para estes módulos históricos. Novas funcionalidades não
devem ser adicionadas aqui.
