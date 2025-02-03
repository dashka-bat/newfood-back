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
exports.food_router = void 0;
const express_1 = require("express");
const food_1 = require("../models/food");
exports.food_router = (0, express_1.Router)();
exports.food_router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const filter = ((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.category) ? { category: req.query.category } : {};
    const food = yield food_1.FoodModel.find(filter).populate("category");
    res.json(food);
}));
exports.food_router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    const foodname = yield food_1.FoodModel.findById(id);
    res.json({ foodname });
}));
exports.food_router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const filter=req?.body?.category?{category:req.body.category}:{}
    const name = req === null || req === void 0 ? void 0 : req.body.foodName;
    const price = req === null || req === void 0 ? void 0 : req.body.price;
    const image = req === null || req === void 0 ? void 0 : req.body.image;
    const ingerdients = req === null || req === void 0 ? void 0 : req.body.ingerdients;
    // const category = req?.body.category;
    const newItem = yield food_1.FoodModel.create({
        foodName: name,
        price: price,
        image: image,
        ingerdients: ingerdients,
        category: req.body.category,
    });
    res.json({ newItem });
}));
exports.food_router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodname = yield food_1.FoodModel.findByIdAndDelete(req.params.id);
    res.send("deleted");
}));
exports.food_router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodId = req.params.id;
    const oneFood = food_1.FoodModel.findOne({ _id: foodId });
    const replacedFood = yield oneFood.updateOne({
        foodName: req.body.foodName,
        price: req.body.price,
        image: req.body.image,
        ingredients: req.body.ingredients,
        category: req.body.category,
    });
    const food = yield food_1.FoodModel.find();
    res.json("success");
}));
