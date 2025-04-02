
import { SearchFilters as SearchFiltersType } from "@/types";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFilterChange: (filters: SearchFiltersType) => void;
}

const SearchFilters = ({ filters, onFilterChange }: SearchFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localFilters, setLocalFilters] = useState<SearchFiltersType>(filters);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters({
      ...localFilters,
      query: e.target.value,
    });
  };

  const handleRadiusChange = (value: number[]) => {
    setLocalFilters({
      ...localFilters,
      radius: value[0],
    });
  };

  const handleRatingChange = (value: number[]) => {
    setLocalFilters({
      ...localFilters,
      rating: value[0],
    });
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex items-center gap-2">
        <div className="relative flex-grow">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input
            type="text"
            placeholder="Search businesses, categories, or keywords"
            className="w-full pl-10"
            value={localFilters.query}
            onChange={handleInputChange}
          />
        </div>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <SlidersHorizontal size={18} />
        </Button>
        <Button onClick={handleApplyFilters}>Search</Button>
      </div>

      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="mb-2 block">Distance (km)</Label>
            <div className="px-2">
              <Slider
                defaultValue={[localFilters.radius]}
                max={50}
                step={1}
                onValueChange={handleRadiusChange}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">0 km</span>
              <span className="text-xs text-gray-500 font-medium">
                {localFilters.radius} km
              </span>
              <span className="text-xs text-gray-500">50 km</span>
            </div>
          </div>

          <div>
            <Label className="mb-2 block">Minimum Rating</Label>
            <div className="px-2">
              <Slider
                defaultValue={[localFilters.rating]}
                max={5}
                step={0.5}
                onValueChange={handleRatingChange}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">0</span>
              <span className="text-xs text-gray-500 font-medium">
                {localFilters.rating}+ stars
              </span>
              <span className="text-xs text-gray-500">5</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
