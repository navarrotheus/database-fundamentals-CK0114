import { Router } from 'express';

import AlbumController from './app/controllers/AlbumController';
import PlaylistController from './app/controllers/PlaylistController';
import FaixaController from './app/controllers/FaixaController';

const routes = new Router();

routes.get('/albums', AlbumController.index);
routes.get('/albums/:id', AlbumController.indexById);

routes.get('/playlists', PlaylistController.index); // mostrar todas playlists
routes.get('/playlists/info/:id', PlaylistController.indexById); // mostrar a playlist com tal id
routes.get('/playlists/:id', PlaylistController.indexFaixasPlaylist); // mostrar as faixas da playlist

routes.post('/playlists/:nome', PlaylistController.storePlaylist); // criar playlist com tal nome
routes.delete('/playlists/:id', PlaylistController.delete); // deletar playlist com tal id

routes.post('/playlists', PlaylistController.storeFaixaPlaylist); // inserir faixa na playlist
routes.delete('/playlists', PlaylistController.deleteFaixaPlaylist); // remover faixa da playlist

routes.get('/biblioteca', FaixaController.index);

export default routes;
