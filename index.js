const http = require("http");
const fs = require("fs");
const PORT = 4000;

fs.readFile("./data.json", "utf-8", (err, data) => {
  console.log(err, data);
});

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("success");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/json" });
      res.end(JSON.stringify({ result: "about" }));
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 error");
      break;
  }
});

server.listen(PORT, () => {
  console.log("serer run on port 4000");
});

// const dd = performance.now();
// console.log(dd);
