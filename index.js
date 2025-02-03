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
exports.connectMOngoDB = void 0;
const dotenv_1 = require("dotenv");
const food_category_1 = require("./router/food-category");
const food_1 = require("./router/food");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3004;
// const auth= async (req,res,next)=>{
//   const token=req.get("Token")
//   try{
//     const verified=await verifyToken(token,{
//       secretKey:process.env.CLERK_SECRET_KEY,
//     })
//     // const userId=verified.sub;
//     // req.userId=userId
//     next()
//     console.log(verified)
//   }catch{
//     res.json({status:"forbidden"})
//   }
// }
app.use(cors());
app.use(express.json());
(0, dotenv_1.configDotenv)();
// console.log("++",URL)
const connectMOngoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const URL = process.env.MONGODB_URL;
    if (!URL) {
        throw new Error("error");
    }
    try {
        yield mongoose.connect(URL);
        console.log("connected to the MongoDB");
    }
    catch (conncetionError) {
        console.error("failed to connect to the MongoDB", conncetionError);
        process.exit(1);
    }
});
exports.connectMOngoDB = connectMOngoDB;
(0, exports.connectMOngoDB)();
app.use("/food-category", food_category_1.food_categoryrouter);
app.use("/food", food_1.food_router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
