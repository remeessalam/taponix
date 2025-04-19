import React from "react";
import img1 from "../../assets/images/services-details/app-development1.jpeg";
import img2 from "../../assets/images/services-details/app-development2.jpg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const AppDevelopment = () => {
  const prev = services[0];
  const next = services[2];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="app development"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          App Development: Smart, Scalable, User-Focused
        </h2>
        <p data-aos="fade-up" className="description">
          In today’s mobile-first world, a high-performance app isn’t just nice
          to have — it’s a business necessity. At{" "}
          <strong>TAPONIX INFINITY</strong>, we craft mobile applications that
          are sleek, scalable, and built with the end-user in mind. Whether
          you're building a native app for iOS or Android or prefer a
          cross-platform solution, we combine performance and usability to
          deliver powerful mobile experiences that engage and convert.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Approach to App Development
        </h2>
        <p data-aos="fade-up" className="description">
          We take a full-lifecycle approach — from concept to deployment and
          continuous support. Our team specializes in:
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="app development"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Native & Hybrid App Development
              </h3>
            </div>
            <p>
              We build native iOS and Android apps for top performance and
              tailor hybrid apps using Flutter and React Native for fast,
              cost-effective multi-platform deployment.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cross-Platform Development
              </h3>
            </div>
            <p>
              Reach more users with a single codebase. Our cross-platform apps
              maintain consistency, speed, and usability across both Android and
              iOS ecosystems.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        Accessibility and convenience are at the core of our mobile solutions.
        With intuitive UI/UX, real-time data handling, and integrated analytics,
        we ensure your users stay engaged — anytime, anywhere. At{" "}
        <strong>TAPONIX INFINITY</strong>, we don’t just code apps; we engineer
        mobile experiences that align with your business goals, deliver real
        value, and adapt to your users’ expectations.
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

export default AppDevelopment;
