const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
let tdnItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  // let day = date.getDate(); // for getting full date
     let day = date.getDay();  // for getting only day 
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else if (req.body.list === "Tdn") {
    workItems.push(item);
    res.redirect("/tdn");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/tdn", function (req, res) {
  res.render("list", { listTitle: "TDNOW List", newListItems: tdnItems });
});

app.post("/tdn", function (req, res) {
  let item = req.body.newItem;
  tdnItems.push(item);
  res.redirect("/tdn");
});

app.listen(3000, function () {
  console.log("server is started at port 3000");
});
