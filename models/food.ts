import { model, Schema } from "mongoose";
import { type } from "os";
const food_Schema = new Schema(
  {
    foodName: String,
    price: Number,
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    image: String,
    ingerdients: String,
  },
  { timestamps: true }
);
const FoodModel = model("food", food_Schema, "food");
export { FoodModel };
