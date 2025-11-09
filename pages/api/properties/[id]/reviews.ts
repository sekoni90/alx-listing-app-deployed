import type { NextApiRequest, NextApiResponse } from 'next';
import type { ReviewResponse } from '@/interfaces/review';

// Sample review data - in a real application, this would come from a database
const reviewsData: Record<number, Array<{
  id: number;
  userId: number;
  propertyId: number;
  rating: number;
  comment: string;
  userName: string;
  userAvatar: string;
  createdAt: string;
}>> = {
  1: [
    {
      id: 1,
      userId: 1,
      propertyId: 1,
      rating: 5,
      comment: "Amazing property with stunning views! The host was very accommodating and the amenities were top-notch.",
      userName: "John Doe",
      userAvatar: "https://i.pravatar.cc/150?img=1",
      createdAt: "2025-10-15T10:00:00Z"
    },
    {
      id: 2,
      userId: 2,
      propertyId: 1,
      rating: 4,
      comment: "Great location and beautiful property. Would definitely stay again!",
      userName: "Jane Smith",
      userAvatar: "https://i.pravatar.cc/150?img=2",
      createdAt: "2025-10-10T15:30:00Z"
    }
  ],
  2: [
    {
      id: 3,
      userId: 3,
      propertyId: 2,
      rating: 5,
      comment: "Perfect mountain getaway! The views were breathtaking and the cabin was very cozy.",
      userName: "Mike Johnson",
      userAvatar: "https://i.pravatar.cc/150?img=3",
      createdAt: "2025-10-05T09:15:00Z"
    }
  ]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReviewResponse | { message: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;
  const propertyId = Number(id);

  if (!propertyId) {
    return res.status(400).json({ message: 'Property ID is required' });
  }

  const reviews = reviewsData[propertyId] || [];

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? reviews.reduce((acc: number, review) => acc + review.rating, 0) / reviews.length
    : 0;

  const response: ReviewResponse = {
    reviews,
    totalReviews: reviews.length,
    averageRating
  };

  res.status(200).json(response);
}