const db = require('../../database/pool');

class Faixa {
  async getFaixas() {
    const faixa = await db.query(
      `select f.id id_faixa, f.descricao nome_faixa, f.tipo_gravacao tipo_faixa, f.tempo_execucao tempo_faixa, f.numero_faixa numero_faixa from faixa f`
    );

    return faixa;
  }
}

export default Faixa;
