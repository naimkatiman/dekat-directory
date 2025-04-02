
import { Business, Category } from "@/types";

export const businesses: Business[] = [
  {
    id: "1",
    name: "Kopi Luwak Cafe",
    description: "Authentic Malaysian coffee shop serving local favorites and pastries in a cozy environment.",
    category: "food-beverage",
    address: "123 Jalan Sultan, 50000 Kuala Lumpur",
    phone: "+60 3-2282-1234",
    website: "https://kopiluwak.example.com",
    email: "info@kopiluwak.example.com",
    isPremium: true,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2030&auto=format&fit=crop",
    location: {
      lat: 3.1478,
      lng: 101.6953,
    },
  },
  {
    id: "2",
    name: "Tech Solutions Sdn Bhd",
    description: "IT consulting and solutions provider specializing in SME digital transformation.",
    category: "technology",
    address: "45 Jalan Ampang, 50450 Kuala Lumpur",
    phone: "+60 3-2161-5678",
    website: "https://techsolutions.example.com",
    email: "contact@techsolutions.example.com",
    isPremium: true,
    rating: 4.3,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    location: {
      lat: 3.1602,
      lng: 101.7184,
    },
  },
  {
    id: "3",
    name: "Batik Creations",
    description: "Traditional Malaysian batik clothing and accessories made by local artisans.",
    category: "retail",
    address: "78 Jalan Petaling, 50000 Kuala Lumpur",
    phone: "+60 3-2031-9012",
    website: "https://batikcreations.example.com",
    isPremium: false,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1573879500655-98f2012dd1db?q=80&w=2070&auto=format&fit=crop",
    location: {
      lat: 3.1422,
      lng: 101.6986,
    },
  },
  {
    id: "4",
    name: "Green Oasis Spa",
    description: "Luxury spa offering traditional Malaysian treatments and modern wellness therapies.",
    category: "health-beauty",
    address: "12 Jalan Bukit Bintang, 55100 Kuala Lumpur",
    phone: "+60 3-2117-3456",
    website: "https://greenoasis.example.com",
    email: "bookings@greenoasis.example.com",
    isPremium: true,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    location: {
      lat: 3.1488,
      lng: 101.7137,
    },
  },
  {
    id: "5",
    name: "Kuala Lumpur Auto Service",
    description: "Full-service auto repair and maintenance center with certified mechanics.",
    category: "automotive",
    address: "567 Jalan Imbi, 55100 Kuala Lumpur",
    phone: "+60 3-2144-7890",
    isPremium: false,
    rating: 4.2,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1486684228390-9e13b4f81885?q=80&w=2070&auto=format&fit=crop",
    location: {
      lat: 3.1421,
      lng: 101.7173,
    },
  },
  {
    id: "6",
    name: "Orchid Legal Services",
    description: "Legal consultancy specializing in business law and corporate governance.",
    category: "professional",
    address: "231 Jalan Tun Razak, 50400 Kuala Lumpur",
    phone: "+60 3-2163-2345",
    website: "https://orchidlegal.example.com",
    email: "inquiries@orchidlegal.example.com",
    isPremium: true,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    location: {
      lat: 3.1617,
      lng: 101.7205,
    },
  },
];

export const categories: Category[] = [
  {
    id: "all",
    name: "All Categories",
    icon: "layers",
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    icon: "utensils",
  },
  {
    id: "technology",
    name: "Technology",
    icon: "cpu",
  },
  {
    id: "retail",
    name: "Retail",
    icon: "shopping-bag",
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
    icon: "heart",
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: "car",
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: "briefcase",
  },
];
