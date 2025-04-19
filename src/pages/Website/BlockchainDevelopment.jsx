import React from "react";
import img1 from "../../assets/images/services-details/blockchain1.jpg";
import img2 from "../../assets/images/services-details/blockchain2.jpeg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const BlockchainDevelopment = () => {
  const prev = services[2];
  const next = services[4];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-top"
        alt="blockchain"
      />

      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Blockchain Development
        </h2>
        <p data-aos="fade-up" className="description">
          At <strong>TAPONIX INFINITY</strong>, we build next-gen blockchain
          solutions that enhance trust, transparency, and traceability in
          digital ecosystems. Whether you're launching decentralized
          applications or automating secure agreements, our blockchain expertise
          enables your business to unlock new value across operations.
        </p>

        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Powering Innovation with Decentralization
        </h2>
        <p data-aos="fade-up" className="description">
          Blockchain isn't just about data security—it's about transformation.
          Our team helps you reimagine workflows through decentralized
          technologies that reduce fraud, eliminate intermediaries, and unlock
          new revenue models like tokenization, NFTs, and DeFi. From concept to
          deployment, we guide you through secure, scalable blockchain adoption
          tailored to your business needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="blockchain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Smart Contract Development
              </h3>
            </div>
            <p>
              Design and deploy tamper-proof smart contracts that automate
              business logic, enhance transparency, and minimize operational
              risks.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Decentralized Applications (DApps)
              </h3>
            </div>
            <p>
              Build DApps that operate independently of centralized
              control—enabling secure, user-owned ecosystems for finance, supply
              chains, and more.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        With <strong>TAPONIX INFINITY</strong>, blockchain becomes more than a
        buzzword—it becomes a tool for meaningful digital evolution. We help you
        tap into its full potential with expert strategy, robust development,
        and enterprise-grade implementation. Whether you're streamlining
        operations or disrupting markets, our blockchain solutions pave the way
        for future-ready infrastructure.
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

export default BlockchainDevelopment;
