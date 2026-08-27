import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './ndSwiper.css';

import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className="categoriesWrap max-w-[1370px]">
      <div className="categoriesHeader mt-20">
        <h2>Категории</h2>
      </div>

      <Swiper
        spaceBetween={24}
        loop={true}
        observer={true}
        observeParents={true}
        navigation={true}
        modules={[Navigation]}
        className="secondSwiper"
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}

      >
        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Самосвалы</h3>
            <p>12 моделей</p>
          </div>
          <div className="catCardImg">
            <img src="../public/samosval.png" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Автомобили ДОПОГ категория EXII</h3>
            <p>4 модели</p>
          </div>
          <div className="catCardImg">
            <img src="../public/dopog.webp" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Шторные автомобили</h3>
            <p>30 моделей</p>
          </div>
          <div className="catCardImg">
            <img src="../public/model30.webp" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Краны-манипуляторы</h3>
            <p>79 моделей</p>
          </div>
          <div className="catCardImg">
            <img src="../public/model79.webp" alt="Kran" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Автотопливозаправщики</h3>
            <p>26 моделей</p>
          </div>
          <div className="catCardImg">
            <img src="../public/model26.png" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Автогидроподъёмники</h3>
            <p>4 модели</p>
          </div>
          <div className="catCardImg">
            <img src="../public/avtgrdro4.webp" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Автоцистерны</h3>
            <p>10 моделей</p>
          </div>
          <div className="catCardImg">
            <img src="../public/sisterny10.webp" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Изотермические фургоны</h3>
            <p>16 моделей</p>
          </div>
          <div className="catCardImg">
            <img src="../public/frgon16.webp" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Контейнеровозы</h3>
            <p>2 модели</p>
          </div>
          <div className="catCardImg">
            <img src="../public/kontez2.png" alt="Auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSwiper-slide">
          <div className="catCardText">
            <h3>Крюковые погрузчики</h3>
            <p>3 модели</p>
          </div>
          <div className="catCardImg">
            <img src="../public/kkryuk2.webp" alt="Auto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div >
  );
}

