"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_session_1 = __importDefault(require("cookie-session"));
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
require("./controllers/LoginController");
var AppRouter_1 = require("./AppRouter");
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['server'] }));
app.use(loginRoutes_1.router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Listening on port 3000');
});