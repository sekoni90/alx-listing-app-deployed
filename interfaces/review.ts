export interface Review {
  id: number;
  userId: number;
  propertyId: number;
  rating: number;
  comment: string;
  userName: string;
  userAvatar?: string;
  createdAt: string;
}

export interface ReviewResponse {
  reviews: Review[];
  totalReviews: number;
  averageRating: number;
}