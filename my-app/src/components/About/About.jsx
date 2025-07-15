/* eslint-disable react/no-unescaped-entities */
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FcBriefcase } from "react-icons/fc";
import HeaderText from "../HeaderText/HeaderText";
import { Element, Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" id="about" data-aos="fade-down" data-aos-duration="600">
      <Element name="aboutEle"></Element>

      <HeaderText text1="Get to know" text2="About Me" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="md:w-1/2 " data-aos="fade-up" data-aos-duration="1200">
          <img
            src="assets/images/yrt1.png"
            alt="yeasir-image"
            className="max-w-sm rounded-lg hover:scale-90 ease-in-out transition duration-200"
          />
        </div>
        <div
          className=" text-lg md:text-xl md:w-3/4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <p
            className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            My name is{" "}
            <span className="text-primary font-semibold">
              Yeasir Rabbani Tanvir
            </span>
            . My academic background includes a{" "}
            <span className="text-primary font-semibold"> BSc</span> in Computer
            Science and Engineering
            <span className="text-primary font-semibold"> (CSE)</span> from
            Bangladesh University of Business and Technology, where I studied in the Engineering Department. I was
            born and raised in Galachipa, Patuakhali,{" "}
            <span className="text-primary font-semibold"> Bangladesh.</span>
          </p>

          <p
            className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            I am intrested in web developing with{" "}
            <span className="text-primary"> PHP</span>. I love to make
            websites and add life to them. Currently perfecting my learning in
            Full Stack developement. I am also learning and building websites
            using <span className="text-primary">Laravel</span>
          </p>
          <p
            className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Traveling is something I enjoy because it can provide a fresh
            outlook on everything. It brings me peace to scape from web world
            and enjoy the real world. I am always seeking out adventure and
            eager to learn about the world through travel.
          </p>
          <div className="p-8 mt-10 border-4 border-primary rounded-lg w-fit relative group hover:drop-shadow-md hover:shadow-primary transition duration-300 ">
          <FcBriefcase className="absolute text-5xl right-3 top-2 rotate-6 opacity-70 transition duration-300 group-hover:rotate-[20deg] group-hover:scale-125 "/>

            <h2 className="text-2xl font-bold py-3 textpri">Work Experience</h2>
            <div className="">
              <p>
                <span className="font-[500]">Front End Developer</span> at{" "}
                <a
                  href="https://softvence.agency/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700"
                >
                  Softvence LTD.
                </a>
              </p>
              <p className="text-base">Internship</p>
              <p className="text-base text-gray-700">March 2025 - April 2025</p>
              <p className="text-base text-gray-700">
                Bir Uttam AK Khandakar Rd, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            <button className="btn btn-secondary hover:btn- transition duration-300 ease-in-out hover:scale-105 mt-10 m-4">
              <MdOutlineConnectWithoutContact className="text-xl" /> Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;