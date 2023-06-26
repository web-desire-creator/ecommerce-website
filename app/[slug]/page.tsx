import { products } from "@/lib/utlis/mock"
import ProductDisplay from "@/components/ProductDisplay"
import { StaticImageData } from "next/image"
export default function Page({ params }: { params: { slug: string } }) {
    return <div  className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {products.filter(unit => unit.catagory === params.slug).map((item)=>(
            <div>
                <ProductDisplay img= {item.image as StaticImageData} name={item.name} price={item.price}/>
            </div>
        ))}
    </div>
  }