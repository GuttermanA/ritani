const getElementType = (Component, props, getDefault) => {
  const { defaultProps = {} } = Component;

  // ----------------------------------------
  // user defined "as" element type

  if (props.as && props.as !== defaultProps.as) return props.as;

  // ----------------------------------------
  // computed default element type

  if (getDefault) {
    const computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  }

  // ----------------------------------------
  // infer anchor links

  if (props.href) return "a";

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || "div";
};

export default getElementType;
