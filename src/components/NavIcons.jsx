"use client";

import Image from "next/image";
import { useEffect } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {

  const { wixClient, isCartOpen, setIsCartOpen } = useWixClient();

  // TEMPORARY
  // const isLoggedIn = false;
  const { cart, counter, getCart } = useCartStore();



  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);




  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )} */}
      <Image
        src="/notification-modified.png"
        alt="notification-icon"
        width={22}
        height={22}
        className="cursor-pointer "
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart-modified.png" alt="cart-icon" width={22} height={22} className=" " />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-600 rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal isOpen={isCartOpen} setIsOpen={setIsCartOpen} />}
    </div>
  );
};

export default NavIcons;
