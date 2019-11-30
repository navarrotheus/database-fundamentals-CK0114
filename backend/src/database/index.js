import Album from '../app/models/Album';
import Playlist from '../app/models/Playlist';

const models = [Album, Playlist];

class Database {
  constructor() {
    this.init();
  }

  init() {
    models.map(Model => new Model());
  }
}

export default new Database();
