const db = require('../../database/pool');

class Album {
  async getAlbums() {
    const albums = await db.query(`select a.id, a.descricao nome_album, i.nome from album a join faixa f on a.id=f.album_id
    join faixa_interprete fi on fi.faixa_id=f.id join interprete i on i.id=fi.interprete_id`);

    return albums;
  }

  async getAlbumsById(id) {
    const album = await db.query(`select a.descricao nome_album, g.nome nome_gravadora, a.data_gravacao, a.data_compra, a.tipo_compra, a.preco_compra
    from album a join gravadora g on a.gravadora_id=g.id where a.id=${id}`);

    return album;
  }

  
}

export default Album;
