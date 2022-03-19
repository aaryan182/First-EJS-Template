const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  // res.write("<p>You have to work GO NOW </p>")
  // res.write("<h1>It's a working day !</h1>")
  // res.send();

  // If there are lot of html code then typing res.write for each line is difficult to overcome this we use

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
    console.log("Error: current day is equal to : " + currentDay);
  }

  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("server is started at port 3000");
});