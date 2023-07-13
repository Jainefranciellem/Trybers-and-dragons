   <h1>Projeto Trybers and Dragons</h1>
    <h2>Descrição:</h2>
   
<P>O projeto Trybers and Dragons - T&D é uma iniciativa que busca a aplicação dos princípios da arquitetura SOLID e da Programação Orientada a Objetos (POO) em um empolgante jogo de interpretação de papéis (RPG).</P>

<P>Em T&D, os jogadores são transportados para um mundo fictício onde assumem o papel de personagens pertencentes a diferentes raças, cada uma com suas características únicas, como pontos de vida e destreza. Além disso, os personagens possuem arquétipos específicos, representando suas vocações e habilidades individuais.</P>

<p>O cerne do jogo reside nos combates entre os personagens controlados pelos jogadores e monstros. Esses combates são baseados em atributos e habilidades específicas de cada personagem, adicionando um elemento estratégico às batalhas.</p>

<p>Ao desenvolver este projeto, utilizei aplicação dos princípios da arquitetura SOLID e da POO. Isso resultou em um código bem estruturado, capaz de se adaptar facilmente a mudanças e, acima de tudo, de ser mantido com facilidade ao longo do tempo.</p>
    <h2>Como Instalar:</h2>
    <h3>Com Docker:</h3>
    <ol>
        <li>Clone este repositório:<br>
            <code>git clone git@github.com:Jainefranciellem/trybers-and-dragons.git</code></li>
        <li>Acesse o diretório clonado:<br>
            <code>cd trybers-and-dragons</code></li>
        <li>Instale as dependências:<br>
            <code>npm install</code></li>
        <li>Execute os serviços Node.js e DB usando o comando:<br>
            <code>docker-compose up -d</code></li>
        <li>Isso iniciará um container chamado "trybers_and_dragons".</li>
        <li>Você pode executar o container "trybers_and_dragons" por linha de comando (CLI) ou abri-lo no VS Code.
            Para acessar o terminal interativo do container criado pelo compose, que está sendo executado em segundo plano, use o comando:<br>
            <code>docker exec -it trybers_and_dragons bash</code></li>
        <li>Dentro do container "trybers_and_dragons", instale as dependências (se houver) com o comando:<br>
            <code>npm install</code></li>
        <li>Atenção: Se você optar por usar o Docker, todos os comandos disponíveis no package.json (npm start, npm test, npm run dev, etc.) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando "docker exec" mencionado acima.</li>
        <li>Atenção: Não execute o comando "npm audit fix"! Ele atualiza várias dependências do projeto, o que pode causar conflitos.</li>
    </ol>
    <h3>Sem Docker:</h3>
    <ol>
        <li>Instale as dependências (se houver) com o comando:<br>
            <code>npm install</code></li>
        <li>Atenção: Não execute o comando "npm audit fix"! Ele atualiza várias dependências do projeto, o que pode causar conflitos com o avaliador.</li>
    </ol>
    <p><strong>Observações:</strong></p>
    <ul>
        <li>Para executar o projeto sem Docker, é obrigatório ter o Node.js instalado em seu computador.</li>
    </ul>
