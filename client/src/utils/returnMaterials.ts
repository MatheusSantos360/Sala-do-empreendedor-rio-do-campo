import { Category } from "@/types/Category";
import { useEffect, useState } from "react";

export const useMaterials: (setSelectedCategory: (category: Category) => void) => { loading: boolean; categories: Category[] } = (setSelectedCategory) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/materials")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setSelectedCategory(data[0])
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching materials:", error);
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, categories };
};