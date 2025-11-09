export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}
// interfaces/index.ts
export interface PropertyProps {
  id: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string; // percentage as string or empty
}


export interface CardProps {
  name: string;
  location: string;
  price: number | string;
  imageUrl?: string;
  rating?: number;
  category?: string[];
  title: string;
  description: string;
  onPrimaryClick: () => void;
  primaryLabel: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}
