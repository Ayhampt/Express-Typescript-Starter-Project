import express from "express";
import { serverConfig } from "./config";
import pingRouter from "./routers/ping.router";

const app = express();

/**
 * Registering all the routes and their corresponding routes with out app server object
 */
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server running on port http://localhost:${serverConfig.PORT}`);
  console.log(`press CTL+C to stop the Server`);
});
