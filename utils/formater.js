export const formatUpperFirstcharSplit = (
  input,
  prefix,
) => {
  let str = "";
  const splitStr = input.split(prefix || " ");
  splitStr.forEach((item) => {
    str += item.charAt(0).toUpperCase() + item.slice(1) + " ";
  });
  return str.trim();
};
