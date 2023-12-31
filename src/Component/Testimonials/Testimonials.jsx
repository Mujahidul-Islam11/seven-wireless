import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="my-16 md:px-20">
      <h3 className="text-2xl font-semibold text-center mb-6 text-black">
        What experts are saying
      </h3>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="items-center py-16">
          <img
            className="w-[160px] flex justify-center mx-auto rounded-full"
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/tt008.jpg"
            alt=""
          />
          <h3 className="text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque ante <br /> sem, quis ultricies mi volutpat id. Phasellus
            eleifend congue sem, ac <br /> condimentum nibh molestie sed.
          </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="items-center py-16">
          <img
            className="w-[160px] flex justify-center mx-auto rounded-full"
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/tt001.jpg"
            alt=""
          />
          <h3 className="text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque ante <br /> sem, quis ultricies mi volutpat id. Phasellus
            eleifend congue sem, ac <br /> condimentum nibh molestie sed.
          </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="items-center py-16">
          <img
            className="w-[160px] flex justify-center mx-auto rounded-full"
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/tt002.jpg"
            alt=""
          /> 
          <h3 className="text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque ante <br /> sem, quis ultricies mi volutpat id. Phasellus
            eleifend congue sem, ac <br /> condimentum nibh molestie sed.
          </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
