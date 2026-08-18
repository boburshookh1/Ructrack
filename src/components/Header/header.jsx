import React, { useState } from "react";
import "./header.css";

function Header() {
  const [workTimeOpen, setWorkTimeOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <a href="/" className="header__logo">
            <img src="/logo.png" alt="Рустрак" className="header__logo-img" />
            <div className="header__logo-text">
              <span className="header__logo-name">РУСТРАК</span>
              <span className="header__logo-divider"></span>
              <span className="header__logo-desc">
                производство и продажа <br /> автоспецтехники
              </span>
            </div>
          </a>

          <div className="header__badge">
            <img
              src="/icons/reestr-icon.svg"
              alt="В реестре"
              className="header__badge-icon"
            />
            <span className="header__badge-text">
              В РЕЕСТРЕ <br /> РОССИЙСКОЙ <br /> ПРОДУКЦИИ
            </span>
          </div>
        </div>

        <div className="header__right">
          <div className="header__worktime">
            <button
              className="header__worktime-btn"
              onClick={() => setWorkTimeOpen(!workTimeOpen)}
            >
              Время работы <span className="arrow">▾</span>
            </button>
            {workTimeOpen && (
              <div className="header__worktime-dropdown">
                <p>Пн–Пт: 8:00–17:00</p>
                <p>Сб–Вс: выходной</p>
              </div>
            )}
            <p className="header__address">г. Нижний Новгород ул. Торфяная, 35</p>
          </div>

          <div className="header__phones">
            <p>Для регионов: <a href="tel:88005110525">8 (800)-511-05-25</a></p>
            <p>Нижний Новгород: <a href="tel:88312352616">8 (831) 235-26-16</a></p>
          </div>

          <a href="tel:88005110525" className="header__call-btn">

          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
