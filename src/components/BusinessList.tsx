
import { useState } from "react";
import { Business } from "@/types";
import BusinessCard from "./BusinessCard";
import { Button } from "@/components/ui/button";
import { MapPin, List, Grid } from "lucide-react";

interface BusinessListProps {
  businesses: Business[];
  toggleMapView: () => void;
  showMap: boolean;
}

const BusinessList = ({ businesses, toggleMapView, showMap }: BusinessListProps) => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {businesses.length} Businesses Found
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewType("grid")}
              className={`px-2 py-1 rounded-md ${
                viewType === "grid" ? "bg-white shadow-sm" : ""
              }`}
            >
              <Grid size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewType("list")}
              className={`px-2 py-1 rounded-md ${
                viewType === "list" ? "bg-white shadow-sm" : ""
              }`}
            >
              <List size={18} />
            </Button>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleMapView}
            className="flex items-center gap-1"
          >
            <MapPin size={16} />
            {showMap ? "Hide Map" : "Show Map"}
          </Button>
        </div>
      </div>

      <div className={`grid gap-6 ${
        viewType === "grid" 
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
          : "grid-cols-1"
      }`}>
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
