import { NextApiRequest, NextApiResponse } from 'next';
import type { PropertyProps } from '@/interfaces';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps[]>
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  res.status(200).json(PROPERTYLISTINGSAMPLE);
}