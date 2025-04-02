
export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  address: string;
  phone: string;
  website?: string;
  email?: string;
  isPremium: boolean;
  rating: number;
  reviews: number;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  radius: number;
  rating: number;
}
