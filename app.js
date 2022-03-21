const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food", "Cook Food" , "Eat Food"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

app.get("/", function (req, res) {
  let today = new Date();

  // res.write("<p>You have to work GO NOW </p>")
  // res.write("<h1>It's a working day !</h1>")
  // res.send();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day , newListItems: items});
});

app.post("/", function (req, res) {
   let item = req.body.newItem;
   items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server is started at port 3000");
});
