"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const food_Schema = new mongoose_1.Schema({
    foodName: String,
    price: Number,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "category",
    },
    image: String,
    ingerdients: String,
}, { timestamps: true });
const FoodModel = (0, mongoose_1.model)("food", food_Schema, "food");
exports.FoodModel = FoodModel;
