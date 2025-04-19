import React from "react";
import img1 from "../../assets/images/services-details/web-development1.jpeg";
import img2 from "../../assets/images/services-details/web-development2.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const WebDevelopment = () => {
  const next = services[1];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Web Development: Building Websites that Work for You
        </h2>
        <p data-aos="fade-up" className="description">
          Your website is often the first point of contact with your audience,
          and we make sure it’s a lasting impression. At TAPONIX INFINITY, we
          specialize in creating custom, responsive websites that not only look
          great but work seamlessly. Whether it’s a sleek landing page or a
          complex e-commerce platform, we’ve got you covered.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Web Development Services
        </h2>
        <p data-aos="fade-up" className="description">
          We don’t just build websites; we create digital experiences that
          engage your visitors and drive results.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="web development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Custom Web Design</h3>
            </div>
            <p>
              Websites built to reflect your brand and goals, ensuring a
              professional and memorable presence.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Responsive Design</h3>
            </div>
            <p>
              Ensuring your site works flawlessly on all devices, from mobile
              phones to large desktop screens.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Content Management Systems
              </h3>
            </div>
            <p>
              Easy-to-use platforms like WordPress and Joomla, so you can manage
              your own content effortlessly.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">E-commerce Solutions</h3>
            </div>
            <p>
              Building secure and scalable online stores using platforms like
              Shopify and WooCommerce.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Ongoing Support</h3>
            </div>
            <p>
              We’re here to keep your website updated and running smoothly even
              after launch.
            </p>
          </div>
        </div>
      </div>

      <p className="description">
        At TAPONIX INFINITY, we blend creativity, technology, and strategy to
        deliver websites that are not just functional, but also aligned with
        your business objectives. Let’s build something great together.
      </p>
      <hr />
      <div className="flex flex-col sm:flex-row w-full justify-end gap-6">
        <Link to={next.link} className="flex items-center self-end gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] object-contain grayscale"
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

export default WebDevelopment;
