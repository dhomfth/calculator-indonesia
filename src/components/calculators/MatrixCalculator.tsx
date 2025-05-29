
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MatrixCalculator = () => {
  const [matrixA, setMatrixA] = useState([
    [0, 0],
    [0, 0]
  ]);
  const [matrixB, setMatrixB] = useState([
    [0, 0],
    [0, 0]
  ]);
  const [result, setResult] = useState<number[][] | null>(null);
  const [determinant, setDeterminant] = useState<number | null>(null);

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

  const addMatrices = () => {
    const resultMatrix = matrixA.map((row, i) =>
      row.map((val, j) => val + matrixB[i][j])
    );
    setResult(resultMatrix);
  };

  const subtractMatrices = () => {
    const resultMatrix = matrixA.map((row, i) =>
      row.map((val, j) => val - matrixB[i][j])
    );
    setResult(resultMatrix);
  };

  const multiplyMatrices = () => {
    const rows = matrixA.length;
    const cols = matrixB[0].length;
    const resultMatrix = Array(rows).fill().map(() => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        for (let k = 0; k < matrixA[0].length; k++) {
          resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
    setResult(resultMatrix);
  };

  const calculateDeterminant = () => {
    // Calculate determinant for 2x2 matrix
    if (matrixA.length === 2 && matrixA[0].length === 2) {
      const det = matrixA[0][0] * matrixA[1][1] - matrixA[0][1] * matrixA[1][0];
      setDeterminant(det);
    }
  };

  const transposeMatrix = () => {
    const transposed = matrixA[0].map((_, colIndex) =>
      matrixA.map(row => row[colIndex])
    );
    setResult(transposed);
  };

  const MatrixInput = ({ matrix, updateFunction, title }: {
    matrix: number[][];
    updateFunction: (row: number, col: number, value: string) => void;
    title: string;
  }) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {matrix.map((row, i) =>
            row.map((val, j) => (
              <Input
                key={`${i}-${j}`}
                type="number"
                value={val}
                onChange={(e) => updateFunction(i, j, e.target.value)}
                className="text-center"
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );

  const MatrixDisplay = ({ matrix, title }: { matrix: number[][]; title: string }) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {matrix.map((row, i) =>
            row.map((val, j) => (
              <div
                key={`${i}-${j}`}
                className="border border-gray-300 p-2 text-center bg-gray-50 rounded"
              >
                {val.toFixed(2)}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Tabs defaultValue="operations" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="operations">Operasi Matriks</TabsTrigger>
        <TabsTrigger value="properties">Sifat Matriks</TabsTrigger>
      </TabsList>

      <TabsContent value="operations">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MatrixInput matrix={matrixA} updateFunction={updateMatrixA} title="Matriks A" />
            <MatrixInput matrix={matrixB} updateFunction={updateMatrixB} title="Matriks B" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Button onClick={addMatrices} className="w-full">
              A + B
            </Button>
            <Button onClick={subtractMatrices} className="w-full">
              A - B
            </Button>
            <Button onClick={multiplyMatrices} className="w-full">
              A × B
            </Button>
          </div>

          {result && (
            <MatrixDisplay matrix={result} title="Hasil Operasi" />
          )}
        </div>
      </TabsContent>

      <TabsContent value="properties">
        <div className="space-y-6">
          <MatrixInput matrix={matrixA} updateFunction={updateMatrixA} title="Matriks" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Button onClick={calculateDeterminant} className="w-full">
              Hitung Determinan
            </Button>
            <Button onClick={transposeMatrix} className="w-full">
              Transpose Matriks
            </Button>
          </div>

          {determinant !== null && (
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg font-mono">Determinan = {determinant}</p>
              </CardContent>
            </Card>
          )}

          {result && (
            <MatrixDisplay matrix={result} title="Hasil" />
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default MatrixCalculator;
