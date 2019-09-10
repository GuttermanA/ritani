export const getSearchParamValue = (url, param) => {
  return new URL(url).searchParams.get(param);
};
