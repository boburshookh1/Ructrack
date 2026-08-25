import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./headSwiper.css";

export default function HeadSwiper() {
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
          className="slide-bg relative"
          style={{ backgroundImage: `url(/headerinfo2.jpg)` }}
        >
          <div className="absolute inset-0"></div>
          <div className="hero__title relative z-10 flex flex-col gap-4 max-w-xl px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              АТЗ Рустрак включены в реестр российской промышленной продукции
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Теперь доступны для приобретения по 44 ФЗ
            </p>
            <button className="border-2 rounded-[4px] mb-10  border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              Заказать звонок
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg relative"
          style={{ backgroundImage: `url(/headerinfo3.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="hero__title relative z-10 flex flex-col gap-4 max-w-xl px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              В наличии шторные фургоны КАМАЗ 4308
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Размеры надстройки 6200х2550х2850 мм. <br />
              Цена 5 500 000 руб.
            </p>
            <button className="border-2 rounded-[4px] border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              Заказать звонок
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg relative"
          style={{ backgroundImage: `url(/headerinfo5.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="hero__title relative z-10 flex flex-col gap-4 max-w-xl px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              ООО «РусТрак»
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Производство и поставка специализированной техники и
              спецтранспорта
            </p>
            <div className="swiperHead-btn flex gap-4">
              <button className="border-2 rounded-[4px] border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Открыть каталог
              </button>
              <button className="border-2 rounded-[4px] border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Заказать звонок
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg relative"
          style={{ backgroundImage: `url(/headerinfo6.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="hero__title relative z-10 flex flex-col gap-4 max-w-xl px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Краны манипуляторы на базе MCV/HCV грузовиков
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Производство автомобилей с крано-манипуляторными установками.
              Использование противосдвиговых пластин, установка блока
              распределителя управления задними опорами, открытый профиль
              HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет
              крана.
            </p>
            <div className="flex gap-4">
              <button className="border-2 rounded-[4px] border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Открыть каталог
              </button>
              <button className="border-2 rounded-[4px] border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Заказать звонок
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="slide-bg relative"
          style={{ backgroundImage: `url(/headerinfo1.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          <div className="hero__title relative z-10 flex flex-col gap-4 max-w-xl px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Автотопливозаправщики на базе MCV/HCV грузовиков
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Производство и поставка автотопливозаправщиков объёмом 8 и 6
              м.куб. Алюминиевые коммуникации, композитные напорно-всасывающие
              рукава, производительный узел выдачи топлива.
            </p>
            <div className="flex gap-4">
              <button className="border-2 rounded-[4px] border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Открыть каталог
              </button>
              <button className="border-2 rounded-[4px] border-yellow-400 text-white px-6 py-3 w-fit font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Заказать звонок
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
