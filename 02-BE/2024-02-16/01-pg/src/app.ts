import bodyParser from "body-parser";
import express from "express";
import controllers from "./contexts";

const app = express();
const port = 1997; // 연습용 port로, 최대한 유니크한 포트로 연결한다.
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(controllers);

app.listen(port, () => {
  console.log("**----------------------------------**");
  console.log(" ========== Server is On!!! ========= ");
  console.log("**----------------------------------**");
});
