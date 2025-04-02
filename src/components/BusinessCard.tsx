
import { Business } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <Card className="w-full h-full transition-all duration-200 hover:shadow-md animate-fade-in">
      <Link to={`/business/${business.id}`}>
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={business.image}
            alt={business.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-semibold line-clamp-1">
              {business.name}
            </CardTitle>
            {business.isPremium && (
              <Badge className="bg-dekat-500">Premium</Badge>
            )}
          </div>
          <CardDescription className="flex items-center text-sm gap-1">
            <MapPin size={14} className="text-gray-500" />
            <span className="truncate">{business.address.split(',')[0]}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {business.description}
          </p>
          <div className="flex items-center gap-1 mb-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(business.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{business.rating}</span>
            <span className="text-sm text-gray-500">
              ({business.reviews} reviews)
            </span>
          </div>
        </CardContent>
        <CardFooter className="text-xs text-gray-500 flex flex-col items-start gap-1">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>{business.phone}</span>
          </div>
          {business.website && (
            <div className="flex items-center gap-1">
              <Globe size={14} />
              <span className="truncate max-w-[220px]">
                {business.website.replace(/^https?:\/\//, '')}
              </span>
            </div>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BusinessCard;
