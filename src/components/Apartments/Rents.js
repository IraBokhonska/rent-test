import React from "react";

import rent1 from "../../assets/images/rent-1.jpg";
import rent2 from "../../assets/images/rent-2.jpg";
import rent3 from "../../assets/images/rent-3.jpg";
import rent4 from "../../assets/images/rent-4.jpg";
import rent5 from "../../assets/images/rent-5.jpg";
import rent6 from "../../assets/images/rent-6.jpg";

export const rents = [
  {
    id: 1,
    title: "Двокімнатна квартира в центрі",
    image: rent1,
    city: "Київ",
    area: 80,
    rooms: "двокімнатна",
    price: 15000,
    description:
      "Сучасна двокімнатна квартира з усіма зручностями в історичному центрі міста. Є Wi-Fi, парковка, кондиціонер",
    lat: 50.450001,
    lng: 30.523333,
  },
  {
    id: 2,
    title: "Однокімнатна квартира-студія",
    image: rent2,
    city: "Львів",
    area: 60,
    rooms: "однокімнатна",
    price: 10000,
    description:
      "Затишна студія з чудовим видом на місто та зручним розташуванням. Є Wi-Fi, балкон, кабельне ТБ",
    lat: 49.8397,
    lng: 24.0297,
  },
  {
    id: 3,
    title: "Трикімнатна квартира біля парку",
    image: rent3,
    city: "Харків",
    area: 100,
    rooms: "трикімнатна",
    price: 15000,
    description:
      "Велика квартира поруч з парком, ідеальна для сім'ї. Є Wi-Fi, гараж, кабельне ТБ ",
    lat: 49.9935,
    lng: 36.2304,
  },
  {
    id: 4,
    title: "Однокімнатна компактна квартира",
    image: rent4,
    city: "Одеса",
    area: 45,
    rooms: "однокімнатна",
    price: 7500,
    description:
      "Зручна квартира для одного чоловіка або жінки, недалеко від центру. Є Wi-Fi, парковка, новий ремонт",
    lat: 46.4694,
    lng: 30.7409,
  },
  {
    id: 5,
    title: "Чотирикімнатна елітна квартира з терасою",
    image: rent5,
    city: "Дніпро",
    area: 120,
    rooms: "чотирикімнатна",
    price: 25000,
    description:
      "Чотирикімнатна квартира з великою терасою і видом на місто.Є Wi-Fi, гардеробна, камін",
    lat: 48.455,
    lng: 35.0037,
  },
  {
    id: 6,
    title: "Двокімнатна квартира в центрі",
    image: rent6,
    city: "Луцьк",
    area: 70,
    rooms: "двокімнатна",
    price: 15000,
    description:
      "Нова квартира з сучасним дизайном, готова до вас!Є Wi-Fi, підігрів підлоги, ванна з гідромасажем",
    lat: 50.7472,
    lng: 25.3254,
  },
];
