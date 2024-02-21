import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 201;
  console.log(req.url);
  res.write("hello");
  res.end();
});

server.listen(5555, "localhost", () => {
  console.log("서버 켜짐...5555 포트에....짜잔....");
});
