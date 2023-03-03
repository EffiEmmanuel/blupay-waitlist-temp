import Image from "next/image";
import FooterLinks from "./FooterLinks";
import blupayLogo from "../../../public/images/blupay-logowhite.png";
import twitterLogo from "../../../public/images/social-icons/twitter.png";
import facebookLogo from "../../../public/images/social-icons/facebook.png";
import linkedinLogo from "../../../public/images/social-icons/linkedin.png";
import instagramLogo from "../../../public/images/social-icons/instagram.png";

function Footer() {
  return (
    <footer className="doodleBgBlue text-white py-20 px-10">
      <div className="my-auto lg:flex lg:justify-between w-full">
        <div className="w-full lg:w-1/4 ml-5 lg:ml-0">
          <div className="w-36">
            <Image src={blupayLogo} alt="BluPay Finance" className="w-full" />
          </div>

          <div className="flex gap-x-5 mt-10 mb-5">
            <Image
              src={facebookLogo}
              alt="Click to follow BluPay Finance on Facebook"
              className="w-10 h-10"
            />
            <Image
              src={twitterLogo}
              alt="Click to follow BluPay Finance on Twitter"
              className="w-10 h-10"
            />
            <Image
              src={instagramLogo}
              alt="Click to follow BluPay Finance on Instagram"
              className="w-10 h-10"
            />
            <Image
              src={linkedinLogo}
              alt="Click to follow BluPay Finance on LinkedIn"
              className="w-10 h-10"
            />
          </div>

          <a href="mailto:@blupayfinance@gmail.com" className="font-light">
            helpdesk@blupay.finance
          </a>

          <p className="font-light w-full mt-10">
            All rights Reserved. © 2022 BluPay Inc.
          </p>
        </div>

        <div className="my-auto px-5 flex flex-col lg:flex-row lg:px-0 align-start justify-between w-full mt-10 flex-wrap">
          <FooterLinks
            linkHeading="Products"
            links={[
              "BluPay Send",
              "BluPay Wallet",
              "Payment Links",
              "BluPay StoreFront",
            ]}
            isInnerLink={true}
          />

          <FooterLinks
            linkHeading="Use Cases"
            links={[
              "Individuals",
              "Creators",
              "Businesses",
              "Freelancers",
              "Digital Platforms",
            ]}
            isInnerLink={true}
          />

          <FooterLinks
            linkHeading="Legal"
            links={["Privacy Policy", "Terms of Use", "Security", "KYC Policy"]}
            isInnerLink={true}
          />
        </div>
      </div>
      <div className="lg:mt-10 px-5 flex-col lg:flex-row lg:px-0 flex justify-between w-full">
        <FooterLinks linkHeading="" links={[""]} />
        <FooterLinks
          linkHeading="About"
          links={["About BluPay", "How it works", "Why use Blupay"]}
        />
        <FooterLinks
          linkHeading="Company"
          links={["FAQs", "Blog", "Careers", "Contact Us"]}
          isInnerLink={true}
        />

        <div className="lg:w-1/4 w-full my-5 mx-auto">
          <h4 className="font-semibold text-lg">For Developers</h4>
          <ul>
            <li className="mt-3 font-light italic">
              <a href="/about">Coming Soon!</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
