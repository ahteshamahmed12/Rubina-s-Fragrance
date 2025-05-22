import Link from 'next/link'
import React from 'react'
import { Search, Bookmark, CircleUser, ShoppingCart } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CartIndicator from './CartIndicator'

const Header = () => {
  const data = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  return (
    <div className="hidden lg:block w-full h-20 bg-black text-white mt-2">
      <div className="h-full flex justify-between items-center px-8 relative">
        
        <div>
          <h1 className="font-bold text-2xl ">RUBINA'S FRAGRANCE</h1>
        </div>

       
        <nav>
          <ul className="flex space-x-11 font-bold text-[18px]">
            {data.map(({ name, href }) => (
              <li
                key={href}
                className="cursor-pointer  transition-all duration-300 hover:scale-105"
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="flex space-x-8 items-center relative">
          <Link className="hover:text-[#db4444]" href="/search"><Search /></Link>
          <div className="relative">
            <Link className="hover:text-[#db4444]" href="/cart">
              <ShoppingCart />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#db4444] text-black text-xs font-bold flex items-center justify-center rounded-full">
                <CartIndicator />
              </div>
            </Link>
          </div>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <CircleUser />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/Signup">
                <DropdownMenuItem>Login</DropdownMenuItem>
              </Link>
              <Link href="/Register">
                <DropdownMenuItem>Register</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Header
