"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategoryModel = void 0;
const mongoose_1 = require("mongoose");
const food_Category_Schema = new mongoose_1.Schema({
    categoryName: String,
}, { timestamps: true });
const FoodCategoryModel = (0, mongoose_1.model)("category", food_Category_Schema, "food-category");
exports.FoodCategoryModel = FoodCategoryModel;
