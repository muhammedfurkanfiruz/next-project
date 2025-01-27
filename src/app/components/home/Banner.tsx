import Image from "next/image";


const Banner = () => {
  return (
    <div className=" bg-black h-[237px]flex justify-center items-center py-3">
      <div className="h-[137px] relative w-full ">
         <Image src={"/hepsi.jpeg"} fill alt="banner"/>
      </div>
    </div>
  );
};

export default Banner;
