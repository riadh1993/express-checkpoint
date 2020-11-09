const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static("./public"));

const gettingDate = (req, res, next) => {
  var d = new Date();
  var theDate = d.getDay();
  var theHour = d.getHours();
  if (theDate >= 1 && theDate <= 6 && theHour >= 9 && theHour <= 17) {
    next();
  } else {
    res.send("you are not allowed to go to the about page.");
  }
};
app.get("/", (req, res) => {
  res.render("index.pug", {
    title: "Home page",
  });
});
app.get("/about", gettingDate, (req, res) => {
  res.render("about.pug", {
    title: "About page",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
