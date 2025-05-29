import { useState } from "react";
import { Calculator, Book, Home, Mail, User, Menu, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BasicCalculator from "@/components/calculators/BasicCalculator";
import AlgebraCalculator from "@/components/calculators/AlgebraCalculator";
import TrigonometryCalculator from "@/components/calculators/TrigonometryCalculator";
import CalculusCalculator from "@/components/calculators/CalculusCalculator";
import MatrixCalculator from "@/components/calculators/MatrixCalculator";
import GeometryCalculator from "@/components/calculators/GeometryCalculator";
import UnitConverter from "@/components/calculators/UnitConverter";
import ContactPage from "@/components/ContactPage";
import WelcomeScreen from "@/components/WelcomeScreen";

const Index = () => {
  const [currentView, setCurrentView] = useState("welcome");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (currentView === "welcome") {
    return <WelcomeScreen onEnterCalculator={() => setCurrentView("calculator")} />;
  }

  if (currentView === "contact") {
    return <ContactPage onBack={() => setCurrentView("calculator")} />;
  }

  const TabItems = () => (
    <>
      <TabsTrigger value="basic" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
        Dasar
      </TabsTrigger>
      <TabsTrigger value="algebra" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
        Aljabar
      </TabsTrigger>
      <TabsTrigger value="trigonometry" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
        Trigonometri
      </TabsTrigger>
      <TabsTrigger value="calculus" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
        Kalkulus
      </TabsTrigger>
      <TabsTrigger value="matrix" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
        Matriks
      </TabsTrigger>
      <TabsTrigger value="geometry" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
        Geometri
      </TabsTrigger>
      <TabsTrigger value="converter" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
        Konverter
      </TabsTrigger>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-red-200 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                <Calculator className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Kalkulator Indonesia
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2">
              <Button 
                variant={currentView === "calculator" ? "default" : "outline"}
                onClick={() => setCurrentView("calculator")}
                className={currentView === "calculator" 
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0" 
                  : "border-red-300 text-red-600 hover:bg-red-50"
                }
              >
                <Home className="h-4 w-4 mr-2" />
                Kalkulator
              </Button>
              <Button 
                variant={currentView === "contact" ? "default" : "outline"}
                onClick={() => setCurrentView("contact")}
                className={currentView === "contact" 
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0" 
                  : "border-red-300 text-red-600 hover:bg-red-50"
                }
              >
                <Mail className="h-4 w-4 mr-2" />
                Kontak
              </Button>
              <Button 
                variant="outline"
                onClick={() => setCurrentView("welcome")}
                className="border-red-300 text-red-600 hover:bg-red-50"
              >
                <Home className="h-4 w-4 mr-2" />
                Beranda
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-red-300 text-red-600">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gradient-to-b from-red-50 to-pink-50">
                  <div className="flex flex-col gap-4 mt-8">
                    <Button 
                      variant={currentView === "calculator" ? "default" : "outline"}
                      onClick={() => {
                        setCurrentView("calculator");
                        setMobileMenuOpen(false);
                      }}
                      className={currentView === "calculator" 
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 justify-start" 
                        : "border-red-300 text-red-600 hover:bg-red-50 justify-start"
                      }
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Kalkulator
                    </Button>
                    <Button 
                      variant={currentView === "contact" ? "default" : "outline"}
                      onClick={() => {
                        setCurrentView("contact");
                        setMobileMenuOpen(false);
                      }}
                      className={currentView === "contact" 
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 justify-start" 
                        : "border-red-300 text-red-600 hover:bg-red-50 justify-start"
                      }
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Kontak
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setCurrentView("welcome");
                        setMobileMenuOpen(false);
                      }}
                      className="border-red-300 text-red-600 hover:bg-red-50 justify-start"
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Beranda
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Kalkulator Matematika Lengkap
          </h2>
          <p className="text-lg text-red-700 max-w-2xl mx-auto leading-relaxed">
            Solusi lengkap untuk semua kebutuhan perhitungan matematika Anda. 
            Dari aritmatika dasar hingga kalkulus tingkat lanjut.
          </p>
        </div>

        <Tabs defaultValue="basic" className="w-full max-w-6xl mx-auto">
          {/* Desktop Tabs */}
          <TabsList className="hidden md:grid w-full grid-cols-7 mb-8 bg-white/80 border border-red-200 shadow-lg">
            <TabItems />
          </TabsList>

          {/* Mobile Tabs - Scrollable */}
          <div className="md:hidden mb-8">
            <TabsList className="w-full bg-white/80 border border-red-200 shadow-lg overflow-x-auto">
              <div className="flex gap-2 min-w-max px-2">
                <TabItems />
              </div>
            </TabsList>
          </div>

          <TabsContent value="basic">
            <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Kalkulator Dasar
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <BasicCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="algebra">
            <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Kalkulator Aljabar
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <AlgebraCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trigonometry">
            <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle>Kalkulator Trigonometri</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <TrigonometryCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculus">
            <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle>Kalkulator Kalkulus</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CalculusCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matrix">
            <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle>Kalkulator Matriks</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <MatrixCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geometry">
            <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle>Kalkulator Geometri</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <GeometryCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="converter">
            <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle>Konverter Unit</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <UnitConverter />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-800 to-pink-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Calculator className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Kalkulator Indonesia</h3>
              <p className="text-red-100">Perhitungan Matematika yang Mudah dan Akurat</p>
            </div>
          </div>
          <div className="border-t border-red-300 pt-4">
            <p className="text-red-100 mb-2">
              © 2024 Kalkulator Indonesia. Dibuat dengan ❤️ di Indonesia.
            </p>
            <p className="text-sm text-red-200">
              Hubungi pengembang: <span className="font-semibold">ridhohusna02@gmail.com</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
