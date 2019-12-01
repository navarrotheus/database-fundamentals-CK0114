import Faixa from '../models/Faixa';

const faixa = new Faixa();

class FaixaController {
  async index(req, res) {
    const { rows } = await faixa.getFaixas();
    
    return res.json(rows);
  }
}

export default new FaixaController();
