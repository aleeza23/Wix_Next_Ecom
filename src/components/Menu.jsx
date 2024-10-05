"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavIcons from "./NavIcons";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the menu when the route changes
    setOpenMenu(false);
  }, [pathname]);

  return (
    <div className="z-40">
      <div className="flex gap-9 items-center">
        <NavIcons />
        <Image
          src="/menu-modified.webp"
          alt="menu"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      </div>

      {openMenu && (
        <div className="absolute bg-white shadow-xl border  border-b left-0 top-20 w-full h-max flex flex-col p-5 gap-3 text-xl z-10 rounded-b-xl">
          <Link href="/" onClick={() => setOpenMenu(false)}>Home</Link>
          <hr />
          <Link href="/list" onClick={() => setOpenMenu(false)}>All Products</Link>
          <hr />


          <Link href="/about" onClick={() => setOpenMenu(false)}>About</Link>
          <hr />

          <Link href="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>

        </div>
      )}
    </div>
  );
};

export default Menu;
