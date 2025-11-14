"use client";

import { motion } from "framer-motion";
import { Meal } from "@/lib/Type";

import { FadeEveryTime } from "@/lib/Animation";
import Link from "next/link";
import Button from "./Button";

interface Props {
  Meal: Meal;
}

const MealCard: React.FC<Props> = ({ Meal }) => {
  return (
    <Link href={`/meal/${Meal.idMeal}`}>
      <motion.div
        {...FadeEveryTime}
        className="h-full min-h-96 max-w-xl border border-secondary/50 rounded-2xl overflow-hidden "
      >
        {Meal.strMealThumb ? (
          <img
            src={Meal.strMealThumb}
            alt={Meal.strMeal || "Unknown"}
            loading="lazy"
            className="w-full h-80  object-cover rounded"
          />
        ) : (
          <div className="bg-secondary/50 w-full h-80 flex flex-col justify-center items-center text-center rounded">
            <h4>404</h4>
            No Image Found
          </div>
        )}
        <div className="flex items-center justify-between gap-2 p-4">
          <div className="w-2/4">
            <h5 className="font-semibold truncate">
              {Meal.strMeal || "Unknown"}
            </h5>

            <p className="text-sm!">
              <span className="text-secondary">Category</span>{" "}
              {Meal.strCategory || "No Category info"}
            </p>
          </div>
          <Button changeColor className="2/4">
            Details
          </Button>
        </div>
      </motion.div>
    </Link>
  );
};

export default MealCard;
