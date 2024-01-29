export interface Car {
  id: number;
  slug: string;
  make: string;
  model: string;
  description: string;
  imgSrc: string;
}

export const cars: Car[] = [
  {
    id: 1,
    slug: 'toyota-camry',
    make: 'Toyota',
    model: 'Camry',
    description: 'A car that is made by Toyota',
    imgSrc: 'car-1.jpg'
  },
  {
    id: 2,
    slug: 'honda-civic',
    make: 'Honda',
    model: 'Civic',
    description: 'A car that is made by Honda',
    imgSrc: 'car-1.jpg'
  },
  {
    id: 3,
    slug: 'ford-f150',
    make: 'Ford',
    model: 'F150',
    description: 'A car that is made by Ford',
    imgSrc: 'car-1.jpg'
  }
]
