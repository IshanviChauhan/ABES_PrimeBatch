const http = require("http");
const fsPromises = require("fs/promises");
const PORT = 1200;

const getData = async () => {
  const resp = await fetch('https://dummyjson.com/products');
  const data = await resp.json();

  return data.products;
};

const getProductsHtml = (products) => {
  let result = "";
  products.forEach(({title, price}) => {
    result += `
      <div class="card">
        <h2>${title}</h2>
        <h3>${price}</h3>
      </div>
    `;
    return result;
})}

const server = http.createServer(async (req, res) => {
  console.log("Request Received");
  // console.log(typeof req);
  // console.log(Object.keys(req));
  // console.log(req.url);

  res.setHeader("Content-Type", "text/html");
  res.setHeader("my-name", "Ishanvi");

  const page = await fsPromises.readFile("./pages/homePage.html", {encoding : "utf-8",});
  // console.log(page.toString());

  // res.end("<h1 style='color:purple'>Hello World</h1>");
  // res.end(page.toString());

  const products = await getData();
  const productsHtml = getProductsHtml(products);
  const newPage = page.replace("__PRODUCTS__", productsHtml);
  res.end(newPage);

  // res.end("Done!")
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
