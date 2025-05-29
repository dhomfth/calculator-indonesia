
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GeometryCalculator = () => {
  const [circleRadius, setCircleRadius] = useState("");
  const [circleResults, setCircleResults] = useState<Record<string, number>>({});

  const [rectangleLength, setRectangleLength] = useState("");
  const [rectangleWidth, setRectangleWidth] = useState("");
  const [rectangleResults, setRectangleResults] = useState<Record<string, number>>({});

  const [triangleBase, setTriangleBase] = useState("");
  const [triangleHeight, setTriangleHeight] = useState("");
  const [triangleSide1, setTriangleSide1] = useState("");
  const [triangleSide2, setTriangleSide2] = useState("");
  const [triangleSide3, setTriangleSide3] = useState("");
  const [triangleResults, setTriangleResults] = useState<Record<string, number>>({});

  const [sphereRadius, setSphereRadius] = useState("");
  const [sphereResults, setSphereResults] = useState<Record<string, number>>({});

  const calculateCircle = () => {
    const r = parseFloat(circleRadius);
    if (isNaN(r)) return;

    const area = Math.PI * r * r;
    const circumference = 2 * Math.PI * r;
    const diameter = 2 * r;

    setCircleResults({
      area: parseFloat(area.toFixed(4)),
      circumference: parseFloat(circumference.toFixed(4)),
      diameter: parseFloat(diameter.toFixed(4))
    });
  };

  const calculateRectangle = () => {
    const l = parseFloat(rectangleLength);
    const w = parseFloat(rectangleWidth);
    if (isNaN(l) || isNaN(w)) return;

    const area = l * w;
    const perimeter = 2 * (l + w);
    const diagonal = Math.sqrt(l * l + w * w);

    setRectangleResults({
      area: parseFloat(area.toFixed(4)),
      perimeter: parseFloat(perimeter.toFixed(4)),
      diagonal: parseFloat(diagonal.toFixed(4))
    });
  };

  const calculateTriangle = () => {
    const base = parseFloat(triangleBase);
    const height = parseFloat(triangleHeight);
    const a = parseFloat(triangleSide1);
    const b = parseFloat(triangleSide2);
    const c = parseFloat(triangleSide3);

    let results: Record<string, number> = {};

    // Calculate area using base and height
    if (!isNaN(base) && !isNaN(height)) {
      results.area = parseFloat((0.5 * base * height).toFixed(4));
    }

    // Calculate perimeter and area using all three sides (Heron's formula)
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      const perimeter = a + b + c;
      const s = perimeter / 2; // semi-perimeter
      const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      
      results.perimeter = parseFloat(perimeter.toFixed(4));
      if (!isNaN(area)) {
        results.heronArea = parseFloat(area.toFixed(4));
      }
    }

    setTriangleResults(results);
  };

  const calculateSphere = () => {
    const r = parseFloat(sphereRadius);
    if (isNaN(r)) return;

    const volume = (4/3) * Math.PI * r * r * r;
    const surfaceArea = 4 * Math.PI * r * r;

    setSphereResults({
      volume: parseFloat(volume.toFixed(4)),
      surfaceArea: parseFloat(surfaceArea.toFixed(4))
    });
  };

  return (
    <Tabs defaultValue="circle" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="circle">Lingkaran</TabsTrigger>
        <TabsTrigger value="rectangle">Persegi Panjang</TabsTrigger>
        <TabsTrigger value="triangle">Segitiga</TabsTrigger>
        <TabsTrigger value="sphere">Bola</TabsTrigger>
      </TabsList>

      <TabsContent value="circle">
        <Card>
          <CardHeader>
            <CardTitle>Kalkulator Lingkaran</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="radius">Jari-jari (r)</Label>
              <Input
                id="radius"
                type="number"
                value={circleRadius}
                onChange={(e) => setCircleRadius(e.target.value)}
                placeholder="Masukkan jari-jari"
              />
            </div>
            <Button onClick={calculateCircle} className="w-full">
              Hitung
            </Button>
            {Object.keys(circleResults).length > 0 && (
              <Card>
                <CardContent className="pt-6 space-y-2">
                  <p><strong>Luas:</strong> {circleResults.area} satuan²</p>
                  <p><strong>Keliling:</strong> {circleResults.circumference} satuan</p>
                  <p><strong>Diameter:</strong> {circleResults.diameter} satuan</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="rectangle">
        <Card>
          <CardHeader>
            <CardTitle>Kalkulator Persegi Panjang</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="length">Panjang</Label>
                <Input
                  id="length"
                  type="number"
                  value={rectangleLength}
                  onChange={(e) => setRectangleLength(e.target.value)}
                  placeholder="Panjang"
                />
              </div>
              <div>
                <Label htmlFor="width">Lebar</Label>
                <Input
                  id="width"
                  type="number"
                  value={rectangleWidth}
                  onChange={(e) => setRectangleWidth(e.target.value)}
                  placeholder="Lebar"
                />
              </div>
            </div>
            <Button onClick={calculateRectangle} className="w-full">
              Hitung
            </Button>
            {Object.keys(rectangleResults).length > 0 && (
              <Card>
                <CardContent className="pt-6 space-y-2">
                  <p><strong>Luas:</strong> {rectangleResults.area} satuan²</p>
                  <p><strong>Keliling:</strong> {rectangleResults.perimeter} satuan</p>
                  <p><strong>Diagonal:</strong> {rectangleResults.diagonal} satuan</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="triangle">
        <Card>
          <CardHeader>
            <CardTitle>Kalkulator Segitiga</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="base">Alas</Label>
                  <Input
                    id="base"
                    type="number"
                    value={triangleBase}
                    onChange={(e) => setTriangleBase(e.target.value)}
                    placeholder="Alas"
                  />
                </div>
                <div>
                  <Label htmlFor="height">Tinggi</Label>
                  <Input
                    id="height"
                    type="number"
                    value={triangleHeight}
                    onChange={(e) => setTriangleHeight(e.target.value)}
                    placeholder="Tinggi"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="side1">Sisi 1</Label>
                  <Input
                    id="side1"
                    type="number"
                    value={triangleSide1}
                    onChange={(e) => setTriangleSide1(e.target.value)}
                    placeholder="Sisi 1"
                  />
                </div>
                <div>
                  <Label htmlFor="side2">Sisi 2</Label>
                  <Input
                    id="side2"
                    type="number"
                    value={triangleSide2}
                    onChange={(e) => setTriangleSide2(e.target.value)}
                    placeholder="Sisi 2"
                  />
                </div>
                <div>
                  <Label htmlFor="side3">Sisi 3</Label>
                  <Input
                    id="side3"
                    type="number"
                    value={triangleSide3}
                    onChange={(e) => setTriangleSide3(e.target.value)}
                    placeholder="Sisi 3"
                  />
                </div>
              </div>
            </div>
            <Button onClick={calculateTriangle} className="w-full">
              Hitung
            </Button>
            {Object.keys(triangleResults).length > 0 && (
              <Card>
                <CardContent className="pt-6 space-y-2">
                  {triangleResults.area && <p><strong>Luas (alas × tinggi):</strong> {triangleResults.area} satuan²</p>}
                  {triangleResults.heronArea && <p><strong>Luas (rumus Heron):</strong> {triangleResults.heronArea} satuan²</p>}
                  {triangleResults.perimeter && <p><strong>Keliling:</strong> {triangleResults.perimeter} satuan</p>}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="sphere">
        <Card>
          <CardHeader>
            <CardTitle>Kalkulator Bola</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="sphereRadius">Jari-jari (r)</Label>
              <Input
                id="sphereRadius"
                type="number"
                value={sphereRadius}
                onChange={(e) => setSphereRadius(e.target.value)}
                placeholder="Masukkan jari-jari"
              />
            </div>
            <Button onClick={calculateSphere} className="w-full">
              Hitung
            </Button>
            {Object.keys(sphereResults).length > 0 && (
              <Card>
                <CardContent className="pt-6 space-y-2">
                  <p><strong>Volume:</strong> {sphereResults.volume} satuan³</p>
                  <p><strong>Luas Permukaan:</strong> {sphereResults.surfaceArea} satuan²</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default GeometryCalculator;
