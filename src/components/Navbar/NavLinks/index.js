import Link from "next/link";
import { useState } from "react";
import {
  FaBarcode,
  FaBars,
  FaHamburger,
  FaLine,
  FaTimes,
  FaWindowClose,
} from "react-icons/fa";

const { default: NavItem } = require("../NavItem/item");

function NavLinks() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="text-white mt-4">
      <FaBars
        size={28}
        fontWeight={300}
        onClick={() => {
          setIsMobileMenuOpen(true);
        }}
        className="cursor-pointer md:hidden -mt-3"
      />
      <ul className="md:flex hidden justify-between w-full gap-14">
        <NavItem link="/" linkText="Home" />
        <NavItem link="/about-us" linkText="About" />
        <NavItem link="/products" linkText="Products" />
        <NavItem link="/use-cases" linkText="Use Cases" />
        <NavItem link="/company/contact-us" linkText="Contact Us" />
      </ul>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="min-h-screen md:hidden bg-black fixed z-10 olute top-0 right-0 w-2/3">
          <FaTimes
            size={28}
            onClick={() => setIsMobileMenuOpen(false)}
            className="float-right mt-12 mr-10 cursor-pointer"
          />
          <ul className="flex flex-col align-middle mt-52  justify-between w-full gap-14">
            <Link
              className="px-14 hover:bg-white hover:text-black py-5"
              href="/"
            >
              Home
            </Link>
            <Link
              className="px-14 hover:bg-white hover:text-black py-5"
              href="/about-us"
            >
              About
            </Link>
            {/* <Link
              className="px-14 hover:bg-white hover:text-black py-5"
              href="/how-it-works"
            >
              How it works
            </Link> */}
            <Link
              className="px-14 hover:bg-white hover:text-black py-5"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="px-14 hover:bg-white hover:text-black py-5"
              href="/company/contact-us"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavLinks;
