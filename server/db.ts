import * as mongoose from 'mongoose';

class DataBase {
  
  private dburl = 'mongodb://172.17.0.2/dbtestes';
  private dbconnection;
  
  constructor() {}

  createConnection() {
    mongoose.connect(this.dburl);
    this.logger(this.dburl);
  }

  logger(uri) {
    this.dbconnection = mongoose.connection;
    this.dbconnection.on('connected', () => console.log("Mongoose está conectado!"));
    this.dbconnection.on('error', (error) => console.error.bind(console, "Erro na conexão: " + error));
  }
}

export default DataBase;