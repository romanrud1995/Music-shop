import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: blue;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #4285f4;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #357ae8;
  }
`;

const SignupLink = styled.p`
  font-size: 14px;
  color: #4285f4;
  margin-top: 20px;
`;

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history("/Home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <LoginContainer>
        <LoginForm>
          <LoginTitle>Sign in</LoginTitle>

          <InputField
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginButton onClick={onLogin}>Sign in</LoginButton>

          <SignupLink>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
          </SignupLink>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default Login;
