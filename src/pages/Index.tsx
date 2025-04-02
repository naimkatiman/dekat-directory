
import { useState } from "react";
import Navbar from "@/components/Navbar";
import BusinessList from "@/components/BusinessList";
import Map from "@/components/Map";
import SearchFilters from "@/components/SearchFilters";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import { businesses, categories } from "@/data/businesses";
import { Business, SearchFilters as SearchFiltersType } from "@/types";

const Index = () => {
  const [showMap, setShowMap] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: "",
    category: "all",
    radius: 10,
    rating: 0,
  });

  const filteredBusinesses: Business[] = businesses.filter((business) => {
    // Filter by category
    if (selectedCategory !== "all" && business.category !== selectedCategory) {
      return false;
    }

    // Filter by search query
    if (
      filters.query &&
      !business.name.toLowerCase().includes(filters.query.toLowerCase()) &&
      !business.description.toLowerCase().includes(filters.query.toLowerCase())
    ) {
      return false;
    }

    // Filter by rating
    if (business.rating < filters.rating) {
      return false;
    }

    return true;
  });

  const handleFilterChange = (newFilters: SearchFiltersType) => {
    setFilters(newFilters);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const toggleMapView = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Discover Local Malaysian Businesses
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find, connect, and support the best local businesses across Malaysia.
            </p>
          </div>

          <SearchFilters filters={filters} onFilterChange={handleFilterChange} />

          <div className="mb-6">
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelectCategory={handleCategorySelect} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${showMap ? "lg:col-span-2" : "lg:col-span-3"}`}>
              <BusinessList 
                businesses={filteredBusinesses} 
                toggleMapView={toggleMapView}
                showMap={showMap}
              />
            </div>
            
            {showMap && (
              <div className="lg:col-span-1">
                <Map businesses={filteredBusinesses} />
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
