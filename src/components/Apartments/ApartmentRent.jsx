import React from "react";
import { rents } from "./Rents";

export const ApartmentRent = () => {
  return (
    <section className="apartment__list">
      {rents.map((rent) => (
        <article key={rent.id} className="apartment__item">
          <h2 className="apartment__title">{rent.title}</h2>
          <div className="apartment__image">
            <img src={rent.image} alt="img" />
          </div>
          <div className="apartment__content">
            <div className="apartment__city">{rent.city}</div>
            <div className="apartment__rooms">{rent.rooms} квартира</div>
            <div className="apartment__price">Ціна {rent.price} грн</div>
            <p className="apartment__description">{rent.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
