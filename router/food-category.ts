import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";
export const food_categoryrouter = Router();
food_categoryrouter.get("/", async (req: Request, res: Response) => {
  const foodname = await FoodCategoryModel.find();

  res.json(foodname);
});
food_categoryrouter.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id || null;
  const foodname = await FoodCategoryModel.findById(id);

  res.json({ foodname });
});
food_categoryrouter.post("/", async (req: Request, res: Response) => {
  const name = req?.body?.categoryName || null;
  const foodname = await FoodCategoryModel.create({ categoryName: name });

  res.json({ foodname });
});
food_categoryrouter.delete("/:id", async (req: Request, res: Response) => {
  const foodname = await FoodCategoryModel.findByIdAndDelete(req.params.id);

  res.send("deleted");
});
food_categoryrouter.put("/:id", async (req: Request, res: Response) => {
  const uptadeName = req?.body?.categoryName || null;
  const foodname = await FoodCategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      categoryName: uptadeName,
    },
    { new: true }
  );

  res.send("uptaded");
});
