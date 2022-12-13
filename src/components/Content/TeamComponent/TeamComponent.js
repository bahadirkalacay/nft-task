import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, EffectCoverflow, Pagination, Keyboard } from "swiper";
import teamData from "./../../../data/team";
import Tilt from "react-parallax-tilt";

const TeamComponent = () => {
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
      className="team-swiper"
    >
      {teamData.map((data) => (
        <SwiperSlide className="team-swiper-wrapper">
          <div className="team-card team-swiper-slide">
            <div className="team-card-image">
              <Tilt>
                <div className="rgb">
                  <img src={data.image} alt="image" />
                </div>
              </Tilt>
            </div>
            <div className="team-card-content">
              <span class="team-card-title">{data.title}</span>
              <span class="team-card-name">{data.name}</span>
              <p class="team-card-text">{data.text}</p>
              <button class="team-card-btn">{data.btn}</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </Swiper>
  );
};

export default TeamComponent;
