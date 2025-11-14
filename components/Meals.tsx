"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { Meal } from "@/lib/Type";
import { FadeUp, FadeUpAnimation } from "@/lib/Animation";
import Button from "./ui/Button";
import { GiHotMeal } from "react-icons/gi";
import MealCard from "./ui/MealCard";

interface Props {
  pageSize?: number;
  showSeeMoreBTN?: boolean;
}
export default function MealsList({ pageSize = 5, showSeeMoreBTN }: Props) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/meals`);
        setMeals(res.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (error)
    return (
      <section className="flex flex-col justify-center items-center gap-5">
        <motion.img
          {...FadeUpAnimation}
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3I5NGF0MHg3dzdzYXp4ZWpleGV3cTl4ajNieXE0Z3BrZTk0anR0bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Vu7FU5T4RJPo1esgna/giphy.gif"
          alt="Error GIF"
          className="rounded-3xl "
        />
        <motion.h1 {...FadeUpAnimation} className="font-bold text-red-500">
          Error
        </motion.h1>
        <motion.h4 {...FadeUpAnimation}>{error}</motion.h4>
      </section>
    );

  const MaxMeals = meals.slice(1, pageSize + 1);
  return (
    <section className="min-h-fit!">
      <div className="flex items-center justify-between gap-2">
        <h1 className="mb-5 flex items-center gap-2">
          <GiHotMeal className="text-secondary" />
          Meals
        </h1>
        {showSeeMoreBTN && (
          <Button href="/menu" changeColor>
            See More?
          </Button>
        )}
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl gap-4 p-4">
        {MaxMeals.map((item, index) => {
          return (
            <MealCard key={(item.idMeal || index) + `${index}`} Meal={item} />
          );
        })}
      </div>
      {loading && (
        <motion.div
          {...FadeUp}
          className=" py-5 text-3xl text-secondary font-semibold text-center flex flex-col justify-center items-center"
        >
          <div className="w-28 h-28 mb-4 border border-secondary border-t-transparent rounded-full animate-spin" />
          its take longer than you think. Loading...
        </motion.div>
      )}
    </section>
  );
}
