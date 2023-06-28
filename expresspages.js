const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/index.html"));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/about.html"));
});
app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/contact-me.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/404.html"));
});

app.listen(3030, () => {
    console.log("listening 3030");
});
