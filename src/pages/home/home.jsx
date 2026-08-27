import React from "react";
import "./home.css";
import HeadSwiper from "../../components/headswiper/headSwiper.jsx";
import NdSwiper from "../../components/ndSwiper/ndSwiper.jsx";

const Home = () => {
  return (
    <>
      <HeadSwiper />
      <NdSwiper />


      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-16 max-w-[1370px] mx-auto">

        <div className="w-full md:w-[40%] max-w-lg">
          <h1 className="font-['Fira_Sans'] font-medium text-[42px] leading-[120%] mb-6 whitespace-nowrap">
            О компании <span className="text-yellow-400">Рустрак</span>
          </h1>

          <p className="font-['Fira_Sans'] font-normal text-[18px] leading-[150%] text-black max-w-[536px] mb-5">
            Наша компания занимает лидирующие позиции на рынке спецтехники:
            каждый день мы вносим свой вклад в развитие отечественного автопрома
            и укрепление российской экономики.
          </p>

          <p className="font-['Fira_Sans'] font-normal text-[18px] leading-[150%] text-black max-w-[536px] mb-8">
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
            src="/main__text__img.png"
            alt="Рустрак спецтехника"
            className="w-full max-w-[850px] h-auto scale-110"
          />
        </div>

      </div>
      {/* Statistic */}
      <div className="w-full bg-[#FEC80B]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-0 py-16 md:py-15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

            <div className="statistic1 min-w-0 max-w-[312px]">
              <h1 className="font-['Fira_Sans'] font-medium leading-[95%] tracking-[0%] text-black text-[100px]">
                17
              </h1>
              <h2 className="font-['Fira_Sans'] font-normal leading-[110%] tracking-[0%] text-black text-[32px] mb-5">
                лет
              </h2>
              <p className="font-['Fira_Sans'] font-normal text-[17px] leading-[155%] tracking-[0%] text-black max-w-[340px]">
                За 5 лет своей деятельности ООО «РусТрак» превратилось в крупное предприятие по производству и продаже специальной техники
              </p>
            </div>

            <div className="statistic2 min-w-0 max-w-[312px]">
              <h1 className="font-['Fira_Sans'] font-medium leading-[95%] tracking-[0%] text-black text-[100px]">
                85
              </h1>
              <h2 className="font-['Fira_Sans'] font-normal leading-[110%] tracking-[0%] text-black text-[32px] mb-5">
                субъектов
              </h2>
              <p className="font-['Fira_Sans'] font-normal text-[17px] leading-[155%] tracking-[0%] text-black max-w-[340px]">
                Мы обеспечили 95 субъектов РФ надежной техникой коммерческого и специализированного предназначения
              </p>
            </div>

            <div className="statistic3 min-w-0 max-w-[312px]">
              <h1 className="font-['Fira_Sans'] font-medium leading-[95%] tracking-[0%] text-black text-[100px]">
                11
              </h1>
              <h2 className="font-['Fira_Sans'] font-normal leading-[110%] tracking-[0%] text-black text-[32px] mb-5">
                концернов
              </h2>
              <p className="font-['Fira_Sans'] font-normal text-[17px] leading-[155%] tracking-[0%] text-black max-w-[340px]">
                ООО «РусТрак» дорожит доверием автопрома, которое подтверждено дилерскими полномочиями от 10 лидирующих концернов
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );

}

export default Home;
