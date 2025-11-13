"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FoodProductsApi, FoodProduct } from "@/lib/Type";
import { BiError } from "react-icons/bi";
import {
  Fade,
  FadeLeftAnimation,
  FadeRightAnimation,
  FadeUpAnimation,
} from "@/lib/Animation";

export default function FoodPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<FoodProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${FoodProductsApi}/product/${id}.json`);
        if (res.data.status === 0) {
          setError("Product not found or invalid barcode");
        } else {
          setProduct(res.data.product);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
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
  if (error || !product)
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

  const countriesRaw = product.countries || "";
  const countriesList = countriesRaw
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length > 0);

  const categoriesRaw = product.categories || "";
  const categoriesList = categoriesRaw
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.length > 0);

  return (
    <section className="mt-24 w-full max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-10 mb-20">
      <div className="w-full flex flex-col justify-center items-center gap-4 max-w-96 md:max-w-xl mx-auto">
        {product.image_front_url ? (
          <motion.img
            {...FadeLeftAnimation}
            src={product.image_front_url}
            alt={product.product_name || "Unknown"}
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
      </div>
      <motion.div {...FadeRightAnimation} className="space-y-5">
        <h1 className="text-2xl font-bold mb-4 line-clamp-2">
          {product.product_name}
        </h1>
        <p>
          <span className="text-secondary text-2xl">Brand: </span>{" "}
          {product.brands || "Unknown"}
        </p>
        <p>
          <span className="text-secondary text-2xl">Quantity: </span>{" "}
          {product.quantity || "N/A"}
        </p>

        <div className="flex flex-col ">
          <span className="text-secondary text-2xl mb-2">Categories: </span>{" "}
          <div className="flex flex-wrap items-center gap-2">
            {categoriesList.map((item, i) => (
              <motion.div
                key={i + item}
                {...Fade}
                className="bg-secondary text-black font-semibold text-xl p-2 rounded-2xl hover:-translate-y-0.5 duration-100 cursor-default"
              >
                {item.slice(3)}
              </motion.div>
            )) || "N/A"}
          </div>
        </div>

        <div className="flex flex-col ">
          <span className="text-secondary text-2xl mb-2">Countries: </span>{" "}
          <div className="flex flex-wrap items-center gap-2">
            {countriesList.map((item, i) => (
              <motion.div
                key={i + item}
                {...Fade}
                className="bg-secondary text-black font-semibold text-xl p-2 rounded-2xl hover:-translate-y-0.5 duration-100 cursor-default"
              >
                {item}
              </motion.div>
            )) || "N/A"}
          </div>
        </div>
        <p>
          <span className="text-secondary text-2xl">Nutri-Sco re:</span>{" "}
          {product.nutriscore_grade?.toUpperCase() || "N/A"}
        </p>
      </motion.div>
      <div className="w-full">
        <h3 className="mb-2 text-secondary font-semibold ">Nutrition</h3>
        {product.image_nutrition_url ? (
          <motion.img
            {...FadeLeftAnimation}
            src={product.image_nutrition_url}
            alt={product.product_name || "Unknown"}
            className="w-full h-auto  object-cover rounded max-w-96 md:max-w-xl mx-auto"
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
      </div>
      <div className="w-full">
        <h3 className="mb-2 text-secondary font-semibold ">Ingredients</h3>
        {product.image_ingredients_url ? (
          <motion.img
            {...FadeLeftAnimation}
            src={product.image_ingredients_url}
            alt={product.product_name || "Unknown"}
            className="w-full h-auto  object-cover rounded max-w-96 md:max-w-xl mx-auto"
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
      </div>
    </section>
  );
}
