import express, { Application } from "express";

const app: Application = express();

export default class StartApplication {
  constructor() {
    this.configServer();
  }

  configServer() {
    app.listen(process.env.PORT, () =>
      console.log(`listening on port ${process.env.PORT} ...`)
    );
  }
}