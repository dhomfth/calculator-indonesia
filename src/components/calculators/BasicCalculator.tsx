
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const calculateResult = () => {
    if (operation && previousValue !== null) {
      performOperation("=");
    }
  };

  const buttons = [
    ["C", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ];

  return (
    <div className="max-w-sm mx-auto">
      <Card className="mb-4">
        <CardContent className="p-4">
          <Input
            value={display}
            readOnly
            className="text-right text-2xl font-mono h-16 mb-4 bg-gray-50"
          />
        </CardContent>
      </Card>

      <div className="grid gap-2">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-2">
            {row.map((btn) => (
              <Button
                key={btn}
                variant={["÷", "×", "-", "+", "="].includes(btn) ? "default" : "outline"}
                className={`h-16 text-lg font-semibold ${
                  btn === "0" ? "col-span-2" : ""
                } ${
                  btn === "C" ? "bg-red-500 hover:bg-red-600 text-white" : ""
                }`}
                onClick={() => {
                  if (btn === "C") {
                    clear();
                  } else if (btn === "=") {
                    calculateResult();
                  } else if (["+", "-", "×", "÷"].includes(btn)) {
                    performOperation(btn);
                  } else if (btn === ".") {
                    inputDecimal();
                  } else if (btn === "±") {
                    setDisplay(String(parseFloat(display) * -1));
                  } else if (btn === "%") {
                    setDisplay(String(parseFloat(display) / 100));
                  } else {
                    inputNumber(btn);
                  }
                }}
              >
                {btn}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicCalculator;
