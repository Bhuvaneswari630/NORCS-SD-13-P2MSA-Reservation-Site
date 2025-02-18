"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Camp_js_1 = __importDefault(require("../Models/Camp.js"));
var Review_js_1 = __importDefault(require("../Models/Review.js"));
var mongodb_1 = require("mongodb");
var router = express_1.default.Router();
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchBy, searchByValue, camp, camp, _a, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                searchBy = Object.keys(req.query)[0];
                searchByValue = req.query[searchBy];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 11, , 12]);
                if (!(searchBy === undefined)) return [3 /*break*/, 3];
                return [4 /*yield*/, Camp_js_1.default.find()];
            case 2:
                camp = _b.sent();
                res.json(camp);
                return [3 /*break*/, 10];
            case 3:
                camp = void 0;
                _a = searchBy;
                switch (_a) {
                    case 'state': return [3 /*break*/, 4];
                    case 'city': return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 4: return [4 /*yield*/, Camp_js_1.default.find({ state: { $eq: searchByValue } })];
            case 5:
                camp = _b.sent();
                res.json(camp);
                return [3 /*break*/, 10];
            case 6: return [4 /*yield*/, Camp_js_1.default.find({ city: { $eq: searchByValue } })];
            case 7:
                camp = _b.sent();
                res.json(camp);
                return [3 /*break*/, 10];
            case 8: return [4 /*yield*/, Camp_js_1.default.find({ name: { $regex: searchByValue } })];
            case 9:
                camp = _b.sent();
                res.json(camp);
                _b.label = 10;
            case 10: return [3 /*break*/, 12];
            case 11:
                error_1 = _b.sent();
                console.log('Error', error_1);
                res.status(500).json({ message: 'error getting all camp sites' });
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); });
router.get('/price', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var camp, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Camp_js_1.default.find({ $and: [{ price: { $gte: req.query.min } }, { price: { $lt: req.query.max } }] })];
            case 1:
                camp = _a.sent();
                res.json(camp);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log('Error', error_2);
                res.status(500).json({ message: 'error getting all camp sites' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, camp, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Camp_js_1.default.findById(id).populate('reviews')];
            case 1:
                camp = _a.sent();
                // console.log(camp)
                res.json(camp);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log('Error', error_3);
                res.status(500).json({ message: 'error getting particular camp site' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/:id/reviews', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var camp, review;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Camp_js_1.default.findById(req.params.id)];
            case 1:
                camp = _a.sent();
                review = new Review_js_1.default(req.body);
                review._id = new mongodb_1.ObjectId();
                if (!(camp && review)) return [3 /*break*/, 4];
                // camp.reviews.push(review)
                return [4 /*yield*/, review.save()];
            case 2:
                // camp.reviews.push(review)
                _a.sent();
                return [4 /*yield*/, camp.save()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                res.send('reviews added');
                return [2 /*return*/];
        }
    });
}); });
router.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, camp, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Camp_js_1.default.findByIdAndUpdate(id, __assign({}, req.body), { new: true })];
            case 1:
                camp = _a.sent();
                res.json(camp);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log('Error', error_4);
                res.status(500).json({ message: 'error updating a camp site' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, camp, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Camp_js_1.default.findByIdAndDelete(id)];
            case 1:
                camp = _a.sent();
                res.json(camp);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.log('error', error_5);
                res.status(500).json({ message: 'error in deleting a camp' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, new Camp_js_1.default(__assign({}, req.body)).save()];
            case 2:
                _a.sent();
                res.status(200).json({ message: 'camp created' });
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.log('Error', error_6);
                res.status(500).json({ message: 'error creating camp site' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
