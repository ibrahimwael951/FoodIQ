"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FoodProduct } from "@/lib/Type";
import { Fade, FadeEveryTime, FadeUpAnimation } from "@/lib/Animation";
import Button from "./ui/Button";
import { BiX } from "react-icons/bi";
import { GiOpenedFoodCan } from "react-icons/gi";

interface Props {
  maxPages?: number;
  pageSize?: number;
  hideLastCard?: boolean;
}
export default function FoodList({
  maxPages,
  pageSize = 10,
  hideLastCard,
}: Props) {
  const [showFood, setShowFood] = useState<FoodProduct | null>(null);
  const [foods, setFoods] = useState<FoodProduct[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (showFood) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, [showFood]);
  useEffect(() => {
    const fetchFoods = async () => {
      if (maxPages && page > maxPages) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `/api/foods?page=${page}&page_size=${pageSize}`
        );
        const validFoods = res.data.filter((f: FoodProduct) => f.code);
        setFoods((prev) => [...prev, ...validFoods]);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
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
  return (
    <section className="min-h-fit!">
      <div className="flex items-center justify-between gap-2">
        <h1 className="mb-5 flex items-center gap-2">
          <GiOpenedFoodCan className="text-secondary" />
          Food Products
        </h1>
        {hideLastCard && (
          <Button href="/food" changeColor>
            See More?
          </Button>
        )}
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl gap-4 ">
        {foods.map((food, index) => {
          const image =
            food.image_small_url ||
            food.image_thumb_url ||
            food.image_front_thumb_url ||
            food.image_front_small_url ||
            food.image_front_url ||
            food.image_url;

          if (index === foods.length - 1 && !hideLastCard) {
            return (
              <motion.div
                key={food.id || index}
                {...FadeEveryTime}
                ref={lastItemRef}
                className="h-full min-h-96 w-full max-w-xl border border-secondary/50 rounded-2xl overflow-hidden "
              >
                {food.image_front_url ? (
                  <img
                    src={image}
                    alt={food.product_name || "Unknown"}
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
                    {food.product_name || "Unknown"}
                  </h5>
                  <p className="text-sm!">
                    <span className="text-secondary">Brand</span>{" "}
                    {food.brands || "No brand info"}
                  </p>
                  <p className="text-sm!">
                    <span className="text-secondary">quantity</span>{" "}
                    {food.quantity || "No quantity info"}
                  </p>
                </div>
              </motion.div>
            );
          }
          return (
            <motion.div
              key={(food.id || index) + `${index}`}
              // href={`/food/${food.code}`}
              onClick={() => setShowFood(food)}
            >
              <motion.div
                {...FadeEveryTime}
                whileTap={{ scale: 0.96 }}
                className="h-full min-h-96 w-full  max-w-xl border border-secondary/50 rounded-2xl overflow-hidden cursor-pointer"
              >
                {food.image_front_url ? (
                  <img
                    src={image}
                    alt={food.product_name || "Unknown"}
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
                      {food.product_name || "Unknown"}
                    </h5>
                    <p className="text-sm!">
                      <span className="text-secondary">Brand</span>{" "}
                      {food.brands || "No brand info"}
                    </p>
                    <p className="text-sm!">
                      <span className="text-secondary">quantity</span>{" "}
                      {food.quantity || "No quantity info"}
                    </p>
                  </div>
                  <Button className="2/4" changeColor>
                    Details
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {loading && (
          <motion.div
            {...FadeUpAnimation}
            className="h-52 py-5 text-3xl text-secondary font-semibold text-center flex flex-col justify-center items-center"
          >
            <div className="w-16 h-16 border border-secondary border-t-transparent rounded-full animate-spin" />
            Loading...
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showFood && (
          <motion.section
            {...Fade}
            className="fixed top-0 left-0 w-full h-screen bg-black/85 py-20 overflow-y-scroll z-50"
          >
            <Button
              changeColor
              className="fixed top-7 right-6 text-4xl z-50  "
              onClick={() => setShowFood(null)}
            >
              <BiX />
            </Button>

            <motion.div
              {...FadeUpAnimation}
              className="relative p-5 lg:p-16 bg-white dark:bg-black border border-neutral-500/70 min-h-70 rounded-3xl max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-10 overflow-hidden"
            >
              <div className="w-full lg:w-2/4">
                <img
                  src={showFood.image_url}
                  alt={`image of ${showFood.product_name}`}
                  loading="lazy"
                  className="w-full rounded-3xl max-w-xl mx-auto"
                />
              </div>
              <div className="w-full lg:w-2/4 space-y-5">
                <h3 className="flex items-center justify-start font-semibold w-full">
                  {showFood.product_name || "Unknown"}
                </h3>
                <div className="flex items-center gap-2">
                  <h4 className="inline font-semibold text-secondary">
                    Brand:
                  </h4>{" "}
                  {showFood.brands}
                </div>
                <div className="flex items-center gap-2">
                  <h4 className="inline font-semibold text-secondary">
                    Quantity:
                  </h4>{" "}
                  {showFood.quantity}
                </div>

                {showFood.countries_tags && (
                  <div className="flex flex-col justify-center items-start">
                    <h4 className="font-semibold text-secondary text-2xl mb-2">
                      Countries:{" "}
                    </h4>{" "}
                    <div className="flex flex-wrap items-center gap-2">
                      {showFood.countries_tags.map((item, i) => (
                        <motion.div
                          key={i + item}
                          {...Fade}
                          className="border border-secondary font-semibold text-lg p-3 rounded-2xl hover:text-white hover:bg-secondary hover:-translate-y-0.5 duration-100 cursor-default"
                        >
                          {item.slice(3)}
                        </motion.div>
                      )) || "N/A"}
                    </div>
                  </div>
                )}

                {showFood._keywords && (
                  <div className="flex flex-col justify-center items-start">
                    <h4 className="font-semibold text-secondary text-2xl mb-2">
                      Keys:{" "}
                    </h4>{" "}
                    <div className="flex flex-wrap items-center gap-2">
                      {showFood._keywords.map((item, i) => (
                        <motion.div
                          key={i + item}
                          {...Fade}
                          className="border border-secondary font-semibold text-lg p-3 rounded-2xl hover:text-white hover:bg-secondary hover:-translate-y-0.5 duration-100 cursor-default"
                        >
                          {item}
                        </motion.div>
                      )) || "N/A"}
                    </div>
                  </div>
                )}

                {showFood.categories_tags && (
                  <div className="flex flex-col justify-center items-start">
                    <h4 className="font-semibold text-secondary text-2xl mb-2">
                      Categories:{" "}
                    </h4>{" "}
                    <div className="flex flex-wrap items-center gap-2">
                      {showFood.categories_tags.map((item, i) => (
                        <motion.div
                          key={i + item}
                          {...Fade}
                          className="border border-secondary font-semibold text-lg p-3 rounded-2xl hover:text-white hover:bg-secondary hover:-translate-y-0.5 duration-100 cursor-default"
                        >
                          {item.slice(3)}
                        </motion.div>
                      )) || "N/A"}
                    </div>
                  </div>
                )}
                <Button
                  changeColor
                  href={`/food/${showFood.code}`}
                  className="text-2xl"
                  onClick={() => setShowFood(null)}
                >
                  More Details
                </Button>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
} 
