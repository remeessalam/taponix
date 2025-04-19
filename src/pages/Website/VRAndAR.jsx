import React from "react";
import img1 from "../../assets/images/services-details/arvr1.jpg";
import img2 from "../../assets/images/services-details/arvr2.jpeg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const VRAndAR = () => {
  const prev = services[4];
  const next = services[6];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="vr and ar"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          VR & AR Development
        </h2>
        <p data-aos="fade-up" className="description">
          At <strong>TAPONIX INFINITY</strong>, we design and build cutting-edge
          Virtual Reality (VR) and Augmented Reality (AR) experiences that
          bridge the digital and physical worlds. These technologies are
          reshaping how people interact with content — creating immersive,
          dynamic, and impactful user journeys across industries.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Transforming Interaction Through Immersion
        </h2>
        <p data-aos="fade-up" className="description">
          From immersive product showcases to interactive training simulations,
          our VR and AR solutions are tailored to your industry needs. We work
          across sectors like healthcare, education, real estate, and
          entertainment to craft digital environments that drive learning,
          engagement, and performance.
          <br />
          <br />
          In healthcare, we develop VR-powered simulations for surgical training
          — enabling medical professionals to practice in safe, realistic
          settings. In education, AR brings learning materials to life, turning
          passive content into interactive experiences. Our creative engineering
          ensures every application is built with impact and usability in mind.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-contain rounded-md"
            alt="vr and ar"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Tailored Immersive Solutions
              </h3>
            </div>
            <p>
              Every solution is custom-built to serve specific industry use
              cases, enhancing user engagement through interactive design and
              meaningful storytelling.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Future-Forward Innovation
              </h3>
            </div>
            <p>
              Through continuous research and a creative-first approach, we
              deliver solutions that push boundaries — helping our clients lead
              in experience design and innovation.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        At <strong>TAPONIX INFINITY</strong>, our mission is to make immersive
        tech intuitive, impactful, and accessible. Every VR and AR solution is
        designed with the end user in mind — combining beautiful visuals with
        seamless functionality. Whether you're training teams, educating users,
        or showcasing products, we help you captivate audiences in entirely new
        ways.
      </p>

      <hr />

      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={prev.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{prev.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              <IoIosArrowRoundBack className="text-2xl" /> Previous
            </p>
          </div>
        </Link>
        <Link to={next.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VRAndAR;
