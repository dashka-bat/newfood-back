import { Request, Response } from "express";
import { configDotenv } from "dotenv";
import { time } from "console";
import { food_categoryrouter } from "./router/food-category";
import { food_router } from "./router/food";
import { verifyToken } from "@clerk/backend/dist/tokens/verify";
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3004;
const auth= async (req,res,next)=>{
  const token=req.get("Token")

  try{
    const verified=await verifyToken(token,{
      secretKey:process.env.CLERK_SECRET_KEY,
    })
    // const userId=verified.sub;
    // req.userId=userId
    next()
    console.log(verified)
  }catch{
    res.json({status:"forbidden"})
  }
}
app.use(cors());
app.use(express.json());

configDotenv();

// console.log("++",URL)

export const connectMOngoDB = async () => {
  const URL = process.env.MONGODB_URL;

  if (!URL) {
    throw new Error("error");
  }
  try {
    await mongoose.connect(URL);
    console.log("connected to the MongoDB");
  } catch (conncetionError) {
    console.error("failed to connect to the MongoDB", conncetionError);
    process.exit(1);
  }
};
connectMOngoDB();
app.use("/food-category",auth, food_categoryrouter);
app.use("/food",auth, food_router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
