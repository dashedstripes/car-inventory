import { NextRequest } from "next/server";

interface Car {
  id: number;
  slug: string;
  make: String;
  model: String;
  description: String;
}

const data: Car[] = [
  {
    id: 1,
    slug: 'toyota-camry',
    make: 'Toyota',
    model: 'Camry',
    description: 'A car that is made by Toyota'
  },
  {
    id: 2,
    slug: 'honda-civic',
    make: 'Honda',
    model: 'Civic',
    description: 'A car that is made by Honda'
  },
  {
    id: 3,
    slug: 'ford-f150',
    make: 'Ford',
    model: 'F150',
    description: 'A car that is made by Ford'
  }
]

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  if(slug) {
    const car = data.find(car => car.slug === slug)
    return Response.json({ data: car })
  }

  return Response.json({ data })
}