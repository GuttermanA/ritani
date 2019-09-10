export const isObject = object => {
  return object != null && object.constructor.name === "Object";
};

export const isObjectWithKeys = object => {
  return isObject(object) && Object.keys(object).length > 0;
};

export const keyExists = (object, key) => {
  return isObject(object) && Object.keys(object).includes(key);
};

export const keyWithValueExists = ({ object, key, value }) => {
  return isObject(object) && keyExists(object, key) && object[key] === value;
};
