
import { Category } from "@/types";
import { Briefcase, Cpu, Heart, Layers, ShoppingBag, Utensils, Car } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "layers":
        return <Layers size={20} />;
      case "utensils":
        return <Utensils size={20} />;
      case "cpu":
        return <Cpu size={20} />;
      case "shopping-bag":
        return <ShoppingBag size={20} />;
      case "heart":
        return <Heart size={20} />;
      case "car":
        return <Car size={20} />;
      case "briefcase":
        return <Briefcase size={20} />;
      default:
        return <Layers size={20} />;
    }
  };

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "flex flex-col items-center px-4 py-2 rounded-lg transition-colors",
              selectedCategory === category.id
                ? "bg-dekat-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            <div className="mb-1">{getIcon(category.icon)}</div>
            <span className="text-xs font-medium whitespace-nowrap">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
