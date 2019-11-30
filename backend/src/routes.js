import { Router } from 'express';

import AlbumController from './app/controllers/AlbumController';
import PlaylistController from './app/controllers/PlaylistController';

const routes = new Router();

routes.get('/albums', AlbumController.index);
routes.get('/albums/:id', AlbumController.indexById);

routes.get('/playlists', PlaylistController.index);
routes.get('/playlists/:id', PlaylistController.indexById);
routes.post('/playlists', PlaylistController.store);
routes.delete('/playlists/:id', PlaylistController.delete);

export default routes;
