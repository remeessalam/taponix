import React from "react";
import img1 from "../../assets/images/services-details/iot1.jpg"; // Replace with IoT image
import img2 from "../../assets/images/services-details/iot2.jpg"; // Replace with a second IoT-related image
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const IotDevelopment = () => {
  const prev = services[7];
  // const next = services[5];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="IoT Development"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Internet of Things (IoT) Development
        </h2>
        <p data-aos="fade-up" className="description">
          The Internet of Things (IoT) is revolutionizing industries by
          connecting devices, systems, and people to provide real-time data and
          automation. At <strong>TAPONIX INFINITY</strong>, we specialize in
          delivering cutting-edge IoT solutions that empower businesses to
          harness the power of connected devices for improved operations, better
          customer experiences, and smarter decision-making.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Unlock the Potential of Connected Devices
        </h2>
        <p data-aos="fade-up" className="description">
          With IoT, businesses can gather real-time data, improve efficiency,
          and automate processes. Whether it's in smart homes, healthcare,
          manufacturing, or logistics, we provide end-to-end IoT solutions—from
          device connectivity and data collection to real-time monitoring and
          predictive analytics.
          <br />
          <br />
          Our IoT services include developing custom IoT applications,
          integrating sensors, implementing cloud-based platforms for data
          analysis, and ensuring seamless communication across devices. We work
          with businesses to create scalable and secure IoT ecosystems that
          improve productivity and reduce operational costs.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="IoT Integration"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Real-Time Data Insights</h3>
            </div>
            <p>
              Our IoT solutions provide instant insights from your connected
              devices, helping businesses make informed decisions on the go.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Secure and Scalable Solutions
              </h3>
            </div>
            <p>
              We ensure that your IoT network is secure, scalable, and optimized
              to meet future demands, offering robust protection against cyber
              threats.
            </p>
          </div>
        </div>
      </div>

      <p>
        At <strong>TAPONIX INFINITY</strong>, we integrate IoT with advanced
        technologies such as AI, cloud computing, and machine learning to build
        solutions that deliver long-term value. Our team stays ahead of the
        curve to deliver high-performance, innovative IoT systems tailored to
        your unique business needs.
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

        {/* <Link to={next.link} className="flex items-center gap-3">
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
        </Link> */}
      </div>
    </div>
  );
};

export default IotDevelopment;
