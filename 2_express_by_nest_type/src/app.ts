import * as express from "express";
import catsRouter from "./cats/cats.route";
import { Cat } from "./cats/cats.model";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log(`this is logging midw`);
      next();
    });
    // * JSON 미들웨어
    this.app.use(express.json());
    this.setRoute();
  }

  public listen() {
    this.app.listen(8000, () => {
      console.log(`server is on`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
