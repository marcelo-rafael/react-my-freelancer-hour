import React from "react";

const FieldSet = (props) => {
  return (
    <fieldset>
      <legend>{props.legend}</legend>
      <div className="formulario-grupo">
        <label htmlFor={props.idInput}>{props.label}</label>
        <input
          id={props.idInput}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </fieldset>
  );
};

export default FieldSet;
