import { Link, useNavigate } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../styles/styled/Login.styled";
import { useState } from "react";
import useInput from "../hooks/useInput";
import { validateEmail } from "../utils/validateEmail";

const Login = () => {
  const { isLoading, setIsLoading } = useState(false);

  const navigate = useNavigate();

  const {
    value: name,
    error: nameError,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
  } = useInput("Please enter your name!");
  const {
    value: email,
    error: emailError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
  } = useInput("Please enter valid email!", validateEmail);
  const {
    value: password,
    error: passwordError,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
  } = useInput("Please enter your email!");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
  };

  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        {/* name field */}

        {/* email field */}

        {/* password field */}

        <button type="submit" className="btn btn-block">
          {/* Loading */}
          {isLoading ? "Loading..." : "log In"}
        </button>
        <Link to="/" className="btn btn-block btn-light mt">
          Back
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;
