export interface FoodProduct {
  id?: string;
  product_name?: string;
  brands?: string;
  barcode?: string;
  code: string;
  image_front_url?: string;
  image_ingredients_url?: string;
  image_nutrition_url?: string;
  countries?: string;
  categories?: string;
  nutriscore_grade?: string;
  quantity?: string;
}

export const Api = process.env.NEXT_PUBLIC_FOOD_API;
