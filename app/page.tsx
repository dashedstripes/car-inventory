import Inventory from "./inventory";

export default function Home() {
  return (
    <main className="container mx-auto px-8">
      <h1 className="py-8 text-xl font-bold">Cars 4 Sale</h1>
      <Inventory/>
    </main>
  );
}
