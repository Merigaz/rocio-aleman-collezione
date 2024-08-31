export async function generateStaticParams() {
  const products = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  }).then((res) => res.json());
  const resArray = Object.values(products);

  return [
    resArray.map((element: any) => ({
      categoryName: products.mainCategoryName,
      productID: products.id,
    })),
  ];
}

import ButtonCompraWP from "@/components/buttoncompra";
import { Carousel, ConfigProvider } from "antd";
import Image from "next/image";
export default async function Page({
  params,
}: {
  params: { categoryName: string; productID: string };
}) {
  const response = await fetch(
    `http://localhost:3000/api/products/${params.productID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  const arrayData = Object.values(data);
  console.log(arrayData, "slug");
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotHeight: 6,
            dotWidth: 32,
            arrowSize: 32,
          },
        },
      }}
    >
      <main className="pt-12 h-[980px] flex items-start justify-center  backdrop-blur-sm ">
        {arrayData.map((element: any) => (
          <div className="flex justify-center items-center bg-bgHome bg-cover border border-[#403834]/20 shadow-product-shadow w-[780px]">
            <div
              key={element.id}
              className="flex flex-row gap-8 bg-pinkybg bg-opacity-35 justify-center w-[780px]"
            >
              <Carousel
                autoplay
                autoplaySpeed={2200}
                className="w-[402px] flex h-full"
              >
                {element.images.map((image: any, index: any) => (
                  <div key={index} className="h">
                    <Image
                      key={index}
                      src={`/productos/${image}`}
                      alt={image.altText || `Image ${index + 1}`}
                      quality={100}
                      width={402}
                      height={700}
                      sizes="1280"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="flex flex-col  justify-between">
                <h2 className="text-5xl font-Poly text-[#403834]">
                  {element.price}
                </h2>
                <h1 className="text-2xl font-Poly text-[#403834] ">
                  {element.name}
                </h1>
                <p className="text-left font-PriceCard w-[270px] text-md  leading-[22px] text-balance whitespace-normal text-[#403834]">
                  {element.description}
                </p>
                <div className="flex flex-col gap-1">
                  <h2 className="font-PriceCard">Tallas disponibles</h2>
                  <div className="flex flex-row gap-2 ">
                    {element.size.map((size: any) => (
                      <a className="font-Poly flex border text-[#403834] border-[#403834] rounded-[4px] text-sm  w-8 h-6 justify-center items-center px-1">
                        {size}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-PriceCard">Colores disponibles</h2>
                  <div className="flex flex-row gap-2 ">
                    {element.color.map((color: any) => (
                      <a className="font-Poly flex border text-[#403834]   border-[#403834] rounded-[4px] text-sm  w-20 h-6 justify-center items-center px-1">
                        {color}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1"    >
                  <h2 className="font-PriceCard">Telas disponibles</h2>
                  <div className="flex flex-row gap-4 ">
                    {element.tela.map((tela: any) => (
                      <a className="font-Poly flex border text-[#403834] border-[#403834] rounded-[4px] text-sm  w-20 h-6 justify-center items-center px-1">
                        {tela}
                      </a>
                    ))}
                  </div>
                </div>
                
                  <ButtonCompraWP />
             
              </div>
            </div>
          </div>
        ))}
      </main>
    </ConfigProvider>
  );
}
