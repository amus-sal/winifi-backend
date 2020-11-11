import express from 'express'
import Router from './routes/index'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
class App {
  private httpServer: any

  constructor() {
    this.httpServer = express()
    this.httpServer.use(cors())  
    this.httpServer.use(bodyParser.urlencoded({ extended: true }));
    this.httpServer.use(bodyParser.json());

    new Router(this.httpServer);

  }

  public Start = (port: number) => {
    return new Promise((resolve, reject) => {

      this.httpServer.listen(
        port,
        () => {
          resolve(port)
        })
        .on('error', (err: object) => reject(err));
    })
  }
}

export default App;