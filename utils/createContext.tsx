"use client";

import { createContext, useEffect, useState } from "react";
import { PropChildren } from "./interface";

export const ProductsDataContext = createContext<any>({
  productsData: [],
  setProductsData: () => {},
});

const ContextProvider = ({ children }: PropChildren) => {

  const [productsData, setProductsData] = useState<[]>([]);
  useEffect(() => {
    async function fetchProductsData() {
        try {
            const response = await fetch("/api/products");
            if (!response.ok) {
              throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            setProductsData(data.productsData);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
    }
    fetchProductsData();
  }, []);

  return (
   
        <ProductsDataContext.Provider value={{ productsData, setProductsData }}>  
            {children}     
        </ProductsDataContext.Provider>
   
  );
};
export default ContextProvider;