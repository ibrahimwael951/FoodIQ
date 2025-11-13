import FoodList from "@/components/Food";
import Hero from "@/components/Home/hero";
import MealsList from "@/components/Meals";

export default function Page() {
  return (
    <main className="space-y-10">
      <Hero />
      <MealsList pageSize={4} />
      <FoodList maxPages={1} pageSize={4} hideLastCard />
    </main>
  );
}
