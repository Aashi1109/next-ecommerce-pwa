"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ImageViewer = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [selectedImage, setSelectedImage] = useState(
    images.length ? images[0] : null
  );

  return (
    <div className="flex gap-2 w-full h-[400px]">
      {/* div to show small previews */}
      <div className="flex flex-col gap-4">
        {images?.map((image, index) => (
          <Image
            className={cn(
              "rounded-md object-contain border-gray-200 cursor-pointer",
              {
                "border-2 border-solid border-gray-400":
                  selectedImage === image,
              }
            )}
            src={image}
            alt={title}
            key={index}
            width={60}
            height={60}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {/* div to show main preview */}
      {selectedImage && (
        <div className="relative w-full">
          <Image
            className="object-contain w-full h-full"
            src={selectedImage}
            alt={title}
            fill
          />
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
