var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
