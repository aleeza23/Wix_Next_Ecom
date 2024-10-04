"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavIcons from "./NavIcons";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-40">
      <div className="flex gap-9 items-center">
      <NavIcons />
      <Image
        src="/menu-modified.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      </div>
      
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">Home</Link>
          <Link href="/list">All Products</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>         
        </div>
      )}
    </div>
  );
};

export default Menu;