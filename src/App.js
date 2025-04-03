import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";

import { Container, Content, Row } from "./styles";



const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber(null);
    setOperation(null);
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === "0" ? num : prev + num));
  };

  const handleOperation = (op) => {
    if (currentNumber !== "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation(op);
    }
  };

  const handleEqual = () => {
    if (!firstNumber || !operation) 
      return;

    let result = 0;
    const num1 = Number(firstNumber);
    const num2 = Number(currentNumber);

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Erro";
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber(null);
    setOperation(null);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperation("x")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="=" onClick={handleEqual} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
