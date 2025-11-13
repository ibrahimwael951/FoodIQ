import FoodList from "@/components/Food";
import Hero from "@/components/Home/hero";
import MealsList from "@/components/Meals";

export default function Page() {
  return (
    <main className="space-y-10">
      <Hero />
      <MealsList maxPages={1} pageSize={4} hideLastCard />
      <FoodList maxPages={1} pageSize={4} hideLastCard />
    </main>
  );
}
