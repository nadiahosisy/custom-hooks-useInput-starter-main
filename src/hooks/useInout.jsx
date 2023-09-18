import { useState } from "react";

const useInout = (massage, validationFn = null) => {
  const { value, setValue } = useState("");
  const { error, setError } = useState({
    isError: false,
    massage: "",
  });
  const handleChange = (e) => {
    resetError();
    setValue(e.target.value);
  };
  const handleBlur = () => {
    let isError = false;

    if (validationFn) {
      isError = validationFn(value);
    }
  };
  const resetError = () => {
    setError({
      isError: false,
      massage: "",
    });
  };
};

export default useInout;
