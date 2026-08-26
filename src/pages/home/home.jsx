import React from "react";
import "./home.css";
import HeadSwiper from "../../components/headswiper/headSwiper.jsx";

const Home = () => {
  return (
    <>
      <HeadSwiper />
      {/* Category Swiper  bo'lishi kerak */}


      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-16 max-w-[1320px] mx-auto">

        <div className="w-full md:w-[40%] max-w-lg">
          <h1 className="font-['Fira_Sans'] font-medium text-[42px] leading-[120%] mb-6 whitespace-nowrap">
            О компании <span className="text-yellow-400">Рустрак</span>
          </h1>

          <p className="font-['Fira_Sans'] font-normal text-[18px] leading-[150%] text-black w-[536px] max-w-none mb-5">
            Наша компания занимает лидирующие позиции на рынке спецтехники:
            каждый день мы вносим свой вклад в развитие отечественного автопрома
            и укрепление российской экономики.
          </p>

          <p className="font-['Fira_Sans'] font-normal text-[18px] leading-[150%] text-black w-[536px] max-w-none mb-8">
            «РусТрак» является ведущим производителем коммерческого транспорта
            и специализированной техники. Наша работа признана и высоко оценена
            крупнейшими отечественными корпорациями и государственными структурами:
            мы поставляем спецтехнику для таких корпораций, как Газпром, Росатом,
            Россети, РСК «МИГ» и других.
          </p>

          <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-semibold rounded-lg px-7 py-3.5">
            Подробнее <span>→</span>
          </button>
        </div>

        <div className="w-full md:w-[55%] flex justify-end">
          <img
            src="../../public/main__text__img.png"
            alt="Рустрак спецтехника"
            className="w-full max-w-[850px] h-auto scale-110"
          />
        </div>

      </div>


      <div class="statistic bg-[#FFC500] py-16 md:py-20 px-6 md:px-16">
        <div class="container max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          <div class="statistic1 min-w-0">
            <h1 class="font-['Fira_Sans'] font-medium leading-[0.95] tracking-[0%] text-black text-[100px]">
              17
            </h1>
            <h2 class="font-['Fira_Sans'] font-normal leading-[1.1] tracking-[0%] text-black text-[32px] mb-5">
              лет
            </h2>
            <p class="font-['Fira_Sans'] font-normal text-[17px] leading-[1.55] tracking-[0%] text-black max-w-[340px]">
              За 5 лет своей деятельности ООО «РусТрак» превратилось в крупное предприятие по производству и продаже специальной техники
            </p>
          </div>

          <div class="statistic2 min-w-0">
            <h1 class="font-['Fira_Sans'] font-medium leading-[0.95] tracking-[0%] text-black text-[100px]">
              85
            </h1>
            <h2 class="font-['Fira_Sans'] font-normal leading-[1.1] tracking-[0%] text-black  text-[32px] mb-5">
              субъектов
            </h2>
            <p class="font-['Fira_Sans'] font-normal text-[17px] leading-[1.55] tracking-[0%] text-black max-w-[340px]">
              Мы обеспечили 95 субъектов РФ надежной техникой коммерческого и специализированного предназначения
            </p>
          </div>

          <div class="statistic3 min-w-0">
            <h1 class="font-['Fira_Sans'] font-medium leading-[0.95] tracking-[0%] text-black text-[100px]">
              11
            </h1>
            <h2 class="font-['Fira_Sans'] font-normal leading-[1.1] tracking-[0%] text-black text-[32px] mb-5">
              концернов
            </h2>
            <p class="font-['Fira_Sans'] font-normal text-[17px] leading-[1.55] tracking-[0%] text-black max-w-[340px]">
              ООО «РусТрак» дорожит доверием автопрома, которое подтверждено дилерскими полномочиями от 10 лидирующих концернов
            </p>
          </div>

        </div>
      </div>

    </>
  );

}

export default Home;
