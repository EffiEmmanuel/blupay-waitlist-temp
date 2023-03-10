import Head from "next/head";
import Image from "next/image";
import heroBg from "../../../../public/images/hero-bg.png";
import blupayDashboard from "../../../../public/images/User dashboard - Overview.png";
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
import ContactForm from "@/forms/ContactForm";

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

        <section className="w-full text-center mt-44 my-28 mb-80">
          <HeadingAndSubtext
            heading="Reach out to us"
            subtext="We typically reply in less than 5 minutes"
          />
          {/* CONTACT US FORM */}
          <div className="mt-16">
            <ContactForm />
          </div>
        </section>

        {/* BE THE FIRST TO KNOW WHEN WE LAUNCH */}
        <div className="">
          <LaunchNotice />
        </div>

        {/* GOT QUESTIONS? */}
        {/* <div className="-mt-32 mb-30"> */}
        <FAQSection />
        {/* </div> */}

        {/* FOOTER */}
        <Footer />
      </Layout>
    </>
  );
}
