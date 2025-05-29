
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UnitConverter = () => {
  const [lengthValue, setLengthValue] = useState("");
  const [lengthFrom, setLengthFrom] = useState("meter");
  const [lengthTo, setLengthTo] = useState("kilometer");
  const [lengthResult, setLengthResult] = useState("");

  const [weightValue, setWeightValue] = useState("");
  const [weightFrom, setWeightFrom] = useState("kilogram");
  const [weightTo, setWeightTo] = useState("gram");
  const [weightResult, setWeightResult] = useState("");

  const [tempValue, setTempValue] = useState("");
  const [tempFrom, setTempFrom] = useState("celsius");
  const [tempTo, setTempTo] = useState("fahrenheit");
  const [tempResult, setTempResult] = useState("");

  const lengthUnits = {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    inch: 39.3701,
    foot: 3.28084,
    yard: 1.09361,
    mile: 0.000621371
  };

  const weightUnits = {
    kilogram: 1,
    gram: 1000,
    pound: 2.20462,
    ounce: 35.274,
    ton: 0.001
  };

  const convertLength = () => {
    const value = parseFloat(lengthValue);
    if (isNaN(value)) return;

    const inMeters = value / lengthUnits[lengthFrom as keyof typeof lengthUnits];
    const result = inMeters * lengthUnits[lengthTo as keyof typeof lengthUnits];
    setLengthResult(`${value} ${lengthFrom} = ${result.toFixed(6)} ${lengthTo}`);
  };

  const convertWeight = () => {
    const value = parseFloat(weightValue);
    if (isNaN(value)) return;

    const inKilograms = value / weightUnits[weightFrom as keyof typeof weightUnits];
    const result = inKilograms * weightUnits[weightTo as keyof typeof weightUnits];
    setWeightResult(`${value} ${weightFrom} = ${result.toFixed(6)} ${weightTo}`);
  };

  const convertTemperature = () => {
    const value = parseFloat(tempValue);
    if (isNaN(value)) return;

    let celsius: number;
    let result: number;

    // Convert to Celsius first
    switch (tempFrom) {
      case "celsius":
        celsius = value;
        break;
      case "fahrenheit":
        celsius = (value - 32) * 5/9;
        break;
      case "kelvin":
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }

    // Convert from Celsius to target
    switch (tempTo) {
      case "celsius":
        result = celsius;
        break;
      case "fahrenheit":
        result = celsius * 9/5 + 32;
        break;
      case "kelvin":
        result = celsius + 273.15;
        break;
      default:
        result = celsius;
    }

    setTempResult(`${value}° ${tempFrom} = ${result.toFixed(2)}° ${tempTo}`);
  };

  return (
    <Tabs defaultValue="length" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="length">Panjang</TabsTrigger>
        <TabsTrigger value="weight">Berat</TabsTrigger>
        <TabsTrigger value="temperature">Suhu</TabsTrigger>
      </TabsList>

      <TabsContent value="length">
        <Card>
          <CardHeader>
            <CardTitle>Konversi Panjang</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="lengthValue">Nilai</Label>
              <Input
                id="lengthValue"
                type="number"
                value={lengthValue}
                onChange={(e) => setLengthValue(e.target.value)}
                placeholder="Masukkan nilai"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Dari</Label>
                <Select value={lengthFrom} onValueChange={setLengthFrom}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meter">Meter</SelectItem>
                    <SelectItem value="kilometer">Kilometer</SelectItem>
                    <SelectItem value="centimeter">Centimeter</SelectItem>
                    <SelectItem value="millimeter">Millimeter</SelectItem>
                    <SelectItem value="inch">Inch</SelectItem>
                    <SelectItem value="foot">Foot</SelectItem>
                    <SelectItem value="yard">Yard</SelectItem>
                    <SelectItem value="mile">Mile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Ke</Label>
                <Select value={lengthTo} onValueChange={setLengthTo}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meter">Meter</SelectItem>
                    <SelectItem value="kilometer">Kilometer</SelectItem>
                    <SelectItem value="centimeter">Centimeter</SelectItem>
                    <SelectItem value="millimeter">Millimeter</SelectItem>
                    <SelectItem value="inch">Inch</SelectItem>
                    <SelectItem value="foot">Foot</SelectItem>
                    <SelectItem value="yard">Yard</SelectItem>
                    <SelectItem value="mile">Mile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={convertLength} className="w-full">
              Konversi
            </Button>
            {lengthResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono">{lengthResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="weight">
        <Card>
          <CardHeader>
            <CardTitle>Konversi Berat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="weightValue">Nilai</Label>
              <Input
                id="weightValue"
                type="number"
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
                placeholder="Masukkan nilai"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Dari</Label>
                <Select value={weightFrom} onValueChange={setWeightFrom}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kilogram">Kilogram</SelectItem>
                    <SelectItem value="gram">Gram</SelectItem>
                    <SelectItem value="pound">Pound</SelectItem>
                    <SelectItem value="ounce">Ounce</SelectItem>
                    <SelectItem value="ton">Ton</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Ke</Label>
                <Select value={weightTo} onValueChange={setWeightTo}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kilogram">Kilogram</SelectItem>
                    <SelectItem value="gram">Gram</SelectItem>
                    <SelectItem value="pound">Pound</SelectItem>
                    <SelectItem value="ounce">Ounce</SelectItem>
                    <SelectItem value="ton">Ton</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={convertWeight} className="w-full">
              Konversi
            </Button>
            {weightResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono">{weightResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="temperature">
        <Card>
          <CardHeader>
            <CardTitle>Konversi Suhu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="tempValue">Nilai</Label>
              <Input
                id="tempValue"
                type="number"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                placeholder="Masukkan nilai"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Dari</Label>
                <Select value={tempFrom} onValueChange={setTempFrom}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celsius">Celsius</SelectItem>
                    <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                    <SelectItem value="kelvin">Kelvin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Ke</Label>
                <Select value={tempTo} onValueChange={setTempTo}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celsius">Celsius</SelectItem>
                    <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                    <SelectItem value="kelvin">Kelvin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={convertTemperature} className="w-full">
              Konversi
            </Button>
            {tempResult && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg font-mono">{tempResult}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default UnitConverter;
