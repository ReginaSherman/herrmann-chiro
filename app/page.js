import Image from "next/image";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./components/Header"), {
  ssr: false,
});
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Form from "./components/Form";
import doc from "public/DocJohnny.png";
import spine from "public/icons/spine.svg";
import acu from "public/icons/acupuncture.svg";
import phys from "public/icons/phys.svg";
import map from "public/small-map.jpg";
import practice from "public/practice.jpg";
import chiro from "public/stock-chiro.jpg";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "700",
  preload: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="/">
        <div className="homepage-hero">
          <HeroSlider />
          <div className="wrapper">
            <div className="hero-text">
              <div className="left-side">
                <h1 className={`h1 ${oswald.className}`}>
                  Getting You Back To Your Best
                </h1>
                <p className="description">
                  Experience safe, effective and hands on chiropractic care in
                  the heart of Steubenville, Ohio. At Herrmann Chiropractic, we
                  are dedicated to helping you achieve optimal health and
                  wellness through natural and holistic methods.
                </p>
              </div>
              <div className="buttons-container">
                <a className="button primary">Make an Appointment</a>
                <a
                  href="https://intake.mychirotouch.com/?clinic=MC0078"
                  className="button secondary"
                  target="_blank"
                >
                  Get Intake Form
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="about-us" className="section about-us">
          <div className="wrapper">
            <div className="left-side">
              <div className="image-container mbl-only">
                <Image src={doc} alt="Dr. Johnny" />
              </div>
              <div className="text-container">
                <h2>About Us</h2>
                <p>
                  Our mission at Herrmann Chiropractic is to help individuals
                  and families of all ages by offering exceptional chiropractic
                  care to as many people as possible in a comfortable, caring,
                  and friendly environment. Our goal is to inspire and educate
                  our patients to become active participants in their own well
                  being.
                </p>
              </div>
              <div className="services">
                <h3>Our Services Include</h3>
                <div className="services-container">
                  <div className="service">
                    <Image src={spine} alt="spine icon" />
                    <p>Chiropractic Care</p>
                  </div>
                  <div className="service">
                    <Image src={acu} alt="acupuncture icon" />
                    <p>Acupuncture</p>
                  </div>
                  <div className="service">
                    <Image src={phys} alt="physical therapy icon" />
                    <p>Rehabilitation Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="image-container">
                <Image src={doc} alt="Dr. Johnny" />
              </div>
            </div>
          </div>
        </section>

        <section id="new-patient" className="section new-patient">
          <div className="wrapper">
            <div className="container-inner">
              <h2>New Patient</h2>
              <p>
                Welcome to our office! We look forward to serving you with a
                stellar staff and the absolute best in chiropractic care! Please
                take a moment to access the below link for our new patient
                intake.
              </p>
              <p>
                If you have any questions, please call our office at
                740-314-5812.
              </p>
              <p>Again, thank you for allowing us to serve you!</p>
              <div className="buttons-container">
                <button href='tel:740-314-5812' className="button primary">Call to Schedule</button>
                <a
                  href="https://intake.mychirotouch.com/?clinic=MC0078"
                  className="button secondary"
                  target="_blank"
                >
                  Get Intake Form
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="expect" className="section what-to-expect">
          <div className="wrapper">
            <h2>What To Expect</h2>
            <p>
              On your first visit, you&apos;ll meet with the chiropractor to
              discuss your health concerns and determine if chiropractic care is
              appropriate for your specific situation. This will be followed by
              a comprehensive evaluation of your chiropractic, orthopedic and
              neurological systems. Depending on the diagnosis, advanced
              diagnostics may be considered. Once the diagnosis is determined,
              the chiropractor will discuss treatment options with you and start
              you on the path to better health.
            </p>
            <p>
              While each individual&apos;s experience may differ, the majority
              of patients achieve the level of health they desire through
              chiropractic care. Your journey to great health involves making
              healthy choices and engaging in appropriate activities. With
              guidance and effort from our team, we will help you reach your
              healthcare goals, whether it&apos;s pain relief or overall
              wellness.
            </p>
          </div>
        </section>

        {/* <section className="section conditions">
          <div className="wrapper">
            <div className="container-inner">
              <h2 className="uppercase">
                Conditions treated by Chiropractic care
              </h2>
              <ul className="conditions-list">
                <li>scoliosis</li>
                <li>vertigo</li>
                <li>pinched nerves</li>
                <li>foot pain</li>
                <li>weight loss</li>
                <li>whiplash</li>
                <li>stress</li>
                <li>headaches</li>
                <li>disc injury</li>
                <li>allergies</li>
                <li>hip pain</li>
                <li>pregnancy care</li>
                <li>leg pain</li>
                <li>muscle spasms</li>
                <li>carpal tunnel syndrome</li>
                <li>immune deficiencies</li>
                <li>restless leg syndrome</li>
                <li>automotive accident injuries</li>
                <li>premenstrual syndrome (PMS)</li>
                <li>temporomandibular joint syndrome (TMJ)</li>
                <li>chronic fatigue</li>
                <li>shoulder pain</li>
                <li>arm pain</li>
                <li>sciatica</li>
                <li>fibromyalgia</li>
                <li>slipped discs</li>
                <li>sports injuries</li>
                <li>dizziness</li>
                <li>knee pain</li>
                <li>back pain</li>
              </ul>
            </div>
          </div>
        </section> */}

        <section id="location" className="section location">
          <div className="wrapper">
            <h2>Our Location</h2>
            <div className="location-container">
              <div className="location-grid">
                <div className="map">
                  <Image src={map} alt="alt" />
                </div>
                <div className="practice">
                  <Image src={practice} alt="alt" />
                </div>
                <div className="address">
                  <h3>2315 Sunset Blvd Steubenville, Ohio 43952</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section form">
          <Image src={chiro} alt="alt" />
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}
