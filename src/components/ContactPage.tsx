
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User, ArrowLeft, Calculator } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage = ({ onBack }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-red-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={onBack} 
              className="flex items-center gap-2 border-red-300 text-red-600 hover:bg-red-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Kontak Pengembang
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Hubungi Pengembang
            </h2>
            <p className="text-lg text-red-700 max-w-2xl mx-auto leading-relaxed">
              Terima kasih telah menggunakan Kalkulator Aljabar Indonesia. 
              Jika Anda memiliki pertanyaan, saran, atau ingin berkolaborasi, 
              jangan ragu untuk menghubungi saya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Information */}
            <Card className="h-fit border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-800 mb-1">Email</h3>
                    <p className="text-red-600 mb-2">ridhohusna02@gmail.com</p>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                      onClick={() => window.open("mailto:ridhohusna02@gmail.com", "_blank")}
                    >
                      Kirim Email
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-800 mb-1">Nomor Telepon</h3>
                    <p className="text-red-600 mb-2">+62 895 1027 5568</p>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                      onClick={() => window.open("https://wa.me/6289510275568", "_blank")}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-800 mb-1">Alamat</h3>
                    <p className="text-red-600">
                      Indramayu, Jawa Barat<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Developer */}
            <Card className="h-fit border-red-200 shadow-xl bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle>Tentang Pengembang</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-lg border border-red-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-red-800">Ridho Husna</h3>
                  </div>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Pengembang web dan software yang berfokus pada pembuatan aplikasi 
                    matematika dan edukatif. Berpengalaman dalam teknologi React, 
                    TypeScript, dan berbagai framework modern untuk menciptakan 
                    solusi pembelajaran yang interaktif dan mudah digunakan.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-red-800 text-lg">Keahlian:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "React", "TypeScript", "JavaScript", "Node.js", 
                      "Python", "Matematika", "Web Development", "UI/UX Design"
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-lg text-sm font-medium text-center border border-red-200 hover:from-red-200 hover:to-pink-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-red-200">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
                    <p className="text-sm text-red-700 italic leading-relaxed">
                      "Komitmen saya adalah menciptakan tools matematika yang dapat 
                      membantu siswa, mahasiswa, dan profesional dalam memecahkan 
                      masalah matematika dengan mudah dan akurat."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 md:mt-12">
            <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-0 shadow-xl">
              <CardContent className="py-8 md:py-12 px-6">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ingin Berkolaborasi atau Ada Saran?
                  </h3>
                  <p className="mb-6 md:mb-8 text-red-100 max-w-2xl mx-auto leading-relaxed">
                    Saya selalu terbuka untuk diskusi tentang pengembangan fitur baru, 
                    kolaborasi project, atau sekadar berbagi ide tentang matematika dan teknologi.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="bg-white text-red-600 hover:bg-red-50 font-semibold shadow-lg"
                      onClick={() => window.open("mailto:ridhohusna02@gmail.com", "_blank")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Kirim Email
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="bg-white text-green-600 hover:bg-green-50 font-semibold shadow-lg"
                      onClick={() => window.open("https://wa.me/6289510275568", "_blank")}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
