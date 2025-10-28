import { useState } from "react";
import { useNavigate } from "react-router";

const useLogin = () => {
  const [step, setStep] = useState("phone"); // 'phone', 'code', 'password'
  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNextStep = (nextStep) => {
    setStep(nextStep);
  };

  const handleLogin = (number, password) => {
    if (number == 1234 && password == 1234) {
      const fakeToken = "mock-jwt-token";
      localStorage.setItem("token", fakeToken);
      navigate("/");
    }
  };
  return {
    handleNextStep,
    step,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    handleLogin,
  };
};

export default useLogin;
