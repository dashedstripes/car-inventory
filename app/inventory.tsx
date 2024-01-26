import Link from "next/link";

export default async function Inventory() {
  const res = await fetch(`${process.env.BASE_URL}/api/inventory`);
  const json = await res.json();
  const data = json.data;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {data.map((car: any) => (
        <Link href={`/cars/${car.slug}`} className="border p-8 rounded" key={car.id}>
          <h2 className="font-bold text-xl">{car.make} {car.model}</h2>
          <p>{car.description}</p>
        </Link>
      ))}
    </div>
  )
}