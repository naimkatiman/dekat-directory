
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businesses } from "@/data/businesses";
import { Business } from "@/types";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  ChevronLeft, 
  Share2, 
  Heart,
  Clock,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Map from "@/components/Map";

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundBusiness = businesses.find((b) => b.id === id) || null;
      setBusiness(foundBusiness);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading business details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Business Not Found</h2>
            <p className="mb-4">The business you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-dekat-500/10 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm breadcrumbs">
              <Link to="/" className="flex items-center text-dekat-600 hover:text-dekat-800">
                <ChevronLeft size={16} className="mr-1" />
                Back to Directory
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-200">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          {business.isPremium && (
            <div className="absolute top-4 right-4">
              <span className="flex items-center bg-dekat-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Award size={16} className="mr-1" />
                Premium Business
              </span>
            </div>
          )}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{business.name}</h1>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < Math.floor(business.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 font-medium">{business.rating}</span>
                    <span className="ml-1 text-gray-600">
                      ({business.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-gray-600 flex items-center">
                    <MapPin size={16} className="mr-1" /> {business.address}
                  </p>
                </div>

                <div className="flex mt-4 md:mt-0 space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Heart size={16} />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 size={16} />
                    Share
                  </Button>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-700">{business.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Phone size={18} className="mr-2 text-dekat-500" />
                      <span>{business.phone}</span>
                    </div>
                    {business.website && (
                      <div className="flex items-center">
                        <Globe size={18} className="mr-2 text-dekat-500" />
                        <a 
                          href={business.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-dekat-500 hover:underline truncate"
                        >
                          {business.website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                    )}
                    {business.email && (
                      <div className="flex items-center">
                        <Mail size={18} className="mr-2 text-dekat-500" />
                        <a 
                          href={`mailto:${business.email}`}
                          className="text-dekat-500 hover:underline"
                        >
                          {business.email}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Clock size={18} className="mr-2 text-dekat-500" />
                      <div>
                        <p className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Saturday</span>
                          <span className="font-medium">10:00 AM - 4:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-medium">Closed</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-gray-600 mb-4">
                    Be the first to review this business!
                  </p>
                  <Button>Write a Review</Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-6">
                  <Map 
                    businesses={[business]} 
                    selectedBusiness={business} 
                  />
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Claim This Business</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Is this your business? Claim it to respond to reviews, update information and more.
                    </p>
                    <Button className="w-full">Claim Business</Button>
                  </CardContent>
                </Card>

                {business.isPremium && (
                  <Card className="bg-gradient-to-r from-dekat-500/20 to-dekat-600/20 border-dekat-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Award size={18} className="mr-2 text-dekat-500" />
                        Premium Business
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-2">
                        This business is a premium member of dekat.me, committed to providing excellent service.
                      </p>
                      <ul className="text-sm space-y-1 mb-4">
                        <li className="flex items-start">
                          <span className="text-dekat-500 mr-2">✓</span>
                          Verified contact information
                        </li>
                        <li className="flex items-start">
                          <span className="text-dekat-500 mr-2">✓</span>
                          Priority in search results
                        </li>
                        <li className="flex items-start">
                          <span className="text-dekat-500 mr-2">✓</span>
                          Responds to inquiries within 24 hours
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessDetail;
