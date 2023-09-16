const http = require("http");
const fs = require("fs");
const PORT = 4000;

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;
const index = fs.readFileSync("./index.html", "utf-8");
// fs.readFile("./data.json", "utf-8", (err, data) => {
//   console.log(err, data);
// });

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    console.log(product);
    res.writeHead(200, { "Content-Type": "text/html" });
    //   res.end(JSON.stringify({ result: "about" }));
    const Dynindex = index
      .replace("**title**", product.title)
      .replace("**thumbnail**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(Dynindex);
    return;
  }

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 error");
      break;
  }
});

server.listen(PORT, () => {
  console.log("server run on port 4000");
});

// const dd = performance.now();
// console.log(dd);
