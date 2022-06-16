import React from "react";
import Button from "./Button";

function Form({ data }) {
  return (
    <form className="form" name="form">
      <h4 className="form__title">{data.title}</h4>
      <div className="form__content">
        <input
          className="form__full-name"
          type="text"
          placeholder={data.form_fields[0]}
        />
        <input
          className="form__email"
          type="email"
          placeholder={data.form_fields[1]}
        />
        <input
          className="form__subject"
          type="text"
          placeholder={data.form_fields[2]}
        />
        <textarea
          className="form__message"
          placeholder={data.form_fields[3]}
        />
        <Button text={data.btn} />
      </div>
    </form>
  );
}

export default Form;
