"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ReviewSchema = new Schema({
    body: String,
    rating: Number
});
var Review = mongoose_1.default.model('Review', ReviewSchema);
exports.default = Review;
