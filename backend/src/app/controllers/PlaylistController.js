import Playlist from '../models/Playlist';

const playlist = new Playlist();

class AlbumController {
  async index(req, res) {
    const { rows } = await playlist.getPlaylists();
    return res.json(rows);
  }

  async indexFaixasPlaylist(req, res) {
    const { rows } = await playlist.getFaixasPlaylist(req.params.id);
    return res.json(rows);
  }

  async indexById(req, res) {
    const { rows } = await playlist.getById(req.params.id);
    return res.json(rows);
  }

  async storePlaylist(req, res) {
    const { rows } = await playlist.postPlaylist(req.params.nome);

    return res.json(rows);
  }

  async storeFaixaPlaylist(req, res) {
    const { rows } = await playlist.addFaixaPlaylist(req.body.id_faixa, req.body.id_playlist);

    return res.json(rows);
  }

  async delete(req, res) {
    const { rows } = await playlist.deletePlaylist(req.params.id);

    return res.json(rows);
  }

  async deleteFaixaPlaylist(req, res) {
    const { rows } = await playlist.removeFaixaPlaylist(req.body.id_faixa, req.body.id_playlist);

    return res.json(rows);
  }
}

export default new AlbumController();
