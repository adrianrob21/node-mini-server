const express = require("express");
const bodyParser = require("body-parser");

const paths = require("./paths/paths");
const routes = require("./routes/index");

const app = express();

app.set("view engine", "pug");
app.set("views", "templates");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(paths.stylePath));

app.use([routes]);

app.use((_, response) => {
  response.render("404");
});

app.listen(3000);
