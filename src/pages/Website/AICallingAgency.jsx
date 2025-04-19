import React from "react";
import img1 from "../../assets/images/services-details/aicalling1.jpg"; // Replace with relevant AI calling image
import img2 from "../../assets/images/services-details/aicalling2.jpg"; // Replace with a second relevant image
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const AICallingAgency = () => {
  const prev = services[6];
  const next = services[8];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="AI Calling"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          AI Calling Solutions & Automation
        </h2>
        <p data-aos="fade-up" className="description">
          Step into the future of communication with{" "}
          <strong>TAPONIX INFINITY’s AI Calling Solutions</strong>. We provide
          intelligent voice automation services tailored for modern
          businesses—from customer support and appointment booking to lead
          generation and feedback collection. Our AI agents can handle thousands
          of simultaneous calls with natural, human-like interaction.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Revolutionize Your Customer Experience
        </h2>
        <p data-aos="fade-up" className="description">
          Using advanced NLP (Natural Language Processing), speech synthesis,
          and conversational AI, we help businesses reduce response time, scale
          operations, and increase customer satisfaction. Whether you're in real
          estate, healthcare, e-commerce, or finance, our AI voice assistants
          can deliver 24/7 service that feels personal and professional.
          <br />
          <br />
          Our AI calling platform integrates with CRMs, calendars, and customer
          databases, offering a seamless and fully automated workflow. From
          outbound promotional calls to inbound query resolution, we automate
          repetitive conversations so your team can focus on what matters.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="AI Voice Agent"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Human-Like Voice Interaction
              </h3>
            </div>
            <p>
              Deliver smooth, empathetic, and responsive conversations that make
              your customers feel heard—without human agents.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Seamless CRM & API Integration
              </h3>
            </div>
            <p>
              Easily plug into your existing tools—HubSpot, Salesforce, Google
              Calendar, and more—for smarter automation.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        At <strong>TAPONIX INFINITY</strong>, we're building the next generation
        of customer interaction. Our AI calling solutions are constantly
        evolving with real-time learning and sentiment analysis, giving your
        business a competitive edge in every conversation.
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

export default AICallingAgency;
