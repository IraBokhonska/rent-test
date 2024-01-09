import React from "react";
import { useForm, Controller } from "react-hook-form";
import "../../styles/form.scss";
import Select from "react-select";

const options = [
  { value: "oneroom", label: "однокімнатна" },
  { value: "stworoom", label: "двокімнатна" },
  { value: "threerooms", label: "трикімнатна" },
  { value: "fourrooms", label: "чотирикімнатна" },
];

export const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "silver",
        primary: "silver",
      },
    };
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
            min: {
              value: 1,
              message: "Вкажіть коректне значення!",
            },
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
            min: {
              value: 1,
              message: "Вкажіть коректне значення!",
            },
          })}
          placeholder="Вкажіть ціну в гривнях"
          className="form__item"
          type="number"
        />
        <div className="form__error">
          {errors?.price && <p>{errors?.price?.message || "Помилка!"}</p>}
        </div>
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
        <Controller
          name="rooms"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              theme={customTheme}
              placeholder={"Вкажіть кількість кімнат"}
              isSearchable
            />
          )}
        />
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
