export default async function Car({ params }: { params: { slug: string }}) {
  const res = await fetch(`${process.env.BASE_URL}/api/inventory?slug=${params.slug}`);
  const json = await res.json();
  const data = json.data;

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl py-8">{data.make} {data.model}</h1>
      <p>{data.description}</p>
    </div>
  )
}