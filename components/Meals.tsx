"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FoodProduct, Meal } from "@/lib/Type";
import { FadeEveryTime, FadeUp } from "@/lib/Animation";
import Button from "./ui/Button";
import Link from "next/link";
import { BiError } from "react-icons/bi";
import { GiHotMeal } from "react-icons/gi";

interface Props {
  maxPages?: number;
  pageSize?: number;
  hideLastCard?: boolean;
}
export default function MealsList({ maxPages, pageSize, hideLastCard }: Props) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      if (maxPages && page > maxPages) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `/api/meals?page=${page}&page_size=${pageSize}`
        );
        setMeals(res.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [page, maxPages, pageSize]);

  const lastItemRef = (node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage((prev) => prev + 1);
    });
    if (node) observer.current.observe(node);
  };
  if (error)
    return (
      <section className="flex flex-col justify-center items-center gap-5">
        <BiError size={50} />
        <h1>Error</h1>
        <h4>{error}</h4>
      </section>
    );
  return (
    <section className="min-h-fit!">
      <h1 className="mb-5 flex items-center gap-2">
        <GiHotMeal className="text-secondary" />
        Meals
      </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl gap-4 p-4">
        {meals.map((item, index) => {
          if (index === meals.length - 1 && !hideLastCard) {
            return (
              <motion.div
                key={item.idMeal || index}
                {...FadeEveryTime}
                ref={lastItemRef}
                className="h-full min-h-96 max-w-xl border border-secondary/50 rounded-2xl overflow-hidden "
              >
                {item.strMealThumb ? (
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal || "Unknown"}
                    className="w-full h-80  object-cover rounded"
                  />
                ) : (
                  <div className="bg-secondary/50 w-full h-80 flex flex-col justify-center items-center text-center rounded">
                    <h4>404</h4>
                    No Image Found
                  </div>
                )}
                <div className="p-4">
                  <h5 className="font-semibold truncate">
                    {item.strMeal || "Unknown"}
                  </h5>
                </div>
              </motion.div>
            );
          }
          return (
            <Link
              key={(item.idMeal || index) + `${index}`}
              href={`/meal/${item.idMeal}`}
            >
              <motion.div
                {...FadeEveryTime}
                className="h-full min-h-96 max-w-xl border border-secondary/50 rounded-2xl overflow-hidden "
              >
                {item.strMealThumb ? (
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal || "Unknown"}
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
                      {item.strMeal || "Unknown"}
                    </h5>

                    <p className="text-sm!">
                      <span className="text-secondary">Category</span>{" "}
                      {item.strCategory || "No Category info"}
                    </p>
                  </div>
                  <Button className="2/4">Details</Button>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
      {loading && (
        <motion.div
          {...FadeUp}
          className="h-52 py-5 text-3xl text-secondary font-semibold text-center flex flex-col justify-center items-center"
        >
          <div className="w-16 h-16 border border-secondary border-t-transparent rounded-full animate-spin" />
          Loading...
        </motion.div>
      )}
    </section>
  );
}
