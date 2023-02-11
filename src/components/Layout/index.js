import Navbar from "@/components/Navbar";
import Image from "next/image";

function Layout(props) {
  return (
    <main>
      {/* HERO BACKGROUND */}
      <div
        className={`min-h-screen absolute md:-top-10 left-0 w-full z-0 ${
          props.homeBg ? "doodleBgBlue" : ""
        } md:bg-transparent`}
      >
        {props.bg && (
          <Image
            src={props.bg}
            alt="Welcome to BluPay Finance"
            className="w-full h-full md:inline-block hidden"
          />
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="absolute top-0 w-full z-10">
        {/* NAVBAR */}
        <Navbar noBg={!props.homeBg && !props.bg ? true : false} />{" "}
        {...props.children}
      </div>
    </main>
  );
}

export default Layout;
