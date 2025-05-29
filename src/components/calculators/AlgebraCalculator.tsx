
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AlgebraCalculator = () => {
  const [quadraticA, setQuadraticA] = useState("");
  const [quadraticB, setQuadraticB] = useState("");
  const [quadraticC, setQuadraticC] = useState("");
  const [quadraticResult, setQuadraticResult] = useState("");

  const [linearA, setLinearA] = useState("");
  const [linearB, setLinearB] = useState("");
  const [linearResult, setLinearResult] = useState("");

  const [polynomialInput, setPolynomialInput] = useState("");
  const [polynomialResult, setPolynomialResult] = useState("");

  const solveQuadratic = () => {
    const a = parseFloat(quadraticA);
    const b = parseFloat(quadraticB);
    const c = parseFloat(quadraticC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setQuadraticResult("Masukkan nilai yang valid untuk a, b, dan c");
      return;
    }

    if (a === 0) {
      setQuadraticResult("Koefisien a tidak boleh nol untuk persamaan kuadrat");
      return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setQuadraticResult(`x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`);
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setQuadraticResult(`x = ${x.toFixed(4)} (akar kembar)`);
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      setQuadraticResult(
        `x₁ = ${realPart.toFixed(4)} + ${imaginaryPart.toFixed(4)}i, x₂ = ${realPart.toFixed(4)} - ${imaginaryPart.toFixed(4)}i`
      );
    }
  };

  const solveLinear = () => {
    const a = parseFloat(linearA);
    const b = parseFloat(linearB);

    if (isNaN(a) || isNaN(b)) {
      setLinearResult("Masukkan nilai yang valid untuk a dan b");
      return;
    }

    if (a === 0) {
      if (b === 0) {
        setLinearResult("Persamaan memiliki tak hingga solusi");
      } else {
        setLinearResult("Persamaan tidak memiliki solusi");
      }
    } else {
      const x = -b / a;
      setLinearResult(`x = ${x.toFixed(4)}`);
    }
  };

  const evaluatePolynomial = () => {
    try {
      // Simple polynomial evaluation (this is a basic implementation)
      const expression = polynomialInput.replace(/\^/g, "**");
      setPolynomialResult("Fitur evaluasi polinomial dalam pengembangan");
    } catch (error) {
      setPolynomialResult("Error dalam evaluasi polinomial");
    }
  };

  return (
    <Tabs defaultValue="quadratic" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="quadratic">Persamaan Kuadrat</TabsTrigger>
        <TabsTrigger value="linear">Persamaan Linear</TabsTrigger>
        <TabsTrigger value="polynomial">Polinomial</TabsTrigger>
      </TabsList>

      <TabsContent value="quadratic">
        <Card>
          <CardHeader>
            <CardTitle>Penyelesaian Persamaan Kuadrat</CardTitle>
            <p className="text-sm text-gray-600">ax² + bx + c = 0</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="a">Koefisien a</Label>
                <Input
                  id="a"
                  type="number"
                  value={quadraticA}
                  onChange={(e) => setQuadraticA(e.target.value)}
                  placeholder="Masukkan nilai a"
                />
              </div>
              <div>
                <Label htmlFor="b">Koefisien b</Label>
                <Input
                  id="b"
                  type="number"
                  value={quadraticB}
                  onChange={(e) => setQuadraticB(e.target.value)}
                  placeholder="Masukkan nilai b"
                />
              </div>
              <div>
                <Label htmlFor="c">Koefisien c</Label>
                <Input
                  id="c"
                  type="number"
                  value={quadraticC}
                  onChange={(e) => setQuadraticC(e.target.value)}
                  placeholder="Masukkan nilai c"
                />
              </div>
            </div>
            <Button onClick={solveQuadratic} className="w-full">
              Selesaikan Persamaan Kuadrat
            </Button>
            {quadraticResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono">{quadraticResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="linear">
        <Card>
          <CardHeader>
            <CardTitle>Penyelesaian Persamaan Linear</CardTitle>
            <p className="text-sm text-gray-600">ax + b = 0</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="linear-a">Koefisien a</Label>
                <Input
                  id="linear-a"
                  type="number"
                  value={linearA}
                  onChange={(e) => setLinearA(e.target.value)}
                  placeholder="Masukkan nilai a"
                />
              </div>
              <div>
                <Label htmlFor="linear-b">Koefisien b</Label>
                <Input
                  id="linear-b"
                  type="number"
                  value={linearB}
                  onChange={(e) => setLinearB(e.target.value)}
                  placeholder="Masukkan nilai b"
                />
              </div>
            </div>
            <Button onClick={solveLinear} className="w-full">
              Selesaikan Persamaan Linear
            </Button>
            {linearResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono">{linearResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="polynomial">
        <Card>
          <CardHeader>
            <CardTitle>Evaluasi Polinomial</CardTitle>
            <p className="text-sm text-gray-600">Masukkan polinomial dalam bentuk ax^n + bx^(n-1) + ... + c</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="polynomial">Polinomial</Label>
              <Input
                id="polynomial"
                value={polynomialInput}
                onChange={(e) => setPolynomialInput(e.target.value)}
                placeholder="Contoh: 2x^3 + 3x^2 - 5x + 1"
              />
            </div>
            <Button onClick={evaluatePolynomial} className="w-full">
              Evaluasi Polinomial
            </Button>
            {polynomialResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg">{polynomialResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AlgebraCalculator;
