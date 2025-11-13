import FoodList from "@/components/Food";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/hero";
import HowManyMealDidYouEat from "@/components/Home/HowManyMealDidYouEat";
import MealsList from "@/components/Meals";

export default function Page() {
  return (
    <main className="space-y-10">
      <Hero />
      <MealsList pageSize={4} />
      <HowManyMealDidYouEat/>
      {/* <FoodList maxPages={1} pageSize={4} hideLastCard /> */}
      <FAQ />
    </main>
  );
}
