import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmExOGsxMXQ5OWhxY2dkaHVwdXplM20zaGRpOWMwaTdrMTVmeDRsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z7767kGHHQ2s/giphy.gif"
        alt=""
        className="rounded-3xl w-96 h-60"
      />
      <h1 className="font-bold">
        Page Not <span className="text-secondary"> Found</span>
      </h1>
      <div className="flex items-center justify-center gap-5 mt-5 text-2xl">
        <Button href="/" changeColor>
          Home
        </Button>
        <Button href="/contact">Contact</Button>
      </div>
    </section>
  );
}
