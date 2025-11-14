import MealsList from "@/components/Meals";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <main className="mt-24">
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <div className="space-y-2">
          <h1 className="font-bold">Our Menu</h1>
          <h5 className="text-black/70 dark:text-white/70">
            you can search about meals here too
          </h5>
        </div>
        <Button href="/menu/search" changeColor>
          Search
        </Button>
      </div>
      <MealsList pageSize={100} />
    </main>
  );
}
