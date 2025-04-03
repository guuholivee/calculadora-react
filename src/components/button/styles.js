import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 22%;
  height: 60px;
  margin: 5px;
  border-radius: 8px;
  background-color: #444;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #666;
  }

 
  ${({ label }) =>
    label === "=" && "background-color: #f39c12; color: white; box-shadow: 0px 4px 10px rgba(255, 165, 0, 0.5);"}
  ${({ label }) =>
    label === "C" && "background-color: #e74c3c; color: white; box-shadow: 0px 4px 10px rgba(231, 76, 60, 0.5);"}
  ${({ label }) =>
    label === "+" || label === "-" || label === "x" || label === "/" 
      ? "background-color: #3498db; color: white; box-shadow: 0px 4px 10px rgba(52, 152, 219, 0.5);"
      : ""}`