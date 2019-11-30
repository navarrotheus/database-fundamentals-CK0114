const db = require('../../database/pool');

class Playlist {
  async getPlaylists() {
    const playlists = await db.query(
      `select p.nome, p.data_criacao, p.tempo_total from playlist p`
    );

    return playlists;
  }

  async getPlaylistsById(id) {
    const playlist = await db.query(
      `select p.nome, p.data_criacao, p.tempo_total from playlist p where p.id=${id}`
    );

    return playlist;
  }

  async postPlaylist(name) {
    await db.query(`insert into playlist (nome) values ('${name}')`);

    const playlists = await db.query(
      `select p.nome, p.data_criacao, p.tempo_total from playlist p`
    );

    return playlists;
  }

  async deletePlaylist(id) {
    await db.query(`delete from playlist p where p.id=${id}`);

    const playlists = await db.query(
      `select p.nome, p.data_criacao, p.tempo_total from playlist p`
    );

    return playlists;
  }
}

export default Playlist;
