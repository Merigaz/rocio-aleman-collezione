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
import Link from "next/link";
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

  const arrayData = [data.product];
  const nextProductId = data.nextproduct.id;
  const nextProductMainCategoryName = data.nextproduct.mainCategoryName;
  const previousProductId = data.previousproduct.id;
  const previousProductMainCategoryName = data.previousproduct.mainCategoryName;
  console.log(data.previousproduct.id, "preid");

  const imageStyle = {
    height: 700,
    width: 444,
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotHeight: 8,
            dotWidth: 48,
            arrowSize: 32,
            colorBgContainer: "#403834",
          },
        },
      }}
    >
      <main className="pt-12 h-screen flex items-start justify-center  backdrop-blur-sm ">
        {arrayData.map((element: any) => (
          <div className="flex flex-row relative justify-center bg-bgHome h-[740px] bg-cover border border-[#403834]/20 shadow-product-shadow w-[52%] ">
            <Link
              href={`/catalogo/${previousProductMainCategoryName}/${previousProductId}`}
            >
              <div className="absolute h-full w-[48px] left-0 hover:bg-[#403834] hover:bg-opacity-35  z-10 hover:cursor-pointer border-r border-[#403834] bg-pinkybg opacity-60 border-opacity-20 ">
                <svg
                  className="stroke-[#403834] h-[32px] w-[32px] absolute top-1/2 left-2"
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
              </div>
            </Link>
            <div
              key={element.id}
              className=" relative flex flex-row py-6 gap-8 justify-center bg-pinkybg  bg-opacity-30 w-full h-[740px]"
            >
              <Carousel autoplay autoplaySpeed={3000} className="w-[450px]">
                {element.images.map((image: any, index: any) => (
                  <div key={index}>
                    <Image
                      key={index}
                      src={`/productos/${image}`}
                      alt={image.altText || `Image ${index + 1}`}
                      quality={100}
                      width={402}
                      height={700}
                      style={imageStyle}
                      priority
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
                      <a className="font-Poly flex border text-[#403834]   border-[#403834] rounded-[4px] text-sm  w-auto h-6 justify-center items-center px-1">
                        {color}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
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
            <Link
              href={`/catalogo/${nextProductMainCategoryName}/${nextProductId}`}
            >
              <div className="absolute h-full w-[48px] right-0 hover:bg-[#403834] hover:bg-opacity-35  z-10 hover:cursor-pointer border-l border-[#403834] bg-pinkybg opacity-60 border-opacity-20">
                <svg
                  className="stroke-[#403834] h-[32px] w-[32px] absolute top-1/2 right-2"
                  aria-hidden="true"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </ConfigProvider>
  );
}
