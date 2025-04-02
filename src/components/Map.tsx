
import { useEffect, useRef } from "react";
import { Business } from "@/types";

interface MapProps {
  businesses: Business[];
  selectedBusiness?: Business;
}

const Map = ({ businesses, selectedBusiness }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real implementation, this would initialize a map library like Leaflet or Google Maps
    // For now, we'll use a placeholder
    const mapElement = mapRef.current;
    if (mapElement) {
      mapElement.innerHTML = `
        <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div class="text-center p-4">
            <p class="text-lg font-semibold mb-2">Map View</p>
            <p class="text-sm text-gray-500 mb-4">Showing ${businesses.length} businesses in Kuala Lumpur area</p>
            <p class="text-xs text-gray-400">This is a placeholder for an actual map implementation.</p>
            <p class="text-xs text-gray-400 mt-2">In production, this would integrate with OpenStreetMap or Google Maps.</p>
          </div>
        </div>
      `;
    }
  }, [businesses, selectedBusiness]);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border shadow-sm">
      <div ref={mapRef} className="w-full h-full min-h-[400px]"></div>
    </div>
  );
};

export default Map;
