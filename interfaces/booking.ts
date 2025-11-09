export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  billingAddress: string;
}

export interface BookingResponse {
  id: string;
  status: 'confirmed' | 'pending' | 'failed';
  message?: string;
  bookingDetails: BookingDetails;
  customerDetails: CustomerDetails;
}