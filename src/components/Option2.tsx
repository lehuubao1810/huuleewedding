"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Option2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const contactInfo = {
    email: "huuleewedding@gmail.com",
    phone: "0973254452",
    facebook: "khoi.le.923171",
    bookLink: "https://www.facebook.com/messages/t/khoi.le.923171",
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
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/484623416_2993110560848270_5661661586837652316_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGTIHPTWvi5RL9Wg5pjzTveYFOpq9QuPzJgU6mr1C4_MglprAVtG8cRO4t0EQPFCYFmDli-IVl-bGD_GwW6fuGn&_nc_ohc=Xy-yoaydkZEQ7kNvwEcIXhL&_nc_oc=Adny_Js_t2BbXNPrqWAbqS3fia2N4uhO4jeuRdC0POH5mG2C8NHs7Ffci0EgjaLP2HQyRI-mWnNedhffDt3Kf2Kg&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=JUW40_HanXqnoRUn-d7fqA&oh=00_AfKRDom5X3exvzke97Vh4MUGPi7CQuRNQ746tma5VCHNPw&oe=682B9BD7",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/485679240_122220248492223618_857476335857469154_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFYfyU1oRyl2hCXmwFzv72FKOae8QvvzYIo5p7xC-_NgvetKjWiEr-XuVaJQvSKI7J5V8RX3ffS9c0W9-J9LOfS&_nc_ohc=tdfk4NBcdoMQ7kNvwFTjEjN&_nc_oc=AdkvitISOerO9CuAWn-9q0AHvTiDRYQ84foYbLigbaDehyTHtHCT-JjoSva5Mc7qpFPho_i7ctz44lhlttxkY5A6&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=lxrTHe583GX2z7dbkhf3hg&oh=00_AfLdXlzBeFgjpZHXiZ6zDM3nnDU8TK8qhU8LT6UlXO7AUw&oe=682BA53F",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/482074565_2985080018317991_8549423661750283801_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKKaeWu2J6wceOcXjWOuq_Zbh-SkPrzbdluH5KQ-vNty0LXNUOA21WWMYyMjqVAefCdNbFCT4eqjPHJLtTHYUp&_nc_ohc=QM78dnXEvxUQ7kNvwF4Uvtz&_nc_oc=Adns_0Q_M2xvqovD0UGKI54mWN1rQ4x7DrwUQEX7uri6-HiZKpIf-KAG8yRXONXR24wGing9DZ8xZyWDckgBW4G4&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=GFTipYM-Ecw8ZPxPTR7YpQ&oh=00_AfIdco5VKQIMgts9n2Qw6ju3OTMwNNda64CdzFIs4r2h2Q&oe=682B7DDD",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/471737414_2922796414546352_712151977611285157_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGKF5hignpGVqO_TaCFlUHUpe_L6pyr6JSl78vqnKvomaGKQjG8KR4uAaBDotyEgAiQmdKxgLxkhDEUNb28fGf&_nc_ohc=1Zd6yXg8xpkQ7kNvwE4qcrM&_nc_oc=AdlvIvxzKtuOL_sPAzj70awh7GzSL-tFdKcGPha7qr2T5qPd8Sed_Ji9ZGaWBuv3SJggfIJmRkjdMWr3CVT-ah2A&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=lNBZwuUMubM39QVV6OFHQw&oh=00_AfKwwPcNqa09vxXEX7FSPxqvecGLCrLUKAnEfWB_0WLjyQ&oe=682B9809",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <Card className="w-full max-w-md overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-40 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <Avatar className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-32 h-32 border-4 border-white">
              <AvatarImage
                src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/461842561_2837560686403259_8550642243657599598_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGM5oSVb9usr8mO2MnRMlZKNhVYrn5cmUg2FViuflyZSL25PoiUBlw7_ZaIC20-7_OLcetSGov9nOEgl6bWHoG3&_nc_ohc=jG8786BjS5cQ7kNvwFu9cnn&_nc_oc=Adl1TEkaKWsWy8Td8XrQacUsGeZPV9cGSh5AF4xLgibEQokNaFvK7aixqmKUdzuywc32FefSp6P-PVD85bfECqZH&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=iA2ambUuobD5s1h0NF29pg&oh=00_AfI23c2AiSHFKEaVE_ImXWqbuT48WL4rbpNDZCSH46cpBw&oe=682B80E1"
                alt="Le Huu"
              />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
          <div className="pt-14 pb-4 px-4 text-center">
            <h2 className="text-2xl font-bold">Lê Hữu Minh Khôi</h2>
            <p className="text-sm text-muted-foreground">
              Professional Photographer
            </p>
            <div className="flex justify-center gap-2 mt-2">
              <div className="text-sm bg-gradient-to-r from-yellow-500 to-pink-500 py-1 rounded-full px-3 font-semibold text-white">
                4+ Năm
              </div>
              <div className="text-sm bg-gradient-to-r from-purple-500 to-blue-500 py-1 rounded-full px-3 font-semibold text-white">
                1000+ Shoots
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 px-4 mb-4">
            {["email", "phone", "facebook"].map((type) => (
              <Button
                key={type}
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() =>
                  handleContact(type as "email" | "phone" | "facebook")
                }
              >
                {type === "email" && <Mail className="h-4 w-4" />}
                {type === "phone" && <Phone className="h-4 w-4" />}
                {type === "facebook" && <Facebook className="h-4 w-4" />}
              </Button>
            ))}
          </div>
          <div className="px-4 mb-4">
            <h3 className="text-sm font-semibold mb-2">Thể loại</h3>
            <div className="flex flex-wrap gap-1">
              {[
                "Chân dung",
                "Phong cảnh",
                "Sự kiện",
                "Đường phố",
                "Đám cưới",
              ].map((specialty) => (
                <Badge key={specialty} variant="outline" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 px-4 pb-12">
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-3/4 h-[90%] bg-white p-2 rounded-lg shadow-lg flex justify-center items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg" 
                width={800}
                height={800}
              />
          </div>
        </div>
      )}
    </div>
  );
}
