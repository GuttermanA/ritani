import React from "react";

const FormField = props => {
  const { className, type, name, required, placeholder } = props;
  return <input className type name required placeholder />;
};

export default FormField;
