import Head from "next/head";
import Image from "next/image";
import heroBg from "../../public/images/hero-bg.png";
import blupayDashboard from "../../public/images/User dashboard - Overview.png";
import ReachOutToUs from "@/components/ReachOutToUs";
import JoinWaitlistForm from "@/forms/JoinWaitlistForm";
import LaunchNotice from "@/components/LaunchNotice";
import FAQSection from "@/components/FAQSection";
import AvailableGlobally from "@/components/AvailableGlobally";
import BluPayFeatures from "@/components/BluPayFeatures";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import HeadingAndSubtext from "@/components/HeadingAndSubtext";
import ValueCard from "@/components/ValueCard";
import {
  FaAccessibleIcon,
  FaChalkboardTeacher,
  FaLightbulb,
  FaPray,
  FaShieldAlt,
  FaSimplybuilt,
  FaUniversalAccess,
  FaUserShield,
} from "react-icons/fa";
import { Fade } from "react-reveal";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>BluPay Finance | About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* HERO SECTION */}

        <section className="w-full flex justify-center align-middle mt-0 doodleBg globally text-center lg:px-64 mb-10">
          <div className="my-auto lg:h-auto w-full lg:mx-auto doodleBgBlue text-white lg:rounded-xl py-20 px-10">
            {/* <HeadingAndSubtext
              heading="About Us"
              textSize="4xl"
              subtext=" BluPay Finance simplifies the world of cryptocurrency payments by
              allowing users to send and make payments in stablecoins without the
              hassle of owning a crypto wallet. With BluPay, sending and receiving
              crypto payments is seamless, secure and accessible to everyone."
            /> */}

            <Fade up duration={800} delay={200}>
              <h1 className="text-4xl font-bold">About Us</h1>
            </Fade>
            <Fade duration={800} delay={800}>
              <p className="mt-7">
                BluPay Finance simplifies the world of cryptocurrency payments
                by allowing users to send and make payments in stablecoins
                without the hassle of owning a crypto wallet. With BluPay,
                sending and receiving crypto payments is seamless, secure and
                accessible to everyone.
              </p>
            </Fade>
          </div>
        </section>

        <section className="text-center p-14">
          <Fade up duration={800} delay={200}>
            <h2 className="text-blupayBlue text-4xl md:text-4xl lg:text-4xl mt-2 font-extrabold">
              Our Core Values
            </h2>
          </Fade>
          <Fade duration={800} delay={800}>
            <p className="text-lg mx-auto lg:max-w-4xl font-normal mt-3 lg:mt-3 md:my-14 max-w-lg text-black">
              The values we hold dear to ourself as a company.
            </p>
          </Fade>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 mt-16">
            {/* <ValueCard
              icon={<FaPray className="mx-auto text-3xl" />}
              valueTitle="Spirituality"
              valueText="BluPay places a high importance on Spirituality, Faith and Religious
        beliefs as these play a central role in our culture and decision-making
        process."
            /> */}

            <ValueCard
              icon={<FaShieldAlt className="mx-auto text-3xl" />}
              valueTitle="Security"
              valueText="We are committed to keeping user's payments and personal imformation safe and secure."
            />

            <ValueCard
              icon={<FaUniversalAccess className="mx-auto text-3xl" />}
              valueTitle="Accessibility"
              valueText="We believe in ease of access and use. We aim to make cryptocurrency payments available to everyone, regardless of their age ot technical expertise."
            />

            <ValueCard
              icon={<FaChalkboardTeacher className="mx-auto text-3xl" />}
              valueTitle="Simplicity"
              valueText="We also aim to simplify the world of cryptocurrency payments, making them accessible and easy to use by literally anyone."
            />

            <ValueCard
              icon={<FaLightbulb className="mx-auto text-3xl" />}
              valueTitle="Inovation"
              valueText="We are dedicated to developing new and innovative solutions that further enhance and ease the crypto payment experience."
            />
          </div>
        </section>

        {/* BE THE FIRST TO KNOW WHEN WE LAUNCH */}
        <div className="">
          <LaunchNotice />
        </div>

        {/* BLUPAY IS AVAILABLE GLOBALLY */}
        <div className="-mt-60 mb-30">
          <AvailableGlobally />
        </div>

        {/* GOT QUESTIONS? */}
        <div className="-mt-32 mb-30">
          <FAQSection />
        </div>

        {/* FOOTER */}
        <Footer />
      </Layout>
    </>
  );
}
