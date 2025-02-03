"use client"
import Image from "next/image";
import Rating from "@mui/material/Rating";
import React from "react";
import textClip from "../../../../utils/TextClip";

const ProductCard = ({ product }: any) => {
  const [value, setValue] = React.useState<number | null>(4);
  return (
    <div className="w-[240px]  cursor-pointer hover:shadow-lg flex flex-col  flex-1 shadow-md p-2 rounded-md">
      <div className="relative h-36  ">
        <Image
          src={product.image}
          fill
          alt="product"
          className="object-contain"
        />
      </div>
      <div className="text-center mt-2 space-y-1 ">
        <div>{ textClip(product.name)}</div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <div className="price text-orange-600 text-lg md:text-xl font-bold">
             {product.price}₺
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
