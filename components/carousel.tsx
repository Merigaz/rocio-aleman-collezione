import { Carousel, ConfigProvider } from "antd";
import Image from "next/image";
import banner1 from "../public/banner1.png";
import banner2 from "../public/banner2.png";
import banner3 from "../public/banner3.png";
import Link from "next/link";
export default function CarouselComponent() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotHeight: 14,
            dotWidth: 58,
            arrowSize: 32,
            colorBgContainer: "#FFF2F2",
          },
        },
      }}
    >
      <Carousel
        autoplay
        autoplaySpeed={2000}
        className="overflow-visible"
      >
        <div>
          <Image
            src={banner1}
            alt="Envío gratis por $250.000"
            width={0}
            height={0}
            quality={100}
            objectFit="contain"
            className="carousel-img"
            sizes="100%, 100%"
          />
        </div>
        <div>
          <Image
            src={banner2}
            alt="Envío gratis por $250.000"
            width={0}
            height={0}
            quality={100}
            objectFit="contain"
            sizes="100%, 100%"
            className="carousel-img"
          />
        </div>
        <div className="relative">
          <Link
            href={"/catalogo"}
            className="text-[#403834] border active:animation-btn-cta border-opacity-30 border-[#403834] active:shadow-none flex tracking-wide items-center justify-center absolute bottom-16  left-1/2 transform -translate-x-1/2 font-ButtonBuy font-normal shadow-card-shadow text-2xl bg-white tablet:w-[147px] tablet:h-[36px] tablet:text-base tablet:bottom-8 w-[260px] h-[76px] lg:text-2xl lg:w-64 lg:h-12"
          >
            ¡COMPRA AHORA!
          </Link>
          <Image
            src={banner3}
            alt="Envío gratis por $250.000"
            width={0}
            height={0}
            quality={100}
            objectFit="contain"
            sizes="100%, 100%"
            className="carousel-img"
          />
        </div>
      </Carousel>
    </ConfigProvider>
  );
}
