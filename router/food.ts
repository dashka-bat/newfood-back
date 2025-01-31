import { Request, Response, Router } from "express";
import { FoodModel } from "../models/food";
export const food_router = Router();
food_router.get("/", async (req: Request, res: Response) => {
  const filter = req?.query?.category ? { category: req.query.category } : {};

  const food = await FoodModel.find(filter).populate("category");

  res.json(food);
});
food_router.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;
  const foodname = await FoodModel.findById(id);

  res.json({ foodname });
});
food_router.post("/", async (req: Request, res: Response) => {
  // const filter=req?.body?.category?{category:req.body.category}:{}
  const name = req?.body.foodName;
  const price = req?.body.price;
  const image = req?.body.image;
  const ingerdients = req?.body.ingerdients;
  // const category = req?.body.category;
  const newItem = await FoodModel.create({
    foodName: name,
    price: price,
    image: image,
    ingerdients: ingerdients,
    category: req.body.category,
  });
  res.json({ newItem });
});
food_router.delete("/:id", async (req: Request, res: Response) => {
  const foodname = await FoodModel.findByIdAndDelete(req.params.id);

  res.send("deleted");
});
food_router.put("/:id", async (req: Request, res: Response) => {
  const foodId = req.params.id;
  const oneFood = FoodModel.findOne({ _id: foodId });
  const replacedFood = await oneFood.updateOne({
    foodName: req.body.foodName,
    price: req.body.price,
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
  });
  const food = await FoodModel.find();

  res.json("success");
});
