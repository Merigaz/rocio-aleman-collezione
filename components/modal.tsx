import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Checkbox, ConfigProvider } from "antd";
import {
  CategoriesDataContext,
  FilterDataContext,
  ProductsDataContext,
  UniqueSizeDataContext,
} from "@/utils/createContext";
import { CheckboxChangeEvent } from "antd/es/checkbox";

export default function FilterModal(sizes: any, tela: any) {
  let [isOpen, setIsOpen] = useState(false);
  const { categoriesData } = useContext(CategoriesDataContext);
  const { filterData, setFilterData } = useContext(FilterDataContext);
  const { uniqueSizeData, setUniqueSizeData } = useContext(
    UniqueSizeDataContext
  );
  const { productsData } = useContext(ProductsDataContext);

  const handleCheckboxChange = (
    e: CheckboxChangeEvent,
    subcategory: string
  ) => {
    const { checked } = e.target;
    setFilterData((prevState: any) => {
      if (checked) {
        // Agregar el nombre de la subcategoría si está marcado
        return [...prevState, subcategory];
      } else {
        // Quitar el nombre de la subcategoría si está desmarcado
        return prevState.filter((item: any) => item !== subcategory);
      }
    });
  };
  console.log(filterData, "85");
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="bg-pinkybg w-40 border border-[#403834] border-opacity-35 flex flex-col justify-center items-center shadow-card-shadow">
        <Button
          onClick={open}
          className=" w-40 font-Poly text-[#403834] text-2xl data-[hover]:bg-white/30   flex flex-row gap-2 justify-center items-center active:shadow-none active:animation-btn-cta"
        >
          Filtrar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </Button>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 p-0"
        onClose={close}
      >
        <div className="fixed inset-0 z-40 w-screen">
          <div className="flex h-screen  bg-white/5 backdrop-blur-sm">
            <DialogPanel
              transition
              className="w-[80%] tablet:w-[44%] lg:w-[20%] flex flex-col h-screen pl-8 pt-4 bg-bgHome bg-cover transition duration-300 ease-in-out data-[closed]:-translate-x-[400px]  border-r border-opacity-5 shadow-card-shadow border-[#403834]"
            >
              <Button
                className="pr-10 pt-4 self-end w-20 font-Poly h-20"
                onClick={close}
              >
                <svg
                  className="stroke-[#403834]"
                  aria-hidden="true"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <DialogTitle
                as="h3"
                className="text-2xl font-Poly text-[#403834] "
              >
                Categorias
              </DialogTitle>
              {categoriesData.map((category: any) => (
                <>
                  <DialogTitle
                    as="h3"
                    className="text-xl font-Poly py-2  text-[#403834]"
                  >
                    {`${category.categories}`}
                  </DialogTitle>
                  <ConfigProvider
                    theme={{
                      token: {
                        fontSize: 16,
                        fontFamily: "Poly",
                        colorBorder: "#403834",
                        colorPrimary: "#FFF2F2",
                        controlInteractiveSize: 18,
                        colorWhite: "#403834",
                        colorText: "#403834",
                      },
                    }}
                  >
                    {filterData.includes(`vip-${category.categories}`) ? (
                      <Checkbox
                        onChange={(e) =>
                          handleCheckboxChange(e, `vip-${category.categories}`)
                        
                        }
                        value={`vip-${category.categories}`}
                        onClick={close}
                        checked
                      >
                        Destacados
                      </Checkbox>
                    ) : (
                      <Checkbox
                        onChange={(e) =>
                          handleCheckboxChange(e, `vip-${category.categories}`)
                        }
                        value={`vip-${category.categories}`}
                        onClick={close}
                      >
                        Destacados
                      </Checkbox>
                    )}

                    {category.subCategorie.map((subcategory: any) => (
                      <div className="flex flex-row pt-2">
                        {filterData.includes(subcategory.subCategorie) ? (
                          <Checkbox
                            onChange={(e) =>
                              handleCheckboxChange(e, subcategory.subCategorie)
                            }
                            onClick={close}
                            checked
                          >
                            {subcategory.subCategorie}
                          </Checkbox>
                        ) : (
                          <Checkbox
                            onChange={(e) =>
                              handleCheckboxChange(e, subcategory.subCategorie)
                            }
                            value={subcategory.subCategorie}
                            onClick={close}
                          >
                            {subcategory.subCategorie}
                          </Checkbox>
                        )}
                      </div>
                    ))}
                  </ConfigProvider>
                </>
              ))}
              <DialogTitle
                as="h3"
                className="text-2xl font-Poly py-4 text-[#403834]"
              >
                Filtrar por
              </DialogTitle>
              <DialogTitle
                as="h3"
                className="text-xl font-Poly text-[#403834] "
              >
                Tela
              </DialogTitle>
              <div className="grid grid-cols-3 pt-2 pr-2 gap-2">
                {sizes.tela.map((uniquetela: any) => (
                  <ConfigProvider
                    theme={{
                      token: {
                        fontSize: 16,
                        fontFamily: "Poly",
                        colorBorder: "#403834",
                        colorPrimary: "#FFF2F2",
                        controlInteractiveSize: 18,
                        colorWhite: "#403834",
                      },
                    }}
                  >
                    {filterData.includes(uniquetela) ? (
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(e, uniquetela)}
                        onClick={close}
                        checked
                      >
                        {uniquetela}
                      </Checkbox>
                    ) : (
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(e, uniquetela)}
                        onClick={close}
                        value={uniquetela}
                      >
                        {uniquetela}
                      </Checkbox>
                    )}
                  </ConfigProvider>
                ))}
              </div>
              <DialogTitle
                as="h3"
                className="text-xl font-Poly pt-2 text-[#403834] "
              >
                Talla
              </DialogTitle>
              <div className="grid grid-cols-3 pt-2 pr-12  gap-2">
                {sizes.sizes.map((uniquesize: any) => (
                  <ConfigProvider
                    theme={{
                      token: {
                        fontSize: 16,
                        fontFamily: "Poly",
                        colorBorder: "#403834",
                        colorPrimary: "#FFF2F2",
                        controlInteractiveSize: 18,
                        colorWhite: "#403834",
                        colorText: "#403834",
                      },
                    }}
                  >
                    {filterData.includes(uniquesize) ? (
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(e, uniquesize)}
                        onClick={close}
                        checked
                      >
                        {uniquesize}
                      </Checkbox>
                    ) : (
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(e, uniquesize)}
                        onClick={close}
                        value={uniquesize}
                      >
                        {uniquesize}
                      </Checkbox>
                    )}
                  </ConfigProvider>
                ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
