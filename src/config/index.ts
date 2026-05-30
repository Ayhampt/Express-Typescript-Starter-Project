// This file contains all the basic configuration logic for the app server to work
import dotenv from "dotenv";

type serverConfig = {
  PORT: number;
};
function loadEnv() {
  dotenv.config();
  console.log("environment variables loaded");
}
loadEnv();

export const serverConfig: serverConfig = {
  PORT: Number(process.env.PORT) || 8081,
};
