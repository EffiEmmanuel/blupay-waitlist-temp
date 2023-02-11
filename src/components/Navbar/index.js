import Link from "next/link";
import blupayLogo from "../../../public/images/blupay-logowhite.png";
const { default: Image } = require("next/image");
const { default: NavLinks } = require("./NavLinks");

function Navbar(props) {
  return (
    <div
      className={`flex justify-between align-middle px-10 py-5 ${
        props.noBg ? " bg-black" : ""
      }`}
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
