import FoodList from "@/components/Food";

export default function Page() {
  return (
    <main className="mt-20 w-full">
      <FoodList  pageSize={20} />
    </main>
  );
}
