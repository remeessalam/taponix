import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.jpg";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black/50" />
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5">
        <div className="flex flex-col gap-4 items-start justify-center">
          <p
            data-aos="fade-right"
            className="bg-[#ECECF2] p-1 text-gray-900 text-sm"
          >
            IT Services
          </p>
          <h1
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight"
          >
            TAPONIX INFINITY - Powering the Future with Intelligent Solutions
          </h1>
          <p data-aos="fade-right" className="text-sm text-gray-100">
            Harness the full potential of Artificial Intelligence, Blockchain,
            and Cloud Computing to revolutionize your business processes. AI
            Company delivers customized, next-gen technology solutions that
            enhance innovation, optimize efficiency, and open the doors to new
            growth avenues. Our mission is to empower businesses to thrive in a
            rapidly evolving digital landscape.
          </p>
          <Link
            to="/contact"
            data-aos="fade-right"
            className="primary-btn mt-10"
          >
            Get Started
          </Link>
        </div>
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
          <img
            loading="lazy"
            id="robot"
            src={robot}
            srcset={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            alt="robot"
            width="600"
            height="400"
            class="h-[30vh] lg:h-[40vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
