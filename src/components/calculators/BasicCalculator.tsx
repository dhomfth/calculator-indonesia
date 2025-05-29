
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
      <Card className="mb-6 border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
        <CardContent className="p-6">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-4 mb-6 border border-red-200">
            <Input
              value={display}
              readOnly
              className="text-right text-3xl md:text-4xl font-mono h-16 border-0 bg-transparent text-red-800 focus:ring-0 shadow-none"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-3">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-3">
            {row.map((btn) => (
              <Button
                key={btn}
                variant="outline"
                className={`h-16 text-lg font-bold transition-all duration-200 ${
                  btn === "0" ? "col-span-2" : ""
                } ${
                  btn === "C" 
                    ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-red-500" 
                    : ["÷", "×", "-", "+", "="].includes(btn)
                    ? "bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white border-red-400"
                    : "bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 text-red-700 border-red-300 hover:border-red-400"
                } shadow-lg hover:shadow-xl hover:scale-105`}
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
