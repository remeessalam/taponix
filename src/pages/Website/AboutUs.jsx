import React from "react";
import Header from "../../components/Website/Header";
import banner from "../../assets/images/about-us-page-banner.webp";
import line from "../../assets/images/line.png";
import img1 from "../../assets/images/about-us-page-2.png";
import img2 from "../../assets/images/about-us-page-3.png";
import projectsImg from "../../assets/images/icons/projects.png";
import clientsImg from "../../assets/images/icons/clients.png";
import awardsImg from "../../assets/images/icons/awards.png";
import bgShape from "../../assets/images/bg-shape.png";
import process1 from "../../assets/images/w-process1.png";
import process2 from "../../assets/images/w-process2.png";
import process3 from "../../assets/images/w-process3.png";
import arrow from "../../assets/images/icons/Arrow.png";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="landing-bg">
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={banner}
          width="800"
          height="600"
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>
      <section className="wrapper py-[5rem]">
        <div className="grid lg:grid-cols-2 lg:items-start gap-10">
          <div>
            <div data-aos="fade-up" className="flex items-center gap-3">
              <img src={line} alt="line" className="w-[3rem]" />
              <h6 className="font-medium text-secondary capitalize">
                Know about us
              </h6>
            </div>
            <h2 className="heading capitalize mt-5">
              The world’s IT networking company.
            </h2>
            <p className="mt-6">
              At AI Company, we are passionate about pushing the boundaries of
              technology to deliver world-class AI, blockchain, and machine
              learning solutions to businesses around the globe. Our team is a
              group of forward-thinking developers, data scientists, and
              innovators committed to transforming industries with custom
              AI-driven products and services.
            </p>
          </div>
          <div className="h-full w-full">
            <img
              loading="lazy"
              src={img1}
              width="500"
              height="400"
              alt="about us"
              className="object-contain max-h-[30rem] mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full grid lg:grid-cols-[60%_35%] items-end relative">
        <img
          loading="lazy"
          src={img2}
          alt="experience"
          width="800"
          height="600"
          className="w-full h-[80vh] lg:block hidden object-contain z-10 grayscale-[20%]"
        />
        <div
          data-aos="fade-left"
          className="px-6 flex flex-col items-center lg:items-start lg:pl-5 w-full z-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">Work Experience</h6>
          </div>
          <h2 className="text-[2rem] md:text-4xl capitalize text-center lg:text-start font-semibold mb-5">
            We specialize in custom -tailored
          </h2>
          <img
            loading="lazy"
            src={img2}
            width="400"
            height="300"
            alt="experience"
            className="w-full max-w-[20rem] block lg:hidden object-contain mx-auto object-right z-10"
          />
          <div className="z-10 bg-[#010C2A] w-full p-5 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]">
            <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
              <img
                loading="lazy"
                src={projectsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">50+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
              <img
                loading="lazy"
                src={clientsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Satisfied clients
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
              <img
                loading="lazy"
                src={awardsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">2+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">Awards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative my-[5rem]">
        <img
          loading="lazy"
          src={bgShape}
          className="w-[37%] absolute left-3 top-0 object-contain"
          alt=""
        />
        <img
          loading="lazy"
          src={bgShape}
          className="w-[37%] absolute right-3 rotate-[125deg] top-0 object-contain"
          alt=""
        />
        <div className="wrapper flex flex-col items-center">
          <div className="flex items-center gap-3 mb-5">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">Work Process</h6>
          </div>
          <h2 className="heading mt-2">Our Work Process</h2>
          <div className="grid lg:grid-cols-3 mt-10 gap-6 lg:gap-10">
            <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                loading="lazy"
                src={process1}
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
                width="100"
                height="100"
              />
              <h5 className="text-xl font-semibold">Goal Setting</h5>
              <p className="px-6 text-sm">
                We define clear goals to align with your vision and needs.
              </p>
              <img
                loading="lazy"
                src={arrow}
                className="h-[5rem] sm:h-[6rem] object-contain absolute right-[-2rem] sm:right-[-3.5rem] rotate-[100deg] lg:rotate-12 bottom-[-3.5rem] lg:top-0"
                alt=""
              />
            </div>
            <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                loading="lazy"
                src={process2}
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
                width="100"
                height="100"
              />
              <h5 className="text-xl font-semibold">Select Service</h5>
              <p className="px-6 text-sm">
                Choose the right solution tailored to your requirements.
              </p>
              <img
                loading="lazy"
                src={arrow}
                className="h-[5rem] sm:h-[6rem] object-contain absolute left-[-2rem] sm:left-[-3.5rem] lg:left-auto lg:right-[-3.5rem] rotate-[80deg] lg:-rotate-12 scale-y-[-1] bottom-[-3.5rem] sm:bottom-0"
                alt=""
              />
            </div>
            <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                loading="lazy"
                src={process3}
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
                width="100"
                height="100"
              />
              <h5 className="text-xl font-semibold">Solve Problem</h5>
              <p className="px-6 text-sm">
                We deliver smart solutions to overcome any challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper text-center">
        <h1 className="heading mb-6">Who We Are</h1>
        <p>
          Founded with the mission to drive digital transformation, AI Company
          specializes in providing cutting-edge AI, blockchain, and ML services
          across a wide range of sectors including energy, healthcare,
          e-commerce, real estate, and more. Our solutions are tailored to the
          unique needs of each client, ensuring the perfect blend of innovation
          and practicality.
          <br />
          <br />
          With a strong focus on empowering businesses, we offer a comprehensive
          suite of services that includes cloud computing, data analytics,
          cybersecurity, and advanced software development. We pride ourselves
          on delivering intelligent, scalable, and secure solutions that help
          our clients unlock new opportunities and achieve sustainable growth.
        </p>
      </section>
      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default AboutUs;
