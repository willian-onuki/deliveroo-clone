import { Image } from "sanity";

interface SanityBody {
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}


export interface Dish extends SanityBody {
  _type: 'dish',
  name: string;
  short_description: string;
  price: number;
  image: Image;
}

export interface Category extends SanityBody {
  _type: 'category',
  name: string;
  image: Image;
}

export interface Restaurant extends SanityBody {
  _type: 'restaurant';
  name: string;
  short_description: string;
  image: Image;
  lat: number;
  long: number;
  address: string;
  rating: number;
  type: Category;
  dishes: Dish[];
}

export interface Featured extends SanityBody {
  _type: 'featured',
  name: string;
  short_description: string;
  restaurants: Restaurant[];
}
