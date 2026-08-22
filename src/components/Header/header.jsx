import { useState } from "react";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header>
      <div className="header_top container flex justify-between max-w-330 mx-auto mt-2.5">
        <div className="header_logo flex justify-between  max-w-106 max-h-16 gap-2.5 items-center mt-1.5">
          <div className="img max-w-120">
            <img src="/logo.png" alt="" />
          </div>
          <span className="block w-0.5 h-7 bg-[#FEC80B]"></span>
          <div className="text max-w-[1667px] max-h-7.5 font-normal font-primary  text-4.5 leading-[110%]">
            <p>производство и продажа автоспецтехники</p>
          </div>
        </div>
        <div className="header_phone flex">
          <div className="phone_text flex flex-col items-end mr-15.25 mt-2.5">
            <h6 className="font-normal font-primary leading-[130%] text-[16px] text-[#00000 0] max-w-26.75">
              Время работы
            </h6>
            <p className="text-[#A1A1A1] font-normal font-primary  text-[15px] leading-[110%] ">
              г. Нижний Новгород ул. Торфяная, 35
            </p>
          </div>
          <div className="header_phonet flex justify-between mt-4">
            <div className="phonet_text flex flex-col items-end mr-6">
              <p className="text-[#A1A1A1] font-n ormal font-primary  text-[15px] leading-[110%]">
                Для регионов: 8 (800) 77-77-210
              </p>
              <p className="text-[#A1A1A1] font-normal font-primary  text-[15px] leading-[110%]">
                Нижний Новгород: 8 (831) 225-00-55
              </p>
            </div>
            <div className="header_phoned_logo w-12 h-12 bg-[#FEC80B] rounded-full flex items-center justify-center mt-[-6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-[#FEC80B] mt-2.25" />

      <div className="header__bottom mt-3 relative max-w-330 mx-auto">
        <div className="container flex items-center justify-between">
          <div className="menu__list flex items-center gap-7.5">
            <button
              onClick={() => toggleMenu("catalog")}
              className="catalog_btn w-34 h-10 flex items-center justify-center gap-2 bg-[#FEC80B] rounded-[5px] px-4 py-2.5 font-normal font-primary text-lg"
            >
              <span className="relative w-5 h-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    activeMenu === "catalog"
                      ? "opacity-0 rotate-90 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    activeMenu === "catalog"
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75"
                  }`}
                >
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  />
                </svg>
              </span>
              Каталог
            </button>

            <ul className="nav_list flex items-center gap-6 font-normal font-primary text-[18px]">
              <li
                onClick={() => toggleMenu("about")}
                className="flex items-center gap-0 cursor-pointer -mr-2.5"
              >
                О нас
                <svg
                  className={`text-[#FEC80B] w-8 h-8 transition-transform duration-200 ${
                    activeMenu === "about" ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="m7 10l5 5l5-5z" />
                </svg>
              </li>

              <li
                onClick={() => toggleMenu("media")}
                className="flex items-center gap-0 cursor-pointer -mr-2.5"
              >
                Медиа
                <svg
                  className={`text-[#FEC80B] w-8 h-8 transition-transform duration-200 ${
                    activeMenu === "media" ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="m7 10l5 5l5-5z" />
                </svg>
              </li>

              <li className="cursor-pointer">Сервис</li>
              <li className="cursor-pointer">Ремонт</li>
              <li className="cursor-pointer">Новости</li>
              <li className="cursor-pointer">Контакты</li>
            </ul>
          </div>

          <div className="search__list flex items-center gap-5">
            <div className="search_input relative w-70">
              <input
                type="text"
                placeholder="Поиск"
                className="w-full max-w-[512px] h-[38px] border border-[#FEC80B] rounded-[40px] py-2.5 px-4 pr-10 text-[18px] font-normal font-primary outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1A1A1] pointer-events-none"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                />
              </svg>
            </div>

            <button className="cart_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path d="M0 0h16v16H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4"
                />
              </svg>
            </button>

            <button className="wishlist_btn">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z"
                />
              </svg>
            </button>
          </div>
        </div>

        {activeMenu && (
          <div className="dropdown_panel absolute left-0 top-full w-full h-[556px] bg-[#F5F5F5] border-t border-[#FEC80B] py-10 z-50">
            <div className="container grid grid-cols-4 gap-10">
              <div className="dropdown_col">
                <h4 className="font-bold text-lg mb-4">Категории</h4>
                <ul className="flex flex-col gap-3 text-[15px]">
                  <li className="cursor-pointer">Шторные автомобили</li>
                  <li className="cursor-pointer">Краны-манипуляторы</li>
                  <li className="cursor-pointer">Автотопливозаправщики</li>
                  <li className="cursor-pointer">Автогидроподъёмники</li>
                  <li className="cursor-pointer">Автоцистерны</li>
                  <li className="cursor-pointer">Автоэвакуаторы</li>
                  <li className="cursor-pointer">Бортовые автомобили</li>
                  <li className="cursor-pointer">Изотермические фургоны</li>
                  <li className="cursor-pointer">Контейнеровозы</li>
                  <li className="cursor-pointer">Крюковые погрузчики</li>
                  <li className="cursor-pointer">Самосвалы</li>
                  <li className="cursor-pointer">
                    Автомобили ДОПОГ категория EXII
                  </li>
                </ul>
              </div>

              <div className="dropdown_col">
                <h4 className="font-bold text-lg mb-4">О нас</h4>
                <ul className="flex flex-col gap-3 text-[15px]">
                  <li className="cursor-pointer">О компании ООО «Рустрак»</li>
                  <li className="cursor-pointer">Новости</li>
                  <li className="cursor-pointer">Наши партнёры</li>
                  <li className="cursor-pointer">Производство</li>
                  <li className="cursor-pointer">Поставщикам и партнёрам</li>
                  <li className="cursor-pointer">Отзывы</li>
                  <li className="cursor-pointer">Сертификаты</li>
                  <li className="cursor-pointer">Вакансии</li>
                  <li className="cursor-pointer">Кредит и лизинг</li>
                </ul>
              </div>

              <div className="dropdown_col">
                <h4 className="font-bold text-lg mb-4">Медиа</h4>
                <ul className="flex flex-col gap-3 text-[15px]">
                  <li className="cursor-pointer">Фотогалерея</li>
                  <li className="cursor-pointer">Видео</li>
                  <li className="cursor-pointer">Рекламные материалы</li>
                  <li className="cursor-pointer">Информационные материалы</li>
                </ul>
              </div>

              <div className="dropdown_col">
                <ul className="flex flex-col gap-6 text-[15px] font-bold">
                  <li className="cursor-pointer">Сервис</li>
                  <li className="cursor-pointer">Ремонт</li>
                  <li className="cursor-pointer">Новости</li>
                  <li className="cursor-pointer">Контакты</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
