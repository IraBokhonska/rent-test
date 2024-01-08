import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/form.scss";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="form">
      <h2 className="form__title">Внесіть дані для подачі оголошення</h2>
      <div className="divider"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="form__block">
        <input
          {...register("title", {
            required: "Поле має бути обов'язково заповнене!",
            maxLength: {
              value: 100,
              message: "Ви можете ввести не більше 100 символів!",
            },
          })}
          placeholder="Внесіть короткий запис, щодо Вашого оголошення"
          className="form__item"
        />
        <div className="form__error">
          {errors?.title && <p>{errors?.title?.message || "Помилка!"}</p>}
        </div>
        <input
          {...register("city", {
            required: "Поле має бути обов'язково заповнене!",
          })}
          placeholder="Вкажіть назву міста, села, селища"
          className="form__item"
        />
        <div className="form__error">
          {errors?.city && <p>{errors?.city?.message || "Помилка!"}</p>}
        </div>
        <input
          {...register("squareАrea", {
            required: "Поле має бути обов'язково заповнене!",
          })}
          placeholder="Вкажіть площу квартири, будинку"
          className="form__item"
          type="number"
        />
        <div className="form__error">
          {errors?.squareАrea && (
            <p>{errors?.squareАrea?.message || "Помилка!"}</p>
          )}
        </div>
        <input
          {...register("price", {
            required: "Поле має бути обов'язково заповнене!",
          })}
          placeholder="Вкажіть ціну в гривнях"
          className="form__item"
          type="number"
        />
        <div className="form__error">
          {errors?.squareАrea && (
            <p>{errors?.squareАrea?.message || "Помилка!"}</p>
          )}
        </div>
        <select className="form__item form__select" {...register("rooms")}>
          <option value="oneroom">однокімнатна</option>
          <option value="tworoom">двокімнатна</option>
          <option value="threerooms">трикімнатна</option>
          <option value="fourrooms">чотирикімнатна</option>
        </select>
        <textarea
          {...register("text", {
            maxLength: {
              value: 500,
              message: "Max lenght 500 symbols",
            },
          })}
          placeholder="Короткий опис квартири, будинку: місцезнаходження, зручності тощо"
          className="form__text-area form__item"
        ></textarea>
        <div className="form__error">
          {errors?.text && <p>{errors?.text?.message || "Помилка!"}</p>}
        </div>
        <div>
          <input
            type="file"
            id="image"
            {...register("image", { required: true })}
          />
        </div>
        <button
          className="form__button form__item"
          type="submit"
          disabled={!isValid}
        >
          Подати оголошення
        </button>
      </form>
    </div>
  );
};
