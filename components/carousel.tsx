import { Carousel, ConfigProvider } from "antd";
import Image from "next/image";
import banner1 from "../public/banner1.png";
import banner2 from "../public/banner2.png";
import banner3 from "../public/banner3.png";
export default function CarouselComponent() {
  return (
    <ConfigProvider theme={{
        components: {
          Carousel: {
            dotHeight: 6,
            dotWidth: 32,
            arrowSize: 32,
          },
        },
      }}>
      <Carousel arrows autoplay autoplaySpeed={2000}>
        <div>
          <Image src={banner1} alt="Envío gratis por $250.000" sizes="1980px" quality={100} />
        </div>
        <div>
          <Image src={banner2} alt="Envío gratis por $250.000" sizes="1980px" quality={100}/>
        </div>
        <div>
          <Image src={banner3} alt="Envío gratis por $250.000" sizes="1980px" quality={100} />
        </div>
      </Carousel>
    </ConfigProvider>
  );
}
