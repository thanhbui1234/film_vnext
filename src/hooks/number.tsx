import numeral from "numeral";

const useFormartNumber = (number: number) => {
  const numberChange = +number;
  const valueChangeNumber = numeral(numberChange).format("0a");
  return valueChangeNumber;
};

export default useFormartNumber;
