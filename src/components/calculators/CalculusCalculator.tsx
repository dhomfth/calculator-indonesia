
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CalculusCalculator = () => {
  const [function1, setFunction1] = useState("");
  const [derivativeResult, setDerivativeResult] = useState("");
  
  const [function2, setFunction2] = useState("");
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");
  const [integralResult, setIntegralResult] = useState("");

  const [limitFunction, setLimitFunction] = useState("");
  const [limitPoint, setLimitPoint] = useState("");
  const [limitResult, setLimitResult] = useState("");

  const calculateDerivative = () => {
    // This is a simplified implementation
    // In a real application, you would use a symbolic math library
    const func = function1.toLowerCase();
    
    if (func.includes("x^")) {
      setDerivativeResult("Untuk fungsi polinomial: d/dx(ax^n) = nax^(n-1)");
    } else if (func.includes("sin")) {
      setDerivativeResult("d/dx(sin x) = cos x");
    } else if (func.includes("cos")) {
      setDerivativeResult("d/dx(cos x) = -sin x");
    } else if (func.includes("tan")) {
      setDerivativeResult("d/dx(tan x) = sec²x");
    } else if (func.includes("ln") || func.includes("log")) {
      setDerivativeResult("d/dx(ln x) = 1/x");
    } else if (func.includes("e^")) {
      setDerivativeResult("d/dx(e^x) = e^x");
    } else {
      setDerivativeResult("Masukkan fungsi yang valid (contoh: x^2, sin x, cos x, etc.)");
    }
  };

  const calculateIntegral = () => {
    const a = parseFloat(lowerLimit);
    const b = parseFloat(upperLimit);
    const func = function2.toLowerCase();

    if (isNaN(a) || isNaN(b)) {
      setIntegralResult("Masukkan batas integral yang valid");
      return;
    }

    // Simple numerical integration using trapezoidal rule
    // This is a very basic implementation
    if (func.includes("x^2")) {
      const result = (Math.pow(b, 3) - Math.pow(a, 3)) / 3;
      setIntegralResult(`∫x² dx dari ${a} ke ${b} = ${result.toFixed(4)}`);
    } else if (func.includes("x")) {
      const result = (Math.pow(b, 2) - Math.pow(a, 2)) / 2;
      setIntegralResult(`∫x dx dari ${a} ke ${b} = ${result.toFixed(4)}`);
    } else {
      setIntegralResult("Fitur integral simbolik dalam pengembangan. Gunakan metode numerik untuk kasus kompleks.");
    }
  };

  const calculateLimit = () => {
    const point = parseFloat(limitPoint);
    const func = limitFunction.toLowerCase();

    if (isNaN(point)) {
      setLimitResult("Masukkan titik limit yang valid");
      return;
    }

    // Basic limit calculations
    if (func.includes("x^2")) {
      setLimitResult(`lim(x→${point}) x² = ${Math.pow(point, 2)}`);
    } else if (func.includes("1/x") && point === 0) {
      setLimitResult("lim(x→0) 1/x = ∞ (tidak terdefinisi)");
    } else {
      setLimitResult("Masukkan fungsi limit yang valid");
    }
  };

  return (
    <Tabs defaultValue="derivative" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="derivative">Turunan</TabsTrigger>
        <TabsTrigger value="integral">Integral</TabsTrigger>
        <TabsTrigger value="limit">Limit</TabsTrigger>
      </TabsList>

      <TabsContent value="derivative">
        <Card>
          <CardHeader>
            <CardTitle>Kalkulator Turunan</CardTitle>
            <p className="text-sm text-gray-600">Hitung turunan fungsi matematika</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="function1">Fungsi f(x)</Label>
              <Input
                id="function1"
                value={function1}
                onChange={(e) => setFunction1(e.target.value)}
                placeholder="Contoh: x^2, sin x, cos x, ln x"
              />
            </div>
            <Button onClick={calculateDerivative} className="w-full">
              Hitung Turunan
            </Button>
            {derivativeResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg">{derivativeResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="integral">
        <Card>
          <CardHeader>
            <CardTitle>Kalkulator Integral</CardTitle>
            <p className="text-sm text-gray-600">Hitung integral tentu dan tak tentu</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="function2">Fungsi f(x)</Label>
              <Input
                id="function2"
                value={function2}
                onChange={(e) => setFunction2(e.target.value)}
                placeholder="Contoh: x^2, x, sin x"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="lower">Batas Bawah</Label>
                <Input
                  id="lower"
                  type="number"
                  value={lowerLimit}
                  onChange={(e) => setLowerLimit(e.target.value)}
                  placeholder="Batas bawah"
                />
              </div>
              <div>
                <Label htmlFor="upper">Batas Atas</Label>
                <Input
                  id="upper"
                  type="number"
                  value={upperLimit}
                  onChange={(e) => setUpperLimit(e.target.value)}
                  placeholder="Batas atas"
                />
              </div>
            </div>
            <Button onClick={calculateIntegral} className="w-full">
              Hitung Integral
            </Button>
            {integralResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono">{integralResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="limit">
        <Card>
          <CardHeader>
            <CardTitle>Kalkulator Limit</CardTitle>
            <p className="text-sm text-gray-600">Hitung limit fungsi pada titik tertentu</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="limitFunction">Fungsi f(x)</Label>
              <Input
                id="limitFunction"
                value={limitFunction}
                onChange={(e) => setLimitFunction(e.target.value)}
                placeholder="Contoh: x^2, 1/x, sin x"
              />
            </div>
            <div>
              <Label htmlFor="limitPoint">Titik Limit</Label>
              <Input
                id="limitPoint"
                type="number"
                value={limitPoint}
                onChange={(e) => setLimitPoint(e.target.value)}
                placeholder="Titik yang didekati"
              />
            </div>
            <Button onClick={calculateLimit} className="w-full">
              Hitung Limit
            </Button>
            {limitResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono">{limitResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CalculusCalculator;
