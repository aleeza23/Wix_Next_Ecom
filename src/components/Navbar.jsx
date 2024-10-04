import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gray-900">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden ">
        <Link href="/" className="flex justify-center items-center my-auto">
          <Image src="/logo-modified.png" alt="Logo" width={120} height={120} />
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-2/3 flex items-center gap-12">
          <Link href="/" className="mt-10">
            <Image src="/logo-modified.png" alt="Logo" width={120} height={120} />
          </Link>
          <div className="hidden xl:flex gap-4 text-white">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/list" className="nav-link">All Products</Link>
            <Link href="/deals" className="nav-link">Deals</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-[55%] flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
