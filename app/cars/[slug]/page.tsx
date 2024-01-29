import { cars, Car } from '../../../data/cars';

export default async function Car({ params }: { params: { slug: string }}) {

  const data: Car | undefined = cars.find(car => car.slug === params.slug);

  if(!data) {
    return <div>Sorry, no car found for {params.slug}</div>
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl py-8">{data.make} {data.model}</h1>
      <p>{data.description}</p>
    </div>
  )
}