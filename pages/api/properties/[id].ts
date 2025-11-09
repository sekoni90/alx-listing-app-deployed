import { NextApiRequest, NextApiResponse } from 'next';
import type { PropertyProps } from '@/interfaces';

const propertyData: PropertyProps[] = [
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
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
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
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3",
    discount: "30"
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps | { message: string }>
) {
  const { id } = req.query;
  const property = propertyData.find(p => p.id === Number(id));

  if (!property) {
    return res.status(404).json({ message: 'Property not found' });
  }

  res.status(200).json(property);
}