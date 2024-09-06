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
  const nextProductName = data.nextproduct.name;
  let nextProductTela = data.nextproduct.tela[0];
  const nextProductMainCategoryName = data.nextproduct.mainCategoryName;
  const previousProductId = data.previousproduct.id;
  const previousProductName = data.previousproduct.name;
  let previousProductTela = data.previousproduct.tela[0];
  const previousProductMainCategoryName = data.previousproduct.mainCategoryName;
  console.log(data.previousproduct.id, "preid");

  const imageStyle = {
    height: 700,
    width: 444,
    alignText: "center",
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotHeight: 8,
            dotWidth: 48,
            arrowSize: 32,
            colorBgContainer: "#FFF2F2",
          },
        },
      }}
    >
      <main className="pt-12 h-auto w-screen lg:h-full flex items-start justify-center  backdrop-blur-sm ">
        {arrayData.map((element: any) => (
          <div className="flex flex-col relative bg-bgHome items-stretch bg-cover border border-[#403834]/20 shadow-product-shadow h-full w-screen lg:h-[86%]  lg:w-[88%] laptop:w-[70%] desktopxl:w-[50%] ">
            <div className="lg:flex lg:flex-row w-full">
              <Link
                href={`/catalogo/${previousProductMainCategoryName}/${previousProductId}`}
                className="w-full "
              >
                <div className="absolute bottom-0 flex lg:flex-row lg:items-center  w-full hover:bg-[#403834] hover:bg-opacity-35  z-10 hover:cursor-pointer border-t lg:border-b lg:border-r lg:border-t-0 border-[#403834] bg-pinkybg opacity-60 border-opacity-20 lg:static lg:bottom-auto ">
                  <svg
                    className="stroke-[#403834] h-[32px] w-[32px]"
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
                  {previousProductTela == undefined ? (
                    <h2 className="productline font-Poly text-lg text-[#403834]">
                      {` ${previousProductName}`}
                    </h2>
                  ) : (
                    <div className=" flex flex-row items-center gap-2">
                      <h2 className="productline font-Poly text-lg text-[#403834]">
                        {` ${previousProductName}  `}
                      </h2>
                      <h2 className="font-Poly flex border text-[#403834] border-[#403834] rounded-[4px] px-1 text-md  ">{`${previousProductTela}`}</h2>
                    </div>
                  )}
                </div>
              </Link>
              <Link
                href={`/catalogo/${nextProductMainCategoryName}/${nextProductId}`}
                className="w-full"
              >
                <div className="flex flex-row-reverse items-center w-full right-0 hover:bg-[#403834] hover:bg-opacity-35  z-10 hover:cursor-pointer border-b border-l border-[#403834] bg-pinkybg opacity-60 border-opacity-20">
                  <svg
                    className="stroke-[#403834] h-[32px] w-[32px]"
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

                  {nextProductTela == undefined ? (
                    <h2 className="productline font-Poly text-lg text-[#403834]">
                      {` ${nextProductName}`}
                    </h2>
                  ) : (
                    <div className=" flex flex-row items-center gap-2">
                      <h2 className="font-Poly flex border text-[#403834] border-[#403834] rounded-[4px] px-1 text-md  ">{`${nextProductTela}`}</h2>
                      <h2 className="productline font-Poly text-lg text-[#403834]">
                        {` ${nextProductName}  `}
                      </h2>
                    </div>
                  )}
                </div>
              </Link>
            </div>
            <div
              key={element.id}
              className=" relative flex flex-col gap-4 lg:flex-row py-6 items-center justify-center bg-pinkybg  bg-opacity-30 w-full h-full"
            >
              

              <Carousel autoplay autoplaySpeed={3000} className="w-screen h-[540px] tablet:h-[840px] lg:w-[440px] lg:h-[600px] pb-4 overflow-hidden">
                {element.images.map((image: any, index: any) => (
                  <div key={index} className="" >
                    <Image
                      key={index}
                      src={`/productos/${image}`}
                      alt={image.altText || `Image ${index + 1}`}
                      width={0}
                      height={0}
                      quality={100}
                      objectFit="contain"
                      className="w-full object-contain"
                      sizes="100%, 100%"
                      priority
                      />
                  </div>
                ))}
              </Carousel>
              
          
              <div className="pl-4 flex flex-col items-start justify-center relative gap-12 pb-4">
                <div className="flex flex-col gap-2 items-start">
                  <h2 className="text-6xl font-Poly text-[#403834]">
                    {element.price}
                  </h2>
                  <h1 className="text-3xl font-Poly text-[#403834] ">
                    {element.name}
                  </h1>
                  <p className="pt-4 font-PriceCard w-full text-lg leading-[22px] text-balance whitespace-normal text-[#403834]">
                    {element.description}
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-PriceCard">Tallas disponibles</h2>
                    <div className="flex flex-row gap-2 ">
                      {element.size.map((size: any) => (
                        <a className="font-Poly flex border text-[#403834] border-[#403834] rounded-[4px] text-sm  w-8 h-6 justify-center items-center px-1">
                          {size}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-PriceCard">Colores disponibles</h2>
                    <div className="flex flex-row gap-2 ">
                      {element.color.map((color: any) => (
                        <a className="font-Poly flex border text-[#403834]   border-[#403834] rounded-[4px] text-sm  w-auto h-6 justify-center items-center px-1">
                          {color}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-PriceCard">Telas disponibles</h2>
                    <div className="flex flex-row gap-2 ">
                      {element.tela.map((tela: any) => (
                        <a className="font-Poly flex border text-[#403834] border-[#403834] rounded-[4px] text-sm  w-20 h-6 justify-center items-center px-1">
                          {tela}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <ButtonCompraWP />
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </ConfigProvider>
  );
}
