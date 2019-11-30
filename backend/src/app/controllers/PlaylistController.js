import Playlist from '../models/Playlist';

const playlist = new Playlist();

class AlbumController {
  async index(req, res) {
    const { rows } = await playlist.getPlaylists();
    return res.json(rows);
  }

  async indexById(req, res) {
    const { rows } = await playlist.getPlaylistsById(req.params.id);
    return res.json(rows);
  }

  async store(req, res) {
    const { rows } = await playlist.postPlaylist(req.body.nome);

    return res.json(rows);
  }

  async delete(req, res) {
    const { rows } = await playlist.deletePlaylist(req.params.id);

    return res.json(rows);
  }
}

export default new AlbumController();
