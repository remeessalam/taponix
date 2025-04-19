import React from "react";
import img1 from "../../assets/images/services-details/cloudcomputing1.jpg";
import img2 from "../../assets/images/services-details/cloudcomputing2.png";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const CloudComputing = () => {
  const prev = services[3];
  const next = services[5];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="cloud computing"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Cloud Computing Services
        </h2>
        <p data-aos="fade-up" className="description">
          At <strong>TAPONIX INFINITY</strong>, we deliver cloud-native
          solutions that scale with your business. From infrastructure to
          application deployment, our cloud services are designed to drive
          agility, reduce costs, and future-proof your IT ecosystem—empowering
          teams to innovate without limits.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Cloud-First, Future-Ready
        </h2>
        <p data-aos="fade-up" className="description">
          Embracing cloud computing means rethinking how you build, deploy, and
          manage digital operations. With benefits like reduced hardware
          investments, flexible resource scaling, and enhanced collaboration,
          cloud adoption accelerates digital transformation at every level.
          <br />
          <br />
          Our cloud expertise spans <strong>IaaS</strong> (Infrastructure as a
          Service), <strong>PaaS</strong> (Platform as a Service), and{" "}
          <strong>SaaS</strong> (Software as a Service), offering businesses the
          right foundation to build high-performance solutions. Whether you're
          migrating legacy infrastructure or launching a greenfield product, we
          ensure seamless deployment, optimization, and growth.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="cloud computing"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cost-Effective Scalability
              </h3>
            </div>
            <p>
              Dynamically scale resources to meet real-time demand. Eliminate
              the overhead of fixed infrastructure and pay only for what you
              use.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Expert Cloud Consulting & Support
              </h3>
            </div>
            <p>
              Our team provides strategic guidance across the entire cloud
              lifecycle—from planning and migration to optimization and ongoing
              support.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        <strong>TAPONIX INFINITY</strong> is dedicated to pushing the boundaries
        of what’s possible in the cloud. We stay ahead of the curve, constantly
        evolving our services to integrate the latest cloud-native technologies,
        security practices, and cost management strategies—so your business can
        scale smarter, faster, and stronger.
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

export default CloudComputing;
