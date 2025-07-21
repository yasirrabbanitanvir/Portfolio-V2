import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-[#111111cc] text-gray-300 pt-16 pb-24 px-6 sm:px-8 md:px-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

        <div className="flex flex-col items-center md:items-start space-y-3 w-full md:w-1/3">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="w-24 sm:w-28 md:w-36"
          />
          <p className="font-semibold text-lg text-white tracking-wider text-center md:text-left">
            YEASIR RABBANI TANVIR
          </p>
          <p className="text-gray-400 text-sm select-none text-center md:text-left">
            Copyright © {date.getFullYear()} - All rights reserved
          </p>
        </div>

        
        <nav className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-white text-2xl font-semibold mb-5">Social</h3>
          <p className="mb-6 text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
            Get in touch with me through social media platform.
          </p>
          <div className="flex justify-center md:justify-start space-x-8 text-3xl text-[#0a66c2]">
            <a href="https://www.linkedin.com/in/yasir-rabbani-tanvir/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-transform duration-200 ease-in-out hover:scale-125"
            >
              <FiLinkedin />
            </a>
            
            <a href="https://github.com/yasirrabbanitanvir" target="_blank" rel="noreferrer" aria-label="GitHub" 
            className="transition-transform duration-200 ease-in-out hover:scale-125 text-white cursor-pointer"> 
            <RiGithubLine /> </a>

            <a href="https://www.facebook.com/share/1GGAM3oAXH/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition-transform duration-200 ease-in-out hover:scale-125 text-blue-600"
            >
              <SlSocialFacebook />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;