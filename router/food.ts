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
  const name = req?.body.foodName;
  const price = req?.body.price;
  const image = req?.body.image;
  const ingerdients = req?.body.ingerdients;
  const category = req?.body.category;
  const foodname = await FoodModel.create({
    foodName: name,
    price: price,
    image: image,
    ingerdients: ingerdients,
    category: category,
  });
  res.json({ foodname });
});
food_router.delete("/:id", async (req: Request, res: Response) => {
  const foodname = await FoodModel.findByIdAndDelete(req.params.id);

  res.send("deleted");
});
food_router.put("/:id", async (req: Request, res: Response) => {
  const uptadeName = req?.body.foodName;
  const uptadedPrice = req?.body.price;
  const uptadedImage = req?.body.image;
  const uptadedIngerdients = req?.body.ingerdients;
  const uptadedCategory = req?.body.category;
  const foodname = await FoodModel.findByIdAndUpdate(
    req.params.id,
    {
      foodName: uptadeName,
      price: uptadedPrice,
      image: uptadedImage,
      ingerdients: uptadedIngerdients,
      category: uptadedCategory,
    },
    { new: true }
  );

  res.send(foodname);
});
