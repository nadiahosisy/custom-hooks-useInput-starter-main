import { useState } from "react";

const useInput = (massage, validationFn = null) => {
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

    if (value === "" || isError) {
      setError({
        isError: true,
        massage,
      });
    } else {
      resetError();
    }
  };
  const resetError = () => {
    setError({
      isError: false,
      massage: "",
    });
  };
  return {
    value,
    error,
    handleChange,
    handleBlur,
  };
};

export default useInput;
