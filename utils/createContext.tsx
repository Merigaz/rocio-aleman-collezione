"use client";

import { createContext, useEffect, useState } from "react";
import { PropChildren } from "./interface";
import getUniqueValues from "./uniqueValues";
export const filterContext = createContext<any>({
  filter: false,
  setFilter: () => {},
});
export const FilterDataContext = createContext<any>({
  filterData: [],
  setFilterData: () => {},
});
export const ProductsDataContext = createContext<any>({
  productsData: [],
  setProductsData: () => {},
});
export const CategoriesDataContext = createContext<any>({
  categoriesData: [],
  setCategoriesData: () => {},
});
export const UniqueSizeDataContext = createContext<any>({
  uniqueSizeData: [],
  setUniqueSizeData: () => {},
});
const ContextProvider = ({ children }: PropChildren) => {
  const [productsData, setProductsData] = useState<[]>([]);
  const [filterData, setFilterData] = useState<[]>([]);
  const [uniqueSizeData, setUniqueSizeData]: any = useState([]);
  const [categoriesData, setCategoriesData] = useState<[]>([]);
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    async function fetchProductsData() {
      try {
        const products = await fetch("/api/products");
        const categories = await fetch("/api/categories");
        if (!products.ok) {
          throw new Error("Failed to fetch products");
        }
        const dataproducts = await products.json();
        const datacategories = await categories.json();
        setProductsData(dataproducts.productsData);
        setCategoriesData(datacategories.categoriesData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProductsData();
  }, []);

  return (
    <ProductsDataContext.Provider value={{ productsData, setProductsData }}>
      <CategoriesDataContext.Provider
        value={{ categoriesData, setCategoriesData }}
      >
        <FilterDataContext.Provider value={{ filterData, setFilterData }}>
          <UniqueSizeDataContext.Provider
            value={{ uniqueSizeData, setUniqueSizeData }}
          >
            <filterContext.Provider
              value={{ filter, setFilter }}
            >
              {children}
            </filterContext.Provider>
          </UniqueSizeDataContext.Provider>
        </FilterDataContext.Provider>
      </CategoriesDataContext.Provider>
    </ProductsDataContext.Provider>
  );
};
export default ContextProvider;
