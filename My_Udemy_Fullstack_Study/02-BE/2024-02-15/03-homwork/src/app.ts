import bodyParser from "body-parser";
import express from "express";
import controllers from ".";
import authenticator from "./middlewares/authenticator.middleware";

const app = express();
const port = 1997;
const jsonParser = bodyParser.json();

app.use(authenticator);
app.use(jsonParser);
app.use(controllers);

app.listen(port, () => {
  console.log("**----------------------------------**");
  console.log("========== Server is On!!! ========== ");
  console.log("**----------------------------------**");
});
