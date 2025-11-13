import MealsList from "@/components/Meals";

export default function Page() {
  return (
    <main className="mt-24">
      <MealsList pageSize={100} />
    </main>
  );
}
