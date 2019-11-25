const db = require('../client');

async function seedTables() {
  await db.connect();

  await db.query(`insert into Gravadora (nome, homepage, cep, rua, numero) values
    ( 'Cash Money', 'https://www.cashmoney-records.com/', 49080664, 'Travessa Invasão', 5231 ),
    ( 'BMG', 'https://www.bmg.com/de/', 72862024, 'Quadra Quadra 8', 251 ),
    ( 'Roc Nation', 'https://rocnation.com/', 64016485, 'Rua Nossa Senhora do Perpétuo Socorro', 112 ),
    ( 'Midas Studios', 'http://midasstudios.com.br/', 74395430, 'Rua SRM 27', 986 ),
    ( 'K9 Studio', 'https://www.k9estudio.com.br/', 59146350, 'Rua Piau', 1418 );`);

  await db.query(`insert into Album (gravadora_id, descricao, data_gravacao, data_compra,	tipo_compra, preco_compra) values
    ( 1 , 'Michael Jackson – Thriller', '1982-11-02', '2019-11-13', 'CD', 39.99 ),
    ( 2 , 'Pink Floyd – The Wall', '1979-11-30', '2019-10-12', 'Vinil', 49.99 ),
    ( 3 , 'AC/DC – Back In Black','1980-07-25', '2010-01-05', 'Download', 12.99 ),
    ( 4 , 'The Beatles – The Beatles','1968-11-22', '2013-09-28', 'Download', 14.99 ),
    ( 5 , 'Guns N’ Roses – Appetite For Destruction','1987-07-21', '2009-01-07', 'CD', 10.99 ),
    ( 4 , 'Cage the Elephant – Tell me im pretty','2015-12-18', '2017-10-15', 'Vinil', 20.99 );`);

  await db.query(`insert into Telefone_Gravadora (gravadora_id, telefone) values
    ( 1 , '(84) 98800-1415' ),
    ( 1 , '(84) 2925-1538' ),
    ( 2 , '(65) 98742-1983' ),
    ( 3 , '(65) 2697-4472' ),
    ( 4 , '(41) 98166-3679'),
    ( 5 , '(85) 2593-9873' );`);

  await db.query(`insert into Playlist (nome) values
    ( 'Rock' ),
    ( 'Pop' ),
    ( 'MinhaPlaylist' );`);

  await db.query(`insert into Composicao (tipo) values
    ( 'Sinfonia' ),
    ( 'Ópera' ),
    ( 'Sonata' ),
    ( 'Concerto' );`);

  await db.query(`insert into Faixa (album_id, composicao_id, descricao, tipo_gravacao, tempo_execucao, numero_faixa) values
    ( 1 , 1 , 'Wanna Be Startin Somethin', 'ADD', '00:06:03', 1 ),
    ( 1 , 2 , 'Thriller', 'DDD', '00:05:57', 2 ),
    ( 1 , 3 , 'Beat It', 'ADD', '00:04:18', 3 ),
    ( 1 , 4 , 'Billie Jean', 'ADD', '00:04:54', 4 ),
    ( 6 , 1 , 'Cry Baby', 'DDD', '00:04:07', 1 ),
    ( 6 , 1 , 'Mess Around', 'DDD', '00:02:53', 2 ),
    ( 6 , 1 , 'Sweetie Little Jean', 'DDD', '00:03:44', 3 ),
    ( 6 , 1 , 'Too Late to Say Goodbye', 'DDD', '00:04:12', 4 ),
    ( 6 , 1 , 'Cold Cold Cold', 'DDD', '00:03:34', 5 ),
    ( 6 , 1 , 'Trouble', 'DDD', '00:03:45', 6 ),
    ( 6 , 1 , 'How Are You True', 'DDD', '00:04:40', 7 ),
    ( 6 , 1 , 'Thats Right', 'DDD', '00:03:52', 8 ),
    ( 6 , 1 , 'Punchin Bag', 'DDD', '00:03:47', 9 ),
    ( 6 , 1 , 'Portuguese Knife Fight', 'DDD', '00:03:37', 10 );`);

  await db.query(`insert into Faixa_Playlist (faixa_id, playlist_id) values
    ( 5, 3 ),
    ( 6, 3 ),
    ( 7, 3 ),
    ( 8, 3 ),
    ( 9, 3 ),
    ( 10, 3 ),
    ( 11, 3 ),
    ( 12, 3 ),
    ( 13, 3 ),
    ( 14, 3 );`);

  await db.query(`insert into Interprete (nome, tipo) values
    ( 'Carl Friedrich', 'Orquestra' ),
    ( 'Adolphe', 'Trio' ),
    ( 'Isaac', 'Quarteto' ),
    ( 'Tomaso', 'Ensemble' ),
    ( 'Franco', 'Soprano' ),
    ( 'Hugo Emil', 'Tenor' ),
    ( 'Francisco António de Almeida', 'Orquestra' ),
    ( 'Hendrik', 'Soprano' );`);

  await db.query(`insert into Faixa_Interprete (faixa_id, interprete_id) values
    ( 1, 7 ),
    ( 2, 1 ),
    ( 3, 2 ),
    ( 4, 8 ),
    ( 5, 3 ),
    ( 6, 4 ),
    ( 7, 2 ),
    ( 8, 3 ),
    ( 9, 4 ),
    ( 10, 8 ),
    ( 11, 1 ),
    ( 12, 2 ),
    ( 13, 7 ),
    ( 14, 5 ),
    ( 14, 1 ),
    ( 1, 3 );`);

  await db.query(`insert into Periodo_Musical (descricao, intervalo_tempo) values
    ( 'Idade Média', '476 - 1492' ),
    ( 'Renascença', '1400 - 1600' ),
    ( 'Barroco', '1600 - 1750' ),
    ( 'Clássico', '1730 - 1820' ),
    ( 'Romântico', '1810 - 1910' ),
    ( 'Moderno', '1880 - 2010' );`);

  await db.query(`insert into Compositor (periodo_id, nome, local_nasc_cidade, local_nasc_pais, data_nasc, data_morte) values
    ( 1 , 'Branca de Castela', 'Palência', 'Espanha', '1188-03-04', '1252-11-27' ),
    ( 2 , 'Hans Leo Hassler', 'Nuremberg', 'Alemanha', '1564-11-05', '1612-06-08' ),
    ( 3 , 'Domenico Scarlatti', 'Nápoles', 'Itália', '1685-10-26', '1757-07-23' ),
    ( 4 , 'Giovanni Battista Viotti', 'Londes', 'Inglaterra', '1755-05-12', '1824-03-03' ),
    ( 5 , 'Daniel François Esprit Auber', 'Caen', 'França', '1782-01-29', '1871-05-13' ),
    ( 6 , 'Paul Dukas', 'Paris', 'França', '1865-10-01', '1935-05-17' );`);

  await db.query(`insert into Faixa_Compositor (faixa_id, compositor_id) values
    ( 1 , 5 ),
    ( 2 , 3 ),
    ( 3 , 1 ),
    ( 4 , 2 ),
    ( 5 , 4 ),
    ( 6 , 2 ),
    ( 7 , 6 ),
    ( 8 , 1 ),
    ( 9 , 6 ),
    ( 10 , 3 ),
    ( 11 , 4 ),
    ( 12 , 5 ),
    ( 13 , 2 ),
    ( 14 , 6 ),
    ( 1 , 2 ),
    ( 5 , 3 ),
    ( 3 , 4 );`);

  await db.end();

  console.log('Dados inseridos com sucesso');
}

seedTables();
