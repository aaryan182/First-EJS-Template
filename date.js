module.exports = getDate;

function getDate() {
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
  return day; 
}
