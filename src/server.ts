import express, { urlencoded } from "express";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

/**
 * Registering all the routes and their corresponding routes with out app server object
 */
app.use("/api/v1", v1Router);

app.listen(serverConfig.PORT, () => {
  console.log(`Server running on port http://localhost:${serverConfig.PORT}`);
  console.log(`press CTL+C to stop the Server`);
});
