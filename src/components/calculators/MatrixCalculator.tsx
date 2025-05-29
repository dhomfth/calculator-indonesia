
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MatrixCalculator = () => {
  const [matrixSize, setMatrixSize] = useState<"2x2" | "3x3">("2x2");
  const [matrixA, setMatrixA] = useState([[1, 2], [3, 4]]);
  const [matrixB, setMatrixB] = useState([[5, 6], [7, 8]]);
  const [result, setResult] = useState<number[][] | null>(null);
  const [operation, setOperation] = useState("add");

  const initializeMatrices = (size: "2x2" | "3x3") => {
    if (size === "2x2") {
      setMatrixA([[1, 2], [3, 4]]);
      setMatrixB([[5, 6], [7, 8]]);
    } else {
      setMatrixA([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      setMatrixB([[9, 8, 7], [6, 5, 4], [3, 2, 1]]);
    }
    setResult(null);
  };

  const handleMatrixSizeChange = (size: "2x2" | "3x3") => {
    setMatrixSize(size);
    initializeMatrices(size);
  };

  const updateMatrixA = (row: number, col: number, value: string) => {
    const newMatrix = [...matrixA];
    newMatrix[row][col] = parseFloat(value) || 0;
    setMatrixA(newMatrix);
  };

  const updateMatrixB = (row: number, col: number, value: string) => {
    const newMatrix = [...matrixB];
    newMatrix[row][col] = parseFloat(value) || 0;
    setMatrixB(newMatrix);
  };

  const addMatrices = (a: number[][], b: number[][]) => {
    return a.map((row, i) => row.map((val, j) => val + b[i][j]));
  };

  const subtractMatrices = (a: number[][], b: number[][]) => {
    return a.map((row, i) => row.map((val, j) => val - b[i][j]));
  };

  const multiplyMatrices = (a: number[][], b: number[][]) => {
    const result = Array(a.length).fill(null).map(() => Array(b[0].length).fill(0));
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          result[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    return result;
  };

  const calculateDeterminant = (matrix: number[][]) => {
    if (matrix.length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    } else if (matrix.length === 3) {
      return (
        matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
        matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
        matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
      );
    }
    return 0;
  };

  const calculate = () => {
    switch (operation) {
      case "add":
        setResult(addMatrices(matrixA, matrixB));
        break;
      case "subtract":
        setResult(subtractMatrices(matrixA, matrixB));
        break;
      case "multiply":
        setResult(multiplyMatrices(matrixA, matrixB));
        break;
      case "determinant":
        const detA = calculateDeterminant(matrixA);
        setResult([[detA]]);
        break;
      default:
        break;
    }
  };

  const renderMatrix = (matrix: number[][], isEditable: boolean, updateFunction?: (row: number, col: number, value: string) => void) => (
    <div className="inline-block border-2 border-red-300 rounded-lg p-3 bg-gradient-to-br from-red-50 to-pink-50">
      {matrix.map((row, i) => (
        <div key={i} className="flex gap-2 mb-2 last:mb-0">
          {row.map((val, j) => (
            <Input
              key={`${i}-${j}`}
              value={val}
              onChange={(e) => updateFunction && updateFunction(i, j, e.target.value)}
              readOnly={!isEditable}
              className="w-16 h-12 text-center font-mono text-sm border-red-200 focus:border-red-400"
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Matrix Size Selector */}
      <Card className="border-red-200 shadow-lg bg-gradient-to-br from-white to-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">Ukuran Matriks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              variant={matrixSize === "2x2" ? "default" : "outline"}
              onClick={() => handleMatrixSizeChange("2x2")}
              className={matrixSize === "2x2" 
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0" 
                : "border-red-300 text-red-600 hover:bg-red-50"
              }
            >
              Matriks 2×2
            </Button>
            <Button
              variant={matrixSize === "3x3" ? "default" : "outline"}
              onClick={() => handleMatrixSizeChange("3x3")}
              className={matrixSize === "3x3" 
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0" 
                : "border-red-300 text-red-600 hover:bg-red-50"
              }
            >
              Matriks 3×3
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-red-200 shadow-lg bg-gradient-to-br from-white to-red-50">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="text-lg">Matriks A ({matrixSize})</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderMatrix(matrixA, true, updateMatrixA)}
          </CardContent>
        </Card>

        <Card className="border-red-200 shadow-lg bg-gradient-to-br from-white to-red-50">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="text-lg">Matriks B ({matrixSize})</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderMatrix(matrixB, true, updateMatrixB)}
          </CardContent>
        </Card>
      </div>

      <Card className="border-red-200 shadow-lg bg-gradient-to-br from-white to-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">Operasi Matriks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { op: "add", label: "Penjumlahan" },
              { op: "subtract", label: "Pengurangan" },
              { op: "multiply", label: "Perkalian" },
              { op: "determinant", label: "Determinan A" }
            ].map(({ op, label }) => (
              <Button
                key={op}
                variant={operation === op ? "default" : "outline"}
                onClick={() => setOperation(op)}
                className={operation === op 
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0" 
                  : "border-red-300 text-red-600 hover:bg-red-50"
                }
              >
                {label}
              </Button>
            ))}
          </div>

          <Button 
            onClick={calculate} 
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3"
          >
            Hitung
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-red-200 shadow-lg bg-gradient-to-br from-red-50 to-pink-50">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              Hasil
              <Badge variant="secondary" className="bg-white text-red-600">
                {operation === "add" ? "A + B" : 
                 operation === "subtract" ? "A - B" : 
                 operation === "multiply" ? "A × B" : "det(A)"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderMatrix(result, false)}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MatrixCalculator;
