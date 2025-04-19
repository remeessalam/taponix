import React from "react";
import img1 from "../../assets/images/services-details/data-science1.jpg"; // You can replace this with a data-science-specific image
import img2 from "../../assets/images/services-details/data-science2.jpg"; // Replace this too for more accuracy
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const DataScience = () => {
  const prev = services[5];
  const next = services[7];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="data science"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Data Science & Advanced Analytics
        </h2>
        <p data-aos="fade-up" className="description">
          At <strong>TAPONIX INFINITY</strong>, our Data Science services go
          beyond dashboards and reports—we extract actionable intelligence from
          complex datasets to power smarter business decisions. From predictive
          modeling to real-time insights, we help businesses transform raw data
          into strategic assets.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Turning Data Into Intelligence
        </h2>
        <p data-aos="fade-up" className="description">
          Whether you're navigating customer behavior, operational trends, or
          forecasting future outcomes, our team leverages advanced techniques in
          machine learning, AI, and statistical modeling to uncover hidden
          patterns and deliver ROI-driven insights.
          <br />
          <br />
          Our solutions cover everything from data preparation and cleansing to
          model development, deployment, and continuous optimization. With full
          lifecycle support, we empower companies to shift from reactive to
          proactive decision-making.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="data analytics"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Predictive & Prescriptive Insights
              </h3>
            </div>
            <p>
              Use AI-powered forecasting to anticipate outcomes and optimize
              strategies—before issues arise.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Scalable Data Pipelines</h3>
            </div>
            <p>
              Build robust ETL workflows that integrate seamlessly with your
              existing tech stack—making your data usable, secure, and scalable.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        As businesses generate more data than ever before, having the right team
        and tools is critical. <strong>TAPONIX INFINITY</strong> brings
        cutting-edge data science practices to your organization—driving
        innovation, efficiency, and competitive advantage through smart
        analytics.
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

export default DataScience;
