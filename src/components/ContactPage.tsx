
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User, ArrowLeft } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage = ({ onBack }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </Button>
            <h1 className="text-2xl font-bold text-gray-800">Kontak Pengembang</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Hubungi Pengembang
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Terima kasih telah menggunakan Kalkulator Aljabar Indonesia. 
              Jika Anda memiliki pertanyaan, saran, atau ingin berkolaborasi, 
              jangan ragu untuk menghubungi saya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">ridhohusna02@gmail.com</p>
                    <a 
                      href="mailto:ridhohusna02@gmail.com"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Kirim Email
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Nomor Telepon</h3>
                    <p className="text-gray-600">+62 895 1027 5568</p>
                    <a 
                      href="tel:+6289510275568"
                      className="text-green-600 hover:text-green-800 text-sm"
                    >
                      Hubungi via Telepon
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Alamat</h3>
                    <p className="text-gray-600">
                      Indramayu, Jawa Barat<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Developer */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Tentang Pengembang</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Ridho Husna</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Pengembang web dan software yang berfokus pada pembuatan aplikasi 
                    matematika dan edukatif. Berpengalaman dalam teknologi React, 
                    TypeScript, dan berbagai framework modern untuk menciptakan 
                    solusi pembelajaran yang interaktif dan mudah digunakan.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Keahlian:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "TypeScript", "JavaScript", "Node.js", 
                      "Python", "Matematika", "Web Development", "UI/UX Design"
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    "Komitmen saya adalah menciptakan tools matematika yang dapat 
                    membantu siswa, mahasiswa, dan profesional dalam memecahkan 
                    masalah matematika dengan mudah dan akurat."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ingin Berkolaborasi atau Ada Saran?
                </h3>
                <p className="mb-6 text-blue-100">
                  Saya selalu terbuka untuk diskusi tentang pengembangan fitur baru, 
                  kolaborasi project, atau sekadar berbagi ide tentang matematika dan teknologi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() => window.open("mailto:ridhohusna02@gmail.com", "_blank")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Kirim Email
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100"
                    onClick={() => window.open("https://wa.me/6289510275568", "_blank")}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
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
