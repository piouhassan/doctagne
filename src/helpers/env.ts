export const isProduction = process.env.NODE_ENV === 'production';

export const APP_URL = isProduction 
  ? 'https://app.doctagne.com' 
  : 'http://app.doctagne.localhost';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/';
