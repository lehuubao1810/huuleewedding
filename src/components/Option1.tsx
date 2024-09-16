"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Camera, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function Option1() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const contactInfo = {
    email: "jane.doe@example.com",
    phone: "+11234567890",
    facebook: "janedoephotos",
    bookLink: "https://www.facebook.com/messages/t/bb.huubao",
    // https://www.facebook.com/messages/t/{user_id}
  };

  const handleContact = (type: "email" | "phone" | "facebook") => {
    switch (type) {
      case "email":
        window.location.href = `mailto:${contactInfo.email}`;
        break;
      case "phone":
        window.location.href = `tel:${contactInfo.phone}`;
        break;
      case "facebook":
        window.open(`https://facebook.com/${contactInfo.facebook}`, "_blank");
        break;
    }
  };

  const portfolioImages = [
    "https://drscdn.500px.org/photo/1100042226/q%3D80_m%3D600/v2?sig=f894bdb3ab2f59b88f5be1e1b21800e584d27aa9d9723d6da960e5a29c81f597",
    "https://drscdn.500px.org/photo/1098916806/q%3D80_m%3D600/v2?sig=abace265bfc60377de9595ebc8fcead204f4dde44d66d3f0b6858e8b39ab695a",
    "https://drscdn.500px.org/photo/1098931055/q%3D80_m%3D600_k%3D1/v2?sig=a4109b53b6e429a41296aa72f48e1b43a92d61d9158f4b8df202000fe9ceb50b",
    "https://drscdn.500px.org/photo/1100042977/q%3D80_m%3D600/v2?sig=b024992bf869ade6fd607700a08d89acc217ca652e64be83da5d9b192e63b024",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-spin"></div>
            <Avatar className="w-full h-full border-4 border-white rounded-full overflow-hidden relative z-10">
              <AvatarImage src="/avt2.jpg" alt="Le Huu" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl font-bold">Le Huu</CardTitle>
          <p className="text-sm text-muted-foreground mb-2">
            Professional Photographer
          </p>
          <div className="flex justify-center gap-2 mb-4">
            <Badge variant="secondary" className="text-sm py-1 px-2">
              4+ Năm
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-2">
              1000+ Shoots
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Liên hệ</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleContact("email")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleContact("phone")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Điện thoại
              </Button>
              <Button
                variant="default"
                size="sm"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleContact("facebook")}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Thể loại</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Chân dung</Badge>
              <Badge>Phong cảnh</Badge>
              <Badge>Sự kiện</Badge>
              <Badge>Đường phố</Badge>
              <Badge>Đám cưới</Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pb-12">
            {portfolioImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={150}
                height={150}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-auto object-cover rounded-md cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      <Link
        href={contactInfo.bookLink}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className="md:w-[40%] md:left-1/2 md:-translate-x-1/2 fixed rounded-md flex justify-center items-center py-2 bottom-4 left-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <Camera className="w-4 h-4 mr-2" />
        <p className="text-sm font-semibold">Đặt lịch</p>
      </Link>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl max-h-[80vh] w-[90vw]">
            <div className="relative">
              <Image
                width={800}
                height={800}
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
