'use client';

import React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser, Menu, Search, ShoppingCart } from 'lucide-react';
import CartIndicator from './CartIndicator';

const Headers = () => {
  return (
    <div className="lg:hidden w-full bg-black text-white py-3 px-4 shadow-md mt-2">
      <div className="flex flex-wrap items-center justify-between w-full">
        
        {/* Menu Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-yellow-200">
            <Menu className="w-5 h-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black font-medium">
           
            <Link href="/"><DropdownMenuItem>Home</DropdownMenuItem></Link>
            <Link href="/shop"><DropdownMenuItem>Shop</DropdownMenuItem></Link>
            <Link href="/about"><DropdownMenuItem>About Us</DropdownMenuItem></Link>
            <Link href="/contact-us"><DropdownMenuItem>Contact Us</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Center Logo */}
        <h1 className="text-sm font-bold  whitespace-nowrap">RUBINA'S FRAGRANCE</h1>

        {/* Right Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <Link href="/search" className="hover:text-yellow-200">
            <Search className="w-5 h-5" />
          </Link>

          <div className="relative">
            <Link href="/cart" className="hover:text-yellow-200">
              <ShoppingCart className="w-5 h-5" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#fcfb00] text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                <CartIndicator />
              </div>
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-yellow-200">
              <CircleUser className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black font-medium">
              <Link href="/Signup"><DropdownMenuItem>Login</DropdownMenuItem></Link>
              <Link href="/Register"><DropdownMenuItem>Register</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Headers;
