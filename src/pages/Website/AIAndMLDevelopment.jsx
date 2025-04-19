import React from "react";
import img1 from "../../assets/images/services-details/ai1.jpg";
import img2 from "../../assets/images/services-details/ai2.jpg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const AIAndMLDevelopment = () => {
  const prev = services[1];
  const next = services[3];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="ai & ml development"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          AI & ML Development
        </h2>
        <p data-aos="fade-up" className="description">
          At <strong>TAPONIX INFINITY</strong>, we harness the power of
          artificial intelligence (AI) and machine learning (ML) to transform
          businesses into data-driven, intelligent enterprises. Our AI/ML
          solutions are designed to automate complex tasks, derive valuable
          insights from massive datasets, and personalize user experiences at
          scale — empowering organizations to stay ahead in a rapidly evolving
          digital world.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Building Smarter, Predictive, and Adaptive Systems
        </h2>
        <p data-aos="fade-up" className="description">
          We partner closely with clients to understand specific business needs
          and deploy tailor-made AI and ML solutions. From intelligent process
          automation to predictive modeling, our development process is guided
          by strategy and scalability.
          <br />
          <br />
          Through advanced algorithms and neural networks, we build systems that
          learn, adapt, and evolve over time. Whether it’s customer behavior
          prediction, demand forecasting, fraud detection, or dynamic pricing
          models — our expertise helps clients turn raw data into competitive
          advantage.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="ai development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Empowerment Through Data
              </h3>
            </div>
            <p>
              We transform complex data into actionable intelligence, helping
              businesses make smarter, faster, and more informed decisions.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Future-Ready Solutions</h3>
            </div>
            <p>
              Our R&D-focused approach ensures you're always leveraging the
              latest AI/ML technologies to stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        At <strong>TAPONIX INFINITY</strong>, AI and ML are not just tools —
        they’re part of a larger strategy to redefine what's possible. With
        continuous innovation, ethical AI practices, and seamless integration
        into your workflows, we help you unlock the full potential of
        intelligent automation and smart analytics.
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

export default AIAndMLDevelopment;
