import Image from "next/image"
import { products } from "@/lib/utlis/mock"
import { StaticImageData } from "next/image"
import { Button } from "@/components/ui/Button"
import { ShoppingCart } from "lucide-react"
import Order from "@/components/Order"
import ProductDetails from "@/components/ProductDetails"
export default function Page({ params }: { params: { productname: string } }){
    return (
    <div>
        {/* left side */}
        {products.filter(unit => unit.name === params.productname).map((item)=>(
            <div className="flex flex-col md:flex-row md:gap-x-24 gap-y-10">
                <div className="flex items-start gap-x-10">
                <Image src={item.image as StaticImageData} alt={"product small pic"} width={100} height={100}></Image>
                <Image src={item.image as StaticImageData} alt={"pic"}></Image>
                </div>
                {/* right side */}
                <Order name={item.name} price={item.price}/>
            </div>
        ))}
        <ProductDetails/>
    </div>
    )
  }