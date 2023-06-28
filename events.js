const EventEmitter = require("events"); // used to handle events in node js,
const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) => {
    console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit("start", 1, 100);

eventEmitter.emit("start", 1, 34);

const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url === "/") {
        fs.readFile("pages/index.html", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                return res.end;
            }
        });
    } else if (req.url === "/about") {
        fs.readFile("pages/about.html", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                return res.end;
            }
        });
    } else if (req.url === "/contact-me") {
        fs.readFile("pages/contact-me.html", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                return res.end;
            }
        });
    } else {
        fs.readFile("pages/404.html", (err, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end;
        });
    }
}).listen(8080);

const square = require("./exp"); //this is how we import in a function
console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
