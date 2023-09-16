# IMP

callbackpromise

# npm outdated

# npm update

const server = http.createServer((req, res) => {
if (req.url.startsWith("/product")) {
const id = req.url.split("/")[2];
const prod = products.find((p) => p.id === +id);
console.log(prod);
}

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/mf_nodejs.git
git push -u origin main
