export async function generateStaticParams() {
  const products = await fetch("http://localhost:3000/api/products").then(
    (res) => res.json()
  );
  const resArray = Object.values(products);

  return [
    resArray.map((element: any) => ({
      categoryName: products.mainCategoryName,
      productID: products.id,
    })),
  ];
}
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
      <main className="pt-12 h-[980px] flex items-start justify-center ">
        {arrayData.map((element: any) => (
          <div key={element.id} className="flex flex-row" >
            <Carousel autoplay autoplaySpeed={2200} className="w-[402px] flex">
              {element.images.map((image: any, index: any) => (
                <div key={index}>
                  <Image
                    key={index}
                    src={`/productos/${image}`}
                    alt={image.altText || `Image ${index + 1}`}
                    quality={100}
                    width={400}
                    height={700}
                  />
                </div>
              ))}
            </Carousel>
            <div className="flex flex-col">
                <h1>{element.price}</h1>
            </div>
          </div>
        ))}
      </main>
    </ConfigProvider>
  );
}
