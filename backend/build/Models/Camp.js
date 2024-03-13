"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var CampSchema = new mongoose_1.default.Schema({
    name: {
        type: String, required: true
    },
    city: {
        type: String, required: true
    },
    state: {
        type: String, required: true
    },
    geolocation: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false
        }
    },
    description: {
        type: String, required: true
    },
    imageURL: {
        type: String, required: false
    },
    price: {
        type: Number, required: true
    },
    reviews: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});
var Camp = mongoose_1.default.model('Camp', CampSchema);
exports.default = Camp;
