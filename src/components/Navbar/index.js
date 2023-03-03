import Link from "next/link";
import { useEffect, useState } from "react";
import blupayLogo from "../../../public/images/blupay-logowhite.png";
const { default: Image } = require("next/image");
const { default: NavLinks } = require("./NavLinks");

function Navbar(props) {
  const [showBg, setShowBg] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowBg("bg-black");
      } else {
        setShowBg("");
      }
    });
  });

  return (
    <div
      className={`flex transition-[background-color] ease-in-out fixed top-0 z-50 w-full justify-between align-middle px-10 py-5 ${
        props.noBg ? " bg-black" : ""
      } ${showBg}`}
    >
      <div className="md:w-44 w-36">
        <Link href="/">
          <Image src={blupayLogo} alt="BluPay Finance" className="w-full" />
        </Link>
      </div>
      <NavLinks />
    </div>
  );
}

export default Navbar;
