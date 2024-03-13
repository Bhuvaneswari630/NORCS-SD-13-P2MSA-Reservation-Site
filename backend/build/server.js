"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var camp_controllers_js_1 = __importDefault(require("./Controllers/camp_controllers.js"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8000;
var MONGO_URI = "mongodb+srv://admin:password-group-4@mern-campsite-reservati.dg4wdlm.mongodb.net/?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/camps', camp_controllers_js_1.default);
app.get('/', function (req, res) {
    res.send('Welcome to Camping....');
});
mongoose_1.default
    .connect(MONGO_URI)
    .then(function () { return console.log("MongoDB connected"); })
    .catch(function (err) { return console.error("MongoDB connection error:", err); });
app.listen(PORT, function () {
    console.log('listening on port', PORT);
});
