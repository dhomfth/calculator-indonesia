
import { useState } from "react";
import { Calculator, Book, Triangle, Sigma, Grid3X3, Ruler, ArrowRightLeft, ArrowRight, Sparkles, Mail, Phone, MapPin, User, Heart, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WelcomeScreenProps {
  onEnterCalculator: () => void;
}

const WelcomeScreen = ({ onEnterCalculator }: WelcomeScreenProps) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  const features = [
    {
      id: "basic",
      icon: Calculator,
      title: "Kalkulator Dasar",
      description: "Operasi aritmatika fundamental seperti penjumlahan, pengurangan, perkalian, dan pembagian",
      color: "from-red-400 to-pink-400",
      stats: "100% Akurat"
    },
    {
      id: "algebra",
      icon: Book,
      title: "Aljabar",
      description: "Pemecahan persamaan, sistem persamaan linear, dan operasi polynomial",
      color: "from-red-500 to-pink-500",
      stats: "Persamaan Kompleks"
    },
    {
      id: "trigonometry",
      icon: Triangle,
      title: "Trigonometri",
      description: "Fungsi sin, cos, tan dan operasi trigonometri lainnya",
      color: "from-red-600 to-pink-600",
      stats: "360° Coverage"
    },
    {
      id: "calculus",
      icon: Sigma,
      title: "Kalkulus",
      description: "Diferensiasi, integrasi, dan limit fungsi matematika",
      color: "from-pink-500 to-rose-500",
      stats: "Analisis Mendalam"
    },
    {
      id: "matrix",
      icon: Grid3X3,
      title: "Matriks",
      description: "Operasi matriks 2x2 dan 3x3, determinan, dan perkalian matriks",
      color: "from-pink-600 to-rose-600",
      stats: "2x2 & 3x3"
    },
    {
      id: "geometry",
      icon: Ruler,
      title: "Geometri",
      description: "Perhitungan luas, volume, keliling untuk berbagai bentuk geometri",
      color: "from-rose-500 to-red-500",
      stats: "2D & 3D"
    },
    {
      id: "converter",
      icon: ArrowRightLeft,
      title: "Konverter Unit",
      description: "Konversi satuan panjang, berat, suhu, dan lainnya",
      color: "from-rose-600 to-red-600",
      stats: "Multi Unit"
    }
  ];

  const stats = [
    { id: "users", number: "50K+", label: "Pengguna Aktif", icon: User },
    { id: "calculations", number: "1M+", label: "Perhitungan Selesai", icon: Calculator },
    { id: "accuracy", number: "99.9%", label: "Tingkat Akurasi", icon: Star },
    { id: "features", number: "7", label: "Fitur Lengkap", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 relative overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center p-4 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative p-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-2xl">
                  <Calculator className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                  Kalkulator
                </h1>
                <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent leading-tight">
                  Indonesia
                </h2>
                <div className="flex gap-2 mt-4">
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 px-4 py-2">
                    <Star className="h-4 w-4 mr-1" />
                    Solusi Terpercaya
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 px-4 py-2">
                    <Heart className="h-4 w-4 mr-1" />
                    Made in Indonesia
                  </Badge>
                </div>
              </div>
            </div>
            
            <p className="text-2xl text-red-700 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
              Platform kalkulator matematika paling lengkap dan canggih di Indonesia. 
              Dari perhitungan dasar hingga kalkulus tingkat lanjut, semua tersedia dalam satu tempat 
              dengan antarmuka yang elegan dan mudah digunakan.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <Card 
                    key={stat.id}
                    className={`border-red-200 shadow-lg transition-all duration-300 cursor-pointer ${
                      hoveredStat === stat.id ? 'scale-105 shadow-xl bg-gradient-to-br from-red-50 to-pink-50' : 'bg-white/80'
                    }`}
                    onMouseEnter={() => setHoveredStat(stat.id)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-red-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Fitur Lengkap & Canggih
              </h3>
              <p className="text-xl text-red-700 max-w-3xl mx-auto">
                Eksplorasi semua fitur matematika yang tersedia untuk mendukung pembelajaran dan pekerjaan Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <Card 
                    key={feature.id}
                    className={`border-red-200 shadow-xl transition-all duration-500 cursor-pointer transform ${
                      hoveredFeature === feature.id ? 'scale-110 shadow-2xl rotate-1' : 'hover:scale-105'
                    } bg-gradient-to-br from-white to-red-50 relative overflow-hidden`}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-full transform translate-x-8 -translate-y-8"></div>
                    
                    <CardHeader className={`bg-gradient-to-r ${feature.color} text-white rounded-t-lg relative z-10`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-7 w-7" />
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </div>
                        <Badge className="bg-white/20 text-white border-0 text-xs">
                          {feature.stats}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 relative z-10">
                      <p className="text-red-700 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-red-500 font-medium">Siap Digunakan</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white shadow-2xl border-0 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              
              <CardContent className="py-12 px-8 text-center relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Sparkles className="h-10 w-10 animate-spin" />
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Siap Memulai Perhitungan?
                  </h2>
                  <Sparkles className="h-10 w-10 animate-spin" style={{ animationDirection: 'reverse' }} />
                </div>
                <p className="text-red-100 mb-8 text-xl max-w-2xl mx-auto leading-relaxed">
                  Akses semua fitur kalkulator canggih kami secara gratis. 
                  Tidak perlu registrasi, langsung gunakan dan rasakan kemudahannya!
                </p>
                <Button 
                  onClick={onEnterCalculator}
                  size="lg"
                  className="bg-white text-red-600 hover:bg-red-50 font-bold text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-100 to-pink-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative flex items-center gap-3">
                    Masuk ke Kalkulator
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Hubungi Pengembang
              </h3>
              <p className="text-lg text-red-700 max-w-2xl mx-auto">
                Ada pertanyaan atau saran? Jangan ragu untuk menghubungi kami
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Email Contact */}
              <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-red-800 mb-2">Email</h4>
                  <p className="text-red-600 mb-4 break-all">ridhohusna02@gmail.com</p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg"
                    onClick={() => window.open("mailto:ridhohusna02@gmail.com", "_blank")}
                  >
                    Kirim Email
                  </Button>
                </CardContent>
              </Card>

              {/* Phone Contact */}
              <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-red-800 mb-2">WhatsApp</h4>
                  <p className="text-red-600 mb-4">+62 895 1027 5568</p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg"
                    onClick={() => window.open("https://wa.me/6289510275568", "_blank")}
                  >
                    Chat WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-red-800 mb-2">Lokasi</h4>
                  <p className="text-red-600 mb-4">
                    Indramayu, Jawa Barat<br />
                    Indonesia
                  </p>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0">
                    Indonesia
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-red-200">
            <div className="flex items-center justify-center gap-2 mb-4">
              <p className="text-red-600 font-semibold text-lg">
                Dibuat dengan
              </p>
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <p className="text-red-600 font-semibold text-lg">
                di Indonesia
              </p>
            </div>
            <p className="text-red-500 text-sm">
              © 2024 Kalkulator Indonesia - Solusi Matematika Terpercaya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
