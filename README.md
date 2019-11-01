<h1 align="center">
   SpotPer
</h1>

<p align = "center">
   <a href="-especificação-de-requisitos">Especificação de requisitos</a> |
   <a href="-der">DER</a>
</p>

## Especificação de requisitos
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
  

## DER
![DER](https://github.com/navarrotheus/database-fundamentals-CK0114/blob/master/DER/DER.jpg)
