"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
    }
    /**
     * start
: void    */
    Server.prototype.start = function () {
        var _this = this;
        var app = express_1.default();
        app.get("/", function (req, resp) {
            resp.send("<h1>Démarrage de l'application");
        });
        app.listen(this.port || 3000, function () { return console.log("le serveur en écoute sur le port : " + _this.port); });
    };
    return Server;
}());
exports.default = Server;
