import Logo from "@/public/Logo.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { menuitems, products } from "@/lib/utlis/mock";
import Link from "next/link";
export default function Header() {

  return (
    <div className="flex justify-between items-center py-16 ml-auto">
      <div className="flex-none">
      <Link href="/">
        <Image src={Logo} alt="Logo"></Image>
      </Link>
      </div>
      <div>
        <ul className="w-0 invisible md:w-full md:visible flex gap-x-20">
          {menuitems.map((item)=>(
            <div><Link href={`/${item}`}>{item}</Link></div>
          ))}
        </ul>
      </div>
      <div className="w-0 invisible max-w-xs md:w-full md:visible flex items-center gap-x-2">
        <Search className="flex-none" />
        <Input placeholder="What are you looking for?"/>
      </div>

      <div className="flex w-0 h-0 invisible md:visible md:flex-none md:w-10 md:h-10">
        <ShoppingCart />
      </div>
      <Menubar  className="md:w-0 md:hidden">
        <MenubarMenu>
          <MenubarTrigger>
            <div className="md:w-0 md:hidden">
              <Menu />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/female">Female</Link>{" "}
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/male">Male</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/female">Kids</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/products">All Products</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/">
              <div className="flex visible flex-none w-10 h-10">
        <ShoppingCart />
              </div>
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
