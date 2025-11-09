import { NextApiRequest, NextApiResponse } from 'next';
import type { PropertyProps } from '@/interfaces';

// Sample data - you would typically fetch this from a database
const properties: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
    discount: ""
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
    discount: "30"
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps[]>
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  res.status(200).json(properties);
}