import React from "react";
import RegistrationForm from "./RegistrationForm";

const RegistrationFormContainer: React.FC = () => {
  return (
    <RegistrationForm
      name="John Doe"
      email="john.doe@example.com"
      password="secret"
    />
  );
};

export default RegistrationFormContainer;
