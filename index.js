"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var port = 3000;
var hostname = "0.0.0.0";
var server = http.createServer(function (_req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
