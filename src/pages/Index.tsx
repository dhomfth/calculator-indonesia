
import { useState } from "react";
import { Calculator, Book, Home, Mail, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicCalculator from "@/components/calculators/BasicCalculator";
import AlgebraCalculator from "@/components/calculators/AlgebraCalculator";
import TrigonometryCalculator from "@/components/calculators/TrigonometryCalculator";
import CalculusCalculator from "@/components/calculators/CalculusCalculator";
import MatrixCalculator from "@/components/calculators/MatrixCalculator";
import GeometryCalculator from "@/components/calculators/GeometryCalculator";
import UnitConverter from "@/components/calculators/UnitConverter";
import ContactPage from "@/components/ContactPage";

const Index = () => {
  const [currentView, setCurrentView] = useState("calculator");

  if (currentView === "contact") {
    return <ContactPage onBack={() => setCurrentView("calculator")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calculator className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Kalkulator Aljabar Indonesia</h1>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={currentView === "calculator" ? "default" : "outline"}
                onClick={() => setCurrentView("calculator")}
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Kalkulator
              </Button>
              <Button 
                variant={currentView === "contact" ? "default" : "outline"}
                onClick={() => setCurrentView("contact")}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Kontak
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kalkulator Matematika Lengkap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk semua kebutuhan perhitungan matematika Anda. 
            Dari aritmatika dasar hingga kalkulus tingkat lanjut.
          </p>
        </div>

        <Tabs defaultValue="basic" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="basic">Dasar</TabsTrigger>
            <TabsTrigger value="algebra">Aljabar</TabsTrigger>
            <TabsTrigger value="trigonometry">Trigonometri</TabsTrigger>
            <TabsTrigger value="calculus">Kalkulus</TabsTrigger>
            <TabsTrigger value="matrix">Matriks</TabsTrigger>
            <TabsTrigger value="geometry">Geometri</TabsTrigger>
            <TabsTrigger value="converter">Konverter</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Kalkulator Dasar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BasicCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="algebra">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Kalkulator Aljabar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AlgebraCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trigonometry">
            <Card>
              <CardHeader>
                <CardTitle>Kalkulator Trigonometri</CardTitle>
              </CardHeader>
              <CardContent>
                <TrigonometryCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculus">
            <Card>
              <CardHeader>
                <CardTitle>Kalkulator Kalkulus</CardTitle>
              </CardHeader>
              <CardContent>
                <CalculusCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matrix">
            <Card>
              <CardHeader>
                <CardTitle>Kalkulator Matriks</CardTitle>
              </CardHeader>
              <CardContent>
                <MatrixCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geometry">
            <Card>
              <CardHeader>
                <CardTitle>Kalkulator Geometri</CardTitle>
              </CardHeader>
              <CardContent>
                <GeometryCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="converter">
            <Card>
              <CardHeader>
                <CardTitle>Konverter Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <UnitConverter />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 Kalkulator Aljabar Indonesia. Dibuat dengan ❤️ di Indonesia.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Hubungi pengembang: ridhohusna02@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
