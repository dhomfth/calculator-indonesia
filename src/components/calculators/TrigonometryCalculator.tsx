
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TrigonometryCalculator = () => {
  const [angle, setAngle] = useState("");
  const [unit, setUnit] = useState("degree");
  const [results, setResults] = useState<Record<string, number>>({});

  const calculateTrigonometric = () => {
    const angleValue = parseFloat(angle);
    if (isNaN(angleValue)) {
      return;
    }

    // Convert to radians if input is in degrees
    const radians = unit === "degree" ? (angleValue * Math.PI) / 180 : angleValue;

    const sin = Math.sin(radians);
    const cos = Math.cos(radians);
    const tan = Math.tan(radians);
    const cot = 1 / tan;
    const sec = 1 / cos;
    const csc = 1 / sin;

    setResults({
      sin: parseFloat(sin.toFixed(6)),
      cos: parseFloat(cos.toFixed(6)),
      tan: parseFloat(tan.toFixed(6)),
      cot: parseFloat(cot.toFixed(6)),
      sec: parseFloat(sec.toFixed(6)),
      csc: parseFloat(csc.toFixed(6))
    });
  };

  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [hypotenuse, setHypotenuse] = useState("");
  const [pythagoreanResult, setPythagoreanResult] = useState("");

  const calculatePythagorean = () => {
    const a = parseFloat(side1);
    const b = parseFloat(side2);
    const c = parseFloat(hypotenuse);

    if (!isNaN(a) && !isNaN(b) && isNaN(c)) {
      // Calculate hypotenuse
      const result = Math.sqrt(a * a + b * b);
      setPythagoreanResult(`Hipotenusa = ${result.toFixed(4)}`);
    } else if (!isNaN(a) && isNaN(b) && !isNaN(c)) {
      // Calculate side b
      const result = Math.sqrt(c * c - a * a);
      setPythagoreanResult(`Sisi b = ${result.toFixed(4)}`);
    } else if (isNaN(a) && !isNaN(b) && !isNaN(c)) {
      // Calculate side a
      const result = Math.sqrt(c * c - b * b);
      setPythagoreanResult(`Sisi a = ${result.toFixed(4)}`);
    } else {
      setPythagoreanResult("Masukkan dua nilai untuk menghitung nilai ketiga");
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Fungsi Trigonometri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="angle">Sudut</Label>
              <Input
                id="angle"
                type="number"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
                placeholder="Masukkan sudut"
              />
            </div>
            <div>
              <Label>Unit</Label>
              <Select value={unit} onValueChange={setUnit}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="degree">Derajat (°)</SelectItem>
                  <SelectItem value="radian">Radian</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={calculateTrigonometric} className="w-full">
            Hitung Fungsi Trigonometri
          </Button>
          {Object.keys(results).length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p><strong>sin:</strong> {results.sin}</p>
                  <p><strong>cos:</strong> {results.cos}</p>
                  <p><strong>tan:</strong> {results.tan}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p><strong>cot:</strong> {results.cot}</p>
                  <p><strong>sec:</strong> {results.sec}</p>
                  <p><strong>csc:</strong> {results.csc}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Teorema Pythagoras</CardTitle>
          <p className="text-sm text-gray-600">a² + b² = c²</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="side1">Sisi a</Label>
              <Input
                id="side1"
                type="number"
                value={side1}
                onChange={(e) => setSide1(e.target.value)}
                placeholder="Sisi a"
              />
            </div>
            <div>
              <Label htmlFor="side2">Sisi b</Label>
              <Input
                id="side2"
                type="number"
                value={side2}
                onChange={(e) => setSide2(e.target.value)}
                placeholder="Sisi b"
              />
            </div>
            <div>
              <Label htmlFor="hypotenuse">Hipotenusa c</Label>
              <Input
                id="hypotenuse"
                type="number"
                value={hypotenuse}
                onChange={(e) => setHypotenuse(e.target.value)}
                placeholder="Hipotenusa c"
              />
            </div>
          </div>
          <Button onClick={calculatePythagorean} className="w-full">
            Hitung Teorema Pythagoras
          </Button>
          {pythagoreanResult && (
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg font-mono">{pythagoreanResult}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TrigonometryCalculator;
