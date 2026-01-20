import ThemeToggle from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="w-full min-h-full font-sans">
      <main className="max-w-5xl flex flex-col gap-2 mx-auto">
        <h1 className="text-center text-5xl font-extrabold my-4">
          Theming with NextJS
        </h1>
        <section className="grid sm:grid-cols-2 gap-4">
          <div className="w-full min-h-[30vh] bg-card rounded-lg shadow-sm border border-border p-2">
            <h2 className="text-center text-3xl font-bold">Card 1</h2>
          </div>
          <div className="w-full min-h-[30vh] bg-card rounded-lg shadow-sm border border-border p-2">
            <h2 className="text-center text-3xl font-bold">Card 2</h2>
          </div>
          <div className="col-span-2 w-full min-h-[30vh] bg-card rounded-lg shadow-sm border border-border p-2">
            <h2 className="text-center text-3xl font-bold">Card 3</h2>
          </div>
        </section>
        <ThemeToggle />
      </main>
    </div>
  );
}
