import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import styled from "styled-components";

const SignupContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f8f9fa;
`;

const SignupCard = styled.div`
  width: 400px;
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;

const SignupTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SignupButton = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #4285f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #357ae8;
  }
`;

const SignupText = styled.p`
  text-align: center;
`;

const LoginLink = styled(NavLink)`
  color: #4285f4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <SignupContainer>
      <SignupCard>
        <SignupTitle>FocusApp</SignupTitle>
        <Form onSubmit={onSubmit}>
          <FormLabel>Email address</FormLabel>
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <SignupButton type="submit">Sign up</SignupButton>
        </Form>
        <SignupText>
          Already have an account? <LoginLink to="/login">Sign in</LoginLink>
        </SignupText>
      </SignupCard>
    </SignupContainer>
  );
};

export default Signup;
