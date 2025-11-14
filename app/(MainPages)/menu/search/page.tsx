"use client";
import CustomButton from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { Meal, MealCategories, MealsApi } from "@/lib/Type";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { GrFlagFill } from "react-icons/gr";
import { MdCategory } from "react-icons/md";
import { FadeAnimation, FadeUpAnimation } from "@/lib/Animation";
import Link from "next/link";
import MealCard from "@/components/ui/MealCard";

const MotionLink = motion.create(Link);

const searchBy = [
  { label: "Country", icon: GrFlagFill },
  {
    label: "Category",
    icon: MdCategory,
  },
];

function SearchComponent() {
  const searchParams = useSearchParams();
  const SearchCategory = searchParams.get("category");
  const SearchP = searchParams.get("P");
  const [meals, setMeals] = useState<Meal[]>([]);

  const [categories, setCategories] = useState<MealCategories[]>([]);

  const [countries, setCountries] = useState<{ strArea: string }[]>([]);

  useEffect(() => {
    if (SearchCategory !== "Category" || SearchP) return;
    axios
      .get(`${MealsApi}/categories.php`)
      .then((res) => setCategories(res.data.categories));
  }, [SearchCategory, SearchP]);

  useEffect(() => {
    if (SearchCategory !== "Category") return;
    if (SearchP) {
      axios
        .get(`${MealsApi}/filter.php?c=${SearchP}`)
        .then((res) => setMeals(res.data.meals));
    }
  }, [SearchCategory, SearchP]);

  useEffect(() => {
    if (SearchCategory !== "Country" || SearchP) return;
    axios
      .get(`${MealsApi}/list.php?a=list`)
      .then((res) => setCountries(res.data.meals));
  }, [SearchCategory, SearchP]);

  useEffect(() => {
    if (SearchCategory !== "Country") return;
    if (SearchP) {
      axios
        .get(`${MealsApi}/filter.php?a=${SearchP}`)
        .then((res) => setMeals(res.data.meals));
    }
  }, [SearchP, SearchCategory]);

  if (
    !SearchCategory ||
    (SearchCategory !== "Country" && SearchCategory !== "Category")
  )
    return (
      <section className="pt-20">
        <motion.h1 {...FadeUpAnimation} className="my-10 text-center font-bold">
          Search <span className="text-secondary"> By </span>
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 max-w-5xl mx-auto ">
          {searchBy.map((item) => (
            <motion.div key={item.label} {...FadeUpAnimation}>
              <CustomButton
                href={`/menu/search?category=${item.label}`}
                className="w-full max-w-xl mx-auto h-40 lg:h-96 flex flex-col justify-center items-center text-center gap-3 border-2 rounded-2xl text-2xl lg:text-4xl font-semibold"
              >
                <div className="bg-primary/20 w-20 h-20 p-5 rounded-full mx-auto text-4xl">
                  <item.icon className="text-primary " />
                </div>
                <span>{item.label}</span>
              </CustomButton>
            </motion.div>
          ))}
        </div>
      </section>
    );

  if (SearchCategory == "Category")
    return (
      <section className="mt-20">
        <AnimatePresence mode="wait">
          {!SearchP ? (
            categories ? (
              <motion.div key={"Choosing"} {...FadeAnimation}>
                <motion.h1
                  {...FadeUpAnimation}
                  className="text-center font-bold"
                >
                  Choose <span className="text-secondary"> one </span>
                </motion.h1>
                <motion.div
                  {...FadeAnimation}
                  className="grid grid-cols-4 md:grid-cols-5 gap-5  w-full my-10"
                >
                  {categories.map((item) => (
                    <MotionLink
                      key={item.idCategory}
                      href={`/menu/search?category=Category&P=${item.strCategory}`}
                      {...FadeUpAnimation}
                      className="  border border-secondary p-6 rounded-2xl text-center flex flex-col justify-center items-center gap-5 hover:bg-secondary hover:text-white duration-100"
                    >
                      <img
                        src={item.strCategoryThumb}
                        alt={item.strCategory + " Image "}
                        className="rounded-3xl"
                      />
                      <h5>{item.strCategory}</h5>{" "}
                    </MotionLink>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={"Choosing_Loading"}
                {...FadeAnimation}
                className="h-96 w-full flex flex-col justify-center items-center gap-4 text-3xl "
              >
                <div className="w-20 h-20 " />
                Loading...
              </motion.div>
            )
          ) : meals ? (
            <motion.div key={"AfterPick"} {...FadeAnimation}>
              <motion.h1 {...FadeUpAnimation} className="mt-6">
                <span className="text-secondary">{SearchP} </span>
                Meals For <span className="text-secondary"> You </span>
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-10">
                {meals.map((item) => (
                  <MealCard key={item.idMeal} Meal={item} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={"AfterPick_loading"}
              {...FadeUpAnimation}
              className="h-96 w-full flex flex-col justify-center items-center gap-4 text-3xl "
            >
              <div className="w-20 h-20 border-2 border-t-transparent border-secondary rounded-full animate-spin " />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );

  if (SearchCategory == "Country")
    return (
      <section className="mt-20">
        <AnimatePresence mode="wait">
          {!SearchP ? (
            countries ? (
              <motion.div key={"Choosing"} {...FadeAnimation}>
                <motion.h1
                  {...FadeUpAnimation}
                  className="text-center font-bold"
                >
                  Choose <span className="text-secondary"> one </span>
                </motion.h1>
                <motion.div
                  {...FadeAnimation}
                  className="grid grid-cols-4 md:grid-cols-5 gap-5  w-full my-10"
                >
                  {countries.map((item) => (
                    <MotionLink
                      key={item.strArea}
                      href={`/menu/search?category=Country&P=${item.strArea}`}
                      {...FadeUpAnimation}
                      className="  border border-secondary p-6 rounded-2xl text-center flex flex-col justify-center items-center gap-5 hover:bg-secondary hover:text-white duration-100"
                    >
                      <h5>{item.strArea}</h5>{" "}
                    </MotionLink>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={"Choosing_Loading"}
                {...FadeAnimation}
                className="h-96 w-full flex flex-col justify-center items-center gap-4 text-3xl "
              >
                <div className="w-20 h-20 border-2 border-t-transparent border-secondary rounded-full animate-spin " />
                Loading...
              </motion.div>
            )
          ) : meals ? (
            <motion.div key={"AfterPick"} {...FadeAnimation}>
              <motion.h1 {...FadeUpAnimation} className="mt-6">
                <span className="text-secondary">{SearchP} </span>
                Meals For <span className="text-secondary"> You </span>
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-10">
                {meals.map((item) => (
                  <MealCard key={item.idMeal} Meal={item} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={"AfterPick_loading"}
              {...FadeUpAnimation}
              className="h-96 w-full flex flex-col justify-center items-center gap-4 text-3xl "
            >
              <div className="w-20 h-20 border-2 border-t-transparent border-secondary rounded-full animate-spin " />
              Loading...
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
}

export default function Page() {
  return (
    <Suspense>
      <SearchComponent />
    </Suspense>
  );
}
