import FoodList from "@/components/Home/Food";
import Hero from "@/components/Home/hero";

export default function Page() {
  return (
    <main className="space-y-10">
      <Hero />
      <FoodList maxPages={1} pageSize={4} hideLastCard />
    </main>
  );
}
