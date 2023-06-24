const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "test");
app.use(express.static("public"));

app.get("/", (req, res) =>
{
    res.render("titanic");
});

app.get("/test2", (req, res) =>
{
    res.render("index2");
});

app.listen(port)
{
    console.log("listiening on port " + port);
}