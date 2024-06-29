"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";

const Like = ({ productId }: { productId: number }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Heart
      className={cn("h-5 w-5 text-gray-600 cursor-pointer like-button")}
      fill={isLiked ? "red" : "white"}
      onClick={(e) => {
        e.stopPropagation();
        setIsLiked((prevState) => !prevState);
      }}
    />
  );
};

export default Like;
