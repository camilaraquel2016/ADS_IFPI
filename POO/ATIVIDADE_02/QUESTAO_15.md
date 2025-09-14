15. Altere o local em que os arquivos *.js são gerados para a pasta build: opção outDir

Resposta:

Alteração realizada com sucesso!

O uso do outDir no TypeScript é importante porque ajuda a deixar o projeto mais organizado.

Sem ele os arquivos ts e js ficam misturados o que dificulta ao tentar encontrar o código original (ts).

Quando usamos o outDir, o TypeScript joga todos os arquivos compilados/ gerados para dentro 
da pasta "build" e deixa na raiz apenas os ts originais.

Isso deixa o programa mais limpo e organizado, separando o código-fonte dos arquivos gerados.
