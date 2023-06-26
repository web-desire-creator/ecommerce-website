import { products } from "@/lib/utlis/mock"
import ProductDisplay from "@/components/ProductDisplay"
import { StaticImageData } from "next/image"
import Link from "next/link"
export default function page() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {
        
        products.map((item)=>(
            <div>
                <Link href={`/All%20Products/${item.name}`}>
                <ProductDisplay img= {item.image as StaticImageData} name={item.name} price={item.price}/>
                </Link>
            </div>
        ))}
    </div>
  )
}
