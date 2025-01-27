import Image from "next/image"


const ProductCard = ({product}:any) => {
  return (
    <div className="w-[240px]  cursor-pointer hover:shadow-lg flex flex-col flex-1 shadow-md p-2 rounded-md">
        <div className="relative h-36  ">
            <Image src={product.image} fill alt="product" className="object-contain"/>
        </div>
        <div className="text-center mt-2 ">
            <div>
                {product.name}
            </div>
        </div>
        </div>
  )
}

export default ProductCard