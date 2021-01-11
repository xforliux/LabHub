"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var server = express();
var ClubServer = /** @class */ (function () {
    function ClubServer() {
    }
    ClubServer.Start = function (port) {
        server.get('/member', function (req, res) {
            res.send('express member service');
        });
        server.listen(port);
    };
    return ClubServer;
}());
exports.default = ClubServer;
