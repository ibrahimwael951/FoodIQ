export interface FoodProduct {
  id?: string; // product id in Open Food Facts
  product_name?: string; // name of the product
  brands?: string; // brand name(s)
  barcode?: string; // code of the product
  code: string;
  image_front_url?: string; // main product image
  image_ingredients_url?: string; // optional image of ingredients
  image_nutrition_url?: string; // optional nutrition label
  countries?: string; // countries where sold
  categories?: string; // comma-separated categories
  nutriscore_grade?: string; // optional nutriscore: 'a', 'b', ...
  quantity?: string; // e.g., '500g', '1L'
}

export const Api = process.env.NEXT_PUBLIC_FOOD_API;
