"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.food_categoryrouter = void 0;
const express_1 = require("express");
const food_category_1 = require("../models/food-category");
exports.food_categoryrouter = (0, express_1.Router)();
exports.food_categoryrouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodname = yield food_category_1.FoodCategoryModel.find();
    res.json(foodname);
}));
exports.food_categoryrouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) || null;
    const foodname = yield food_category_1.FoodCategoryModel.findById(id);
    res.json({ foodname });
}));
exports.food_categoryrouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const name = ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.categoryName) || null;
    const foodname = yield food_category_1.FoodCategoryModel.create({ categoryName: name });
    res.json({ foodname });
}));
exports.food_categoryrouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodname = yield food_category_1.FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.send("deleted");
}));
exports.food_categoryrouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const uptadeName = ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.categoryName) || null;
    const foodname = yield food_category_1.FoodCategoryModel.findByIdAndUpdate(req.params.id, {
        categoryName: uptadeName,
    }, { new: true });
    res.send("uptaded");
}));
