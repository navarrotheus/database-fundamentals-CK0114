<h1 align="center">
  <img alt="SpotPer" title="SpotPer" src="https://uploaddeimagens.com.br/images/002/472/517/original/spotper.png?1572625611" width="400px" />
</h1>

<p align = "center">
   <a href="#memo-especificação-de-requisitos">Especificacao de requisitos</a>&nbsp;|&nbsp;
   <a href="#bookmark_tabs-instruções">Instruções</a>&nbsp;|&nbsp;
   <a href="#bar_chart-der">DER</a>&nbsp;|&nbsp;
   <a href="#bar_chart-dr">DR</a>
</p>

## :memo: Especificação de requisitos
Um colecionador de música clássica resolveu utilizar a tecnologia de banco de dados
para implementar uma versão personalizada do Spotify, o **SpotPer**. Para tanto,
resolveu contratá-los para realizar o projeto e a implementação do banco de dados do
SpotPer, o BDSpotPer. Após a análise de requisitos, obtida através de entrevistas com o
usuário, identificamos as seguintes características:
1. Cada **álbum**, uma coleção de músicas agrupadas em um ou mais CDs,
possui:
   1. Um código identificador uma descrição, gravadora, preço de compra, data
de compra, data de gravação e o tipo de compra;
   1. Cada álbum possui ainda um conjunto de faixas (músicas);
   1. A data de compra deve ser obrigatoriamente posterior a 01.01.2000;
   1. O tipo de compra pode ser física (compra de um CD ou vinil) ou download;
   1. O preço de compra de um álbum não dever ser superior a três vezes a
média do preço de compra de álbuns, com todas as faixas com tipo de
gravação DDD.
1. Cada **faixa** de um álbum possui obrigatoriamente como propriedades:
   1. O número da faixa (posição da faixa no álbum), uma descrição, tipo de
composição, intérprete(s), compositor(es), tempo de execução e tipo de
gravação;
   1. O tipo de gravação só pode ser ADD ou DDD;
   1. Uma faixa pode apresentar vários compositores e intérpretes.
1. Para cada tipo de **composição**, devem estar associados um código
identificador e a descrição. O tipo deve caracterizar se a obra gravada é uma
sinfonia, ópera, sonata, concerto e assim por diante. É obrigatório identificar o
tipo de composição para cada faixa existente. Uma faixa só pode apresentar
um tipo de composição;
1. Cada **intérprete** possui um código identificador, nome, tipo. Tipo de intérprete
pode ser orquestra, trio, quarteto, ensemble, soprano, tenor, etc;
1. Um **compositor** deve possuir, como propriedades, nome, local de nascimento
(cidade e país), data de nascimento e data de morte (se for o caso). Cada
compositor possui um identificador. Podem existir compositores no banco de
dados, sem estarem associados a faixas. Cada compositor deve estar
obrigatoriamente associado a um período musical;
1. Cada **período musical** possuirá um código, uma descrição (idade média,
renascença, barroco, clássico, romântico e moderno) e intervalo de tempo em
que esteve ativo;
1. Para cada **gravadora**, estão associados um código, nome, endereço, telefones
e endereço da home page;
1. O usuário do SpotPer pode definir **Playlists**. Uma playlist pode ser composta
por uma ou mais faixas, que, por sua vez, podem pertencer a álbuns distintos.
Uma playlist terá como propriedades:
   1. Código identificador, nome, data de criação, tempo total de execução;
   1. Para cada faixa de uma playlist, tem-se a data da última vez que foi tocada
e o número de vezes que foi tocada.
1. Defina as seguintes restrições:
   1. Um álbum, com faixas de músicas do período barroco, só pode ser adquirido,
caso o tipo de gravação seja DDD;
   1. Um álbum não pode ter mais que 64 faixas (músicas);
   1. No caso de remoção de um álbum do banco de dados, todas as suas faixas
devem ser removidas. Lembre-se que faixas podem apresentar, por sua vez,
outras associações.
1. Criar uma visão materializada que tem como atributos o nome da playlist e a
quantidade de álbuns que a compõem.
1. Defina uma função que tem como parâmetro de entrada o nome (ou parte do)
nome do compositor e o parâmetro de saída todos os álbuns com obras
compostas pelo compositor.
1. Implemente uma aplicação que implementa as seguintes
funcionalidades:
   1. Criação de playlists no banco de dados. Esta função deve mostrar todos os
álbuns existentes. O usuário pode, assim, escolher o(s) álbum(ns) e quais
faixas destes que devem compor a playlist;
   1. Manutenção de playlists. Esta funcionalidade deve mostrar todas as playlists
existentes. Ao escolha uma playlist, a função deve permitir a remoção de
músicas existentes e a inserção de novas músicas na playlist escolhida.
1. Especifique em SQL as seguintes consultas sobre o banco de dados:
   1. Listar os álbum com preço de compra maior que a média de preços de compra
de todos os álbuns;
   1. Listar nome da gravadora com maior número de playlists que possuem pelo
uma faixa composta pelo compositor Dvorack;
   1. Listar nome do compositor com maior número de faixas nas playlists
existentes;
   1. Listar playlists, cujas faixas (todas) têm tipo de composição “Concerto” e
período “Barroco”.

## :bookmark_tabs: Instruções
1. Rodando o servidor backend:
   1. Entre na pasta backend
      > cd backend
   1. Instale as dependências
      > yarn
      ou
      > npm install
   1. Criar o arquivo .env com as variáveis ambientes para realizar a conexão com o banco [ver .env.example](https://github.com/navarrotheus/database-fundamentals-CK0114/blob/backend/backend/.env.example)
   1. Rodar o servidor
      > yarn dev
   1. Para criar as tabelas & restrições do banco
      > yarn createAll
1. Rodando o frontend:
   1. Entre na pasta frontend
      > cd ../frontend
   1. Instale as dependências
      > yarn
      ou
      > npm install
      
   1. Inicie a aplicação
      > yarn start

## :bar_chart: DER
![DER](https://github.com/navarrotheus/database-fundamentals-CK0114/blob/master/DER.jpg)

## :bar_chart: DR
![DR](https://github.com/navarrotheus/database-fundamentals-CK0114/blob/master/DR.jpg)
