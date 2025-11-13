"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MealsApi, Meal } from "@/lib/Type";
import { BiError, BiX } from "react-icons/bi";
import {
  Fade,
  FadeLeftAnimation,
  FadeRightAnimation,
  FadeUpAnimation,
} from "@/lib/Animation";
import Button from "@/components/ui/Button";

export default function FoodPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [Soon, setSoon] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;
    const fetchMeal = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${MealsApi}/lookup.php?i=${id}`);
        if (res.data.status === 0) {
          setError("Meal not found or invalid barcode");
        } else {
          setMeal(res.data.meals[0]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Meal");
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading)
    return (
      <section className="flex flex-col justify-center items-center text-2xl h-96">
        <motion.div
          {...FadeUpAnimation}
          className="w-20 h-20 border-4 border-secondary border-t-transparent rounded-full animate-spin"
        />
        <motion.span {...FadeUpAnimation}>loading....</motion.span>
      </section>
    );
  if (error || !meal)
    return (
      <div className="flex flex-col items-center justify-center gap-4   text-center my-20 h-96 text-2xl">
        <motion.div {...FadeUpAnimation}>
          <BiError className="text-red-600" size={60} />
        </motion.div>
        <motion.div {...FadeUpAnimation}>
          <span className="text-red-600 text-4xl">Error: </span> {error}
        </motion.div>
      </div>
    );

  return (
    <section className="mt-24 w-full max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-10 mb-20">
      <div className="w-full h-fit flex flex-col justify-center items-center gap-4 max-w-96 md:max-w-xl mx-auto rounded-3xl overflow-hidden">
        {meal.strMealThumb ? (
          <motion.img
            {...FadeLeftAnimation}
            src={meal.strMealThumb}
            alt={meal.strMeal || "Unknown"}
            className="w-full h-auto  object-cover rounded "
          />
        ) : (
          <motion.div
            {...FadeLeftAnimation}
            className="bg-secondary/50 w-full h-80 flex flex-col justify-center items-center text-center rounded"
          >
            <h4>404</h4>
            No Image Found
          </motion.div>
        )}
        <div className="flex items-center justify-center gap-5">
          <Button changeColor onClick={() => setSoon(true)}>
            {" "}
            Love
          </Button>
          <Button onClick={() => setSoon(true)}> Comment</Button>
          <Button onClick={() => setSoon(true)}> Save</Button>
        </div>
        <div className="flex items-center gap-5 bg-primary p-2 rounded-2xl">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDcxcW5xbTc2eHN6emVmbmN6amc3NmZ2dHloZ3c5cmN4a3B4czQybiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tIeCLkB8geYtW/giphy.gif"
            alt=""
            className="w-20 h-20 object-cover rounded-3xl"
          />
          <p className="text-white!">Looks Great, right ?</p>{" "}
        </div>
      </div>
      <motion.div {...FadeRightAnimation} className="space-y-5">
        <h1 className="text-2xl font-bold mb-4 line-clamp-2">{meal.strMeal}</h1>
        <p>
          <span className="text-secondary text-2xl">Category: </span>{" "}
          {meal.strCategory || "Unknown"}
        </p>
        <p>
          <span className="text-secondary text-2xl">Area: </span>{" "}
          {meal.strArea || "Unknown"}
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-5 text-secondary">
            Ingredients:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">1 - </span>
              <span>{meal.strIngredient1}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">2 - </span>
              <span>{meal.strIngredient2}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">3 - </span>
              <span>{meal.strIngredient3}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">4 - </span>
              <span>{meal.strIngredient4}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">5 - </span>
              <span>{meal.strIngredient5}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">6 - </span>
              <span>{meal.strIngredient6}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">7 - </span>
              <span>{meal.strIngredient7}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">8 - </span>
              <span>{meal.strIngredient8}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">9 - </span>
              <span>{meal.strIngredient9}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">10 - </span>
              <span>{meal.strIngredient10}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">11 - </span>
              <span>{meal.strIngredient11}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">12 - </span>
              <span>{meal.strIngredient12}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">13 - </span>
              <span>{meal.strIngredient13}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">14 - </span>
              <span>{meal.strIngredient14}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">15 - </span>
              <span>{meal.strIngredient15}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">16 - </span>
              <span>{meal.strIngredient16}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">17 - </span>
              <span>{meal.strIngredient17}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">18 - </span>
              <span>{meal.strIngredient18}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">19 - </span>
              <span>{meal.strIngredient19}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-secondary">20 - </span>
              <span>{meal.strIngredient20}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3 text-secondary">
            Instructions:
          </h3>
          <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
            {meal.strInstructions}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {Soon && (
          <motion.section
            {...Fade}
            className="fixed top-0 left-0 w-full h-screen bg-black/50 flex justify-center items-center z-50"
          >
            <motion.div
              {...FadeUpAnimation}
              className="relative p-16 bg-primary min-h-70 text-white text-center rounded-3xl max-w-3xl flex flex-col justify-center items-center gap-3 overflow-hidden"
            >
              <Button
                changeColor
                className="absolute top-0 right-0 text-3xl rounded-none rounded-bl-3xl"
                onClick={() => setSoon(false)}
              >
                <BiX />
              </Button>
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Y3YTNvbmxibHJ1ejNmaWp4a3o5Y3pwa2Z2aThxOWZ4bHRndHNocyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4K1KI9R2VDrLVcpiBG/giphy.gif"
                alt=""
              />
              <h3>
                im not{" "}
                <span className="text-secondary font-bold">SuperHero</span> to
                make this function in{" "}
                <span className="text-secondary font-bold">2 days</span>{" "}
              </h3>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}
