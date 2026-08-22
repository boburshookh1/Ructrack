import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./headSwiper.css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          className="slide-bg"
          style={{ backgroundImage: `url(/headerinfo2.jpg)` }}
        >
          <div className="hero__title">
            <h1>
              АТЗ Рустрак включены в реестр российской промышленной продукции
            </h1>
            <p>Теперь доступны для приобретения по 44 ФЗ</p>
            <button>Заказать звонок</button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg"
          style={{ backgroundImage: `url(/headerinfo3.jpg)` }}
        >
          <div className="hero__title">
            <h1>В наличии шторные фургоны КАМАЗ 4308</h1>
            <p>
              Размеры надстройки 6200х2550х2850 мм. <br />
              Цена 5 500 000 руб.{" "}
            </p>
            <button>Заказать звонок</button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg"
          style={{ backgroundImage: `url(/headerinfo5.jpg)` }}
        >
          <div className="hero__title">
            <h1>ООО «РусТрак»</h1>
            <p>
              Производство и поставка специализированной техники и
              спецтранспорта
            </p>
            <button>Открыть каталог</button>
            <button>Заказать звонок</button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg"
          style={{ backgroundImage: `url(/headerinfo6.jpg)` }}
        >
          <div className="hero__title">
            <h1>Краны манипуляторы на базе MCV/HCV грузовиков</h1>
            <p>
              Производство автомобилей с крано-манипуляторными установками.
              Использование противосдвиговых пластин, установка блока
              распределителя управления задними опорами, открытый профиль
              HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет
              крана.
            </p>
            <button>Открыть каталог</button>
            <button>Заказать звонок</button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg"
          style={{ backgroundImage: `url(/headerinfo1.jpg)` }}
        >
          <div className="hero__title">
            <h1>Автотопливозаправщики на базе MCV/HCV грузовиков</h1>
            <p>
              Производство и поставка автотопливозаправщиков объёмом 8 и 6
              м.куб. Алюминиевые коммуникации, композитные напорно-всасывающие
              рукава, производительный узел выдачи топлива.{" "}
            </p>
            <button>Открыть каталог</button>
            <button>Заказать звонок</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
