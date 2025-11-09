import type { NextApiRequest, NextApiResponse } from 'next';
import type { BookingFormData, BookingResponse } from '@/interfaces/booking';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookingResponse | { message: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const bookingData: BookingFormData = req.body;

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phoneNumber',
      'cardNumber',
      'expirationDate',
      'cvv',
      'billingAddress'
    ];

    const missingFields = requiredFields.filter(field => !bookingData[field as keyof BookingFormData]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate card number (basic check for 16 digits)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(bookingData.cardNumber.replace(/\s/g, ''))) {
      return res.status(400).json({ message: 'Invalid card number' });
    }

    // Validate expiration date (MM/YY format)
    const expirationRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expirationRegex.test(bookingData.expirationDate)) {
      return res.status(400).json({ message: 'Invalid expiration date format (MM/YY)' });
    }

    // Validate CVV (3-4 digits)
    const cvvRegex = /^\d{3,4}$/;
    if (!cvvRegex.test(bookingData.cvv)) {
      return res.status(400).json({ message: 'Invalid CVV' });
    }

    // In a real application, you would:
    // 1. Process payment with a payment provider (e.g., Stripe)
    // 2. Store booking details in a database
    // 3. Send confirmation email to the customer
    // 4. Handle payment provider webhooks

    // For this example, we'll simulate a successful booking
    const booking: BookingResponse = {
      id: Math.random().toString(36).substr(2, 9),
      status: 'confirmed',
      message: 'Booking confirmed successfully',
      bookingDetails: {
        propertyName: "Sample Property",
        price: 100,
        bookingFee: 10,
        totalNights: 1,
        startDate: new Date().toISOString()
      },
      customerDetails: {
        firstName: bookingData.firstName,
        lastName: bookingData.lastName,
        email: bookingData.email,
        phoneNumber: bookingData.phoneNumber,
        billingAddress: bookingData.billingAddress
      }
    };

    return res.status(200).json(booking);
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}