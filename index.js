const fs = require("fs");

// fs.writeFile("we.text", "i am text", (err) => {
//   console.log(err);
// });

// fs.readFile("we.text", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFileSync("we.text", "rewritten data");

// const data = fs.readFileSync("we.text", "utf-8");
// console.log(data);

fs.mkdir("mk", (err) => {
  console.log("folder created");
});

fs.writeFile("we.text", "do some", (err) => {
  console.log(err);
});

fs.rename("we.text", "yo.text", (err) => {
  console.log(err);
});

fs.appendFile("yo.text", " another", (err) => {
  console.log(err, "err");
});

fs.unlink("yo.text", (err) => {
  console.log(err);
});

fs.rmdir("mk", (err) => {
  console.log(err);
});

const dd = performance.now();
console.log(dd);
