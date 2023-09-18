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

    if (!name || !email || validateEmail(email) || !password) {
      setIsLoading(false);
      handleNameBlur();
      handleEmailBlur();
      handlePasswordBlur();
      return;
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("userData", JSON.stringify({ name, email }));
      }, 3000);
      navigate("/main");
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        {/* name field */}
        <FormRow
          type="text"
          name="name"
          value={name}
          handleBlur={handleNameBlur}
          handleChange={handleNameChange}
          error={nameError.isError}
          message={nameError.message}
        />

        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={email}
          handleBlur={handleEmailBlur}
          handleChange={handleEmailChange}
          error={emailError.isError}
          message={emailError.message}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={password}
          handleBlur={handlePasswordBlur}
          handleChange={handlePasswordChange}
          error={passwordError.isError}
          message={passwordError.message}
        />
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
