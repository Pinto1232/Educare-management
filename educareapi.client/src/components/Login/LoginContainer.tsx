import React from "react";
import LoginForm from "./LoginForm";

const LoginContainer: React.FC = () => {
  return (
    <LoginForm
      onSubmit={(username, password) => {
        console.log(username, password);
      }}
      RegistrationForm={undefined}
    />
  );
};

export default LoginContainer;
