const db = require('../../database/pool');

class Album {
  async getAlbums() {
    const albums = await db.query(`select a.id, a.descricao from album a`);

    return albums;
  }

  async getAlbumsById(id) {
    const album = await db.query(`select a.id id_album, a.descricao nome_album, f.id id_faixa, f.descricao nome_faixa, f.tipo_gravacao tipo_faixa from album a join faixa f on a.id=f.album_id where a.id=${id}`);

    return album;
  }
  
}

export default Album;
