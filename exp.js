const express = require("express");
const app = express();
const port = 6969;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});

//this is how we export
exports.area = function (width) {
    return width * width;
};

exports.perimeter = function (width) {
    return 4 * width;
};
