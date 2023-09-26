import styled from "styled-components";

export const Button = styled.button`
  background-color: #da3450;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #41d8f3;
    color: white;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 1px solid #41d8f3;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;