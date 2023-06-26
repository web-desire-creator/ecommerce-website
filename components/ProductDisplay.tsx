import { StaticImageData } from "next/image"
import Image from "next/image"
export default function ProductDisplay(props:{img:StaticImageData, name:string, price:number}) {
    return (
    <div className="hover:scale-110 duration-500">
        <Image src={props.img} width={800} alt="Product Display"></Image>
        <div className=" flex justify-between">
        <div className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight">{props.name}</div>
        <div className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight">${props.price}</div>
        </div>
    </div>
  )
}
