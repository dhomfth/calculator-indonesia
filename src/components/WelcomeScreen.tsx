
import { useState } from "react";
import { Calculator, Book, Triangle, Sigma, Grid3X3, Ruler, ArrowRightLeft, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WelcomeScreenProps {
  onEnterCalculator: () => void;
}

const WelcomeScreen = ({ onEnterCalculator }: WelcomeScreenProps) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const features = [
    {
      id: "basic",
      icon: Calculator,
      title: "Kalkulator Dasar",
      description: "Operasi aritmatika fundamental seperti penjumlahan, pengurangan, perkalian, dan pembagian",
      color: "from-red-400 to-pink-400"
    },
    {
      id: "algebra",
      icon: Book,
      title: "Aljabar",
      description: "Pemecahan persamaan, sistem persamaan linear, dan operasi polynomial",
      color: "from-red-500 to-pink-500"
    },
    {
      id: "trigonometry",
      icon: Triangle,
      title: "Trigonometri",
      description: "Fungsi sin, cos, tan dan operasi trigonometri lainnya",
      color: "from-red-600 to-pink-600"
    },
    {
      id: "calculus",
      icon: Sigma,
      title: "Kalkulus",
      description: "Diferensiasi, integrasi, dan limit fungsi matematika",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "matrix",
      icon: Grid3X3,
      title: "Matriks",
      description: "Operasi matriks 2x2 dan 3x3, determinan, dan perkalian matriks",
      color: "from-pink-600 to-rose-600"
    },
    {
      id: "geometry",
      icon: Ruler,
      title: "Geometri",
      description: "Perhitungan luas, volume, keliling untuk berbagai bentuk geometri",
      color: "from-rose-500 to-red-500"
    },
    {
      id: "converter",
      icon: ArrowRightLeft,
      title: "Konverter Unit",
      description: "Konversi satuan panjang, berat, suhu, dan lainnya",
      color: "from-rose-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-2xl">
              <Calculator className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Kalkulator Indonesia
              </h1>
              <Badge className="mt-2 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
                Solusi Matematika Lengkap
              </Badge>
            </div>
          </div>
          <p className="text-xl text-red-700 max-w-3xl mx-auto leading-relaxed">
            Platform kalkulator matematika paling lengkap di Indonesia. Dari perhitungan dasar hingga kalkulus tingkat lanjut, 
            semua tersedia dalam satu tempat dengan antarmuka yang mudah digunakan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.id}
                className={`border-red-200 shadow-xl transition-all duration-300 cursor-pointer transform ${
                  hoveredFeature === feature.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                } bg-gradient-to-br from-white to-red-50`}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader className={`bg-gradient-to-r ${feature.color} text-white rounded-t-lg`}>
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-6 w-6" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-red-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Siap Memulai Perhitungan?</h2>
          </div>
          <p className="text-red-100 mb-6 text-lg">
            Akses semua fitur kalkulator canggih kami secara gratis. Tidak perlu registrasi!
          </p>
          <Button 
            onClick={onEnterCalculator}
            size="lg"
            className="bg-white text-red-600 hover:bg-red-50 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Masuk ke Kalkulator
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-red-600 font-semibold">
            Dibuat dengan ❤️ di Indonesia
          </p>
          <p className="text-red-500 text-sm mt-1">
            © 2024 Kalkulator Indonesia - Solusi Matematika Terpercaya
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
