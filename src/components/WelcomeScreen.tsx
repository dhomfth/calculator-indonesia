
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
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center p-4 md:p-8 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-8 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl md:rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative p-3 md:p-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl md:rounded-2xl shadow-2xl">
                  <Calculator className="h-8 w-8 md:h-16 md:w-16 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                  Kalkulator
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent leading-tight">
                  Indonesia
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2 md:mt-4">
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                    <Star className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    Solusi Terpercaya
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm">
                    <Heart className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    Made in Indonesia
                  </Badge>
                </div>
              </div>
            </div>
            
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-red-700 max-w-4xl mx-auto leading-relaxed mb-4 md:mb-8 font-medium px-4">
              Platform kalkulator matematika paling lengkap dan canggih di Indonesia. 
              Dari perhitungan dasar hingga kalkulus tingkat lanjut, semua tersedia dalam satu tempat 
              dengan antarmuka yang elegan dan mudah digunakan.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-12 max-w-4xl mx-auto px-4">
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
                    <CardContent className="p-3 md:p-6 text-center">
                      <div className="flex items-center justify-center mb-1 md:mb-2">
                        <div className="p-1 md:p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                          <IconComponent className="h-3 w-3 md:h-6 md:w-6 text-white" />
                        </div>
                      </div>
                      <div className="text-lg md:text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-red-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-8 md:mb-16">
            <div className="text-center mb-6 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 md:mb-4">
                Fitur Lengkap & Canggih
              </h3>
              <p className="text-sm md:text-xl text-red-700 max-w-3xl mx-auto px-4">
                Eksplorasi semua fitur matematika yang tersedia untuk mendukung pembelajaran dan pekerjaan Anda
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 px-4">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <Card 
                    key={feature.id}
                    className={`border-red-200 shadow-xl transition-all duration-500 cursor-pointer transform ${
                      hoveredFeature === feature.id ? 'scale-105 md:scale-110 shadow-2xl rotate-1' : 'hover:scale-105'
                    } bg-gradient-to-br from-white to-red-50 relative overflow-hidden`}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-10 h-10 md:w-20 md:h-20 bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-full transform translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8"></div>
                    
                    <CardHeader className={`bg-gradient-to-r ${feature.color} text-white rounded-t-lg relative z-10`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <IconComponent className="h-4 w-4 md:h-7 md:w-7" />
                          <CardTitle className="text-sm md:text-lg">{feature.title}</CardTitle>
                        </div>
                        <Badge className="bg-white/20 text-white border-0 text-xs">
                          {feature.stats}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 md:p-6 relative z-10">
                      <p className="text-red-700 text-xs md:text-sm leading-relaxed mb-2 md:mb-4">
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
          <div className="mb-8 md:mb-16 px-4">
            <Card className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white shadow-2xl border-0 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <CardContent className="py-6 md:py-12 px-4 md:px-8 text-center relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                  <Sparkles className="h-6 w-6 md:h-10 md:w-10 animate-spin" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    Siap Memulai Perhitungan?
                  </h2>
                  <Sparkles className="h-6 w-6 md:h-10 md:w-10 animate-spin" style={{ animationDirection: 'reverse' }} />
                </div>
                <p className="text-red-100 mb-4 md:mb-8 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Akses semua fitur kalkulator canggih kami secara gratis. 
                  Tidak perlu registrasi, langsung gunakan dan rasakan kemudahannya!
                </p>
                <Button 
                  onClick={onEnterCalculator}
                  size="lg"
                  className="bg-white text-red-600 hover:bg-red-50 font-bold text-base md:text-xl px-6 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-100 to-pink-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative flex items-center gap-2 md:gap-3">
                    Masuk ke Kalkulator
                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mb-6 md:mb-12 px-4">
            <div className="text-center mb-4 md:mb-8">
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 md:mb-4">
                Hubungi Pengembang
              </h3>
              <p className="text-sm md:text-lg text-red-700 max-w-2xl mx-auto">
                Ada pertanyaan atau saran? Jangan ragu untuk menghubungi kami
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {/* Email Contact */}
              <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-8 text-center">
                  <div className="flex items-center justify-center mb-2 md:mb-4">
                    <div className="p-2 md:p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl md:rounded-2xl">
                      <Mail className="h-4 w-4 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-red-800 mb-1 md:mb-2">Email</h4>
                  <p className="text-red-600 mb-2 md:mb-4 break-all text-xs md:text-base">ridhohusna02@gmail.com</p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg text-xs md:text-sm"
                    onClick={() => window.open("mailto:ridhohusna02@gmail.com", "_blank")}
                  >
                    Kirim Email
                  </Button>
                </CardContent>
              </Card>

              {/* Phone Contact */}
              <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-8 text-center">
                  <div className="flex items-center justify-center mb-2 md:mb-4">
                    <div className="p-2 md:p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl md:rounded-2xl">
                      <Phone className="h-4 w-4 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-red-800 mb-1 md:mb-2">WhatsApp</h4>
                  <p className="text-red-600 mb-2 md:mb-4 text-xs md:text-base">+62 895 1027 5568</p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg text-xs md:text-sm"
                    onClick={() => window.open("https://wa.me/6289510275568", "_blank")}
                  >
                    Chat WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-2xl transition-all duration-300 hover:scale-105 sm:col-span-1 col-span-full">
                <CardContent className="p-4 md:p-8 text-center">
                  <div className="flex items-center justify-center mb-2 md:mb-4">
                    <div className="p-2 md:p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl md:rounded-2xl">
                      <MapPin className="h-4 w-4 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-red-800 mb-1 md:mb-2">Lokasi</h4>
                  <p className="text-red-600 mb-2 md:mb-4 text-xs md:text-base">
                    Indramayu, Jawa Barat<br />
                    Indonesia
                  </p>
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 text-xs md:text-sm">
                    Indonesia
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 md:pt-8 border-t border-red-200">
            <div className="flex items-center justify-center gap-2 mb-2 md:mb-4">
              <p className="text-red-600 font-semibold text-sm md:text-lg">
                Dibuat dengan
              </p>
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-red-500 animate-pulse" />
              <p className="text-red-600 font-semibold text-sm md:text-lg">
                di Indonesia
              </p>
            </div>
            <p className="text-red-500 text-xs md:text-sm">
              © 2024 Kalkulator Indonesia - Solusi Matematika Terpercaya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
