import { Router } from 'express';

const db = require('./database/client');

const routes = new Router();

routes.get('/albums', async (req, res) => {
  const { albums } = await db.query(
    'select descricao nome, tipo_compra tipo, preco_compra preco from album'
  );
  return res.send(JSON.stringify(albums.rows));
});

export default routes;
