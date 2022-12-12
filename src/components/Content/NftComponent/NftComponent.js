import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import nftData from "../../../data/nft";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, EffectCoverflow, Pagination, Keyboard } from "swiper";

const NftComponent = () => {
  return (
    <Swiper
      modules={[Navigation, EffectCoverflow, Pagination, Keyboard]}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 20,
        stretch: 5,
        depth: 180,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      pagination={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      onSlideChange={console.log("change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="nft-swiper"
    >
      {nftData.map((data) => (
        <SwiperSlide className="nft-swiper-wrapper">
          <div className="nft-card nft-swiper-slide">
            <div className="nft-card-image">
              <img src={data.image} alt="image" />
            </div>
            <div className="nft-card-content">
              <span class="nft-card-title">{data.title}</span>
              <span class="nft-card-name">{data.name}</span>
              <p class="nft-card-text">{data.text}</p>
              <button class="nft-card-btn">{data.btn}</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </Swiper>
  );
};

export default NftComponent;
