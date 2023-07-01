import { cookies } from "next/dist/client/components/headers"
import Checkout from "@/components/Checkout";
import { Button } from "@/components/ui/Button";
async function getData() {
  const res = await fetch(`http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

interface data{
  id : number,
  user_id: string,
  product_id: string,
  quantity:number,
  size: string,
  price:number
}

export default async function Home() {

  const response:data[] = await getData();
  
  return (
    <div >
    {
        response.length>0?
        response.map((item: any, index:any) => (
         <div className="my-10">
           <Checkout key={index} name={item.product_id} price={item.price} size={item.size} quantity={item.quantity}/>
         </div> 
        )):<div className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          No Products available
          </div>
      }
      <div className="flex justify-center">
        <Button>Proceed to Payment</Button>
      </div>
        </div>
  )
}
