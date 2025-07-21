// import { BsCarFront, BsFillBuildingsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import SliderProject from "../SliderProject/SliderProject";

const ProjectCard = () => {
 
  const project1 = [
  "/assets/images/kp-first.png",
  "/assets/images/kp-second.png",
  "/assets/images/kp-third.png",
  "/assets/images/kp-fourth.png",
];

const project2 = [
  "/assets/images/tt-first.png",
  "/assets/images/tt-second.png",
  "/assets/images/tt-third.png",
  "/assets/images/tt-fourth.png",
];

const project3 = [
  "/assets/images/ac-first.png",
  "/assets/images/ac-second.png",
  "/assets/images/ac-third.png",
  "/assets/images/ac-fourth.png",
];

  return (
    <div className="my-16 space-y-6 md:space-y-12">
      
      {/* Project 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl transition duration-150 bg-cyan-50 items-center border" data-aos="fade-right" data-aos-duration="800">
        <div className="content">
          <SliderProject projectImages={project1} />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">E-COMMERCE WEBSITE (PHP)</h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            Full-stack food delivery website developed using HTML, CSS, JavaScript, jQuery, PHP, and MySQL. There is -
            <span className="font-semibold"> Users and Admin </span> role for this website.
            <br />
            Admin manages the orders, total sales and user roles. Stripe payment is available.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="/assets/images/MySQL.png" alt="MySQL" className="w-10" />
            <img src="/assets/images/html5.png" alt="html" className="w-10" />
            <img src="/assets/images/js.png" alt="js" className="w-10" />
            <img src="/assets/images/php.png" alt="php" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email: <span className="text-sky-700">admin@gmail.com</span></p>
            <p>Demo password: <span className="text-sky-700">123456</span></p>
          </div>
          <div className="font-semibold my-8 space-x-6">
            <Link to="https://github.com/yasirrabbanitanvir/Khudalagsebd" target="_blank" className="hover:text-primary">
              Code <FaGithub className="inline" />
            </Link>
            <Link to="http://khudalagsebd.online/" target="_blank" className="hover:text-primary">
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl transition duration-150 bg-cyan-50 items-center border" data-aos="fade-right" data-aos-duration="800">
        <div className="block md:hidden">
          <SliderProject projectImages={project2} />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">TRAVEL WEBSITE (REACT.JS)</h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            Developed a responsive travel site with info on 6 countries. Added dark/light mode and styled the UI using DaisyUI, Mamba UI, Swiper, and SweetAlert2.
            <br />
            Users can add, update, and delete countries in their personalized list using local state.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="/assets/images/css.png" alt="css" className="w-10" />
            <img src="/assets/images/js.png" alt="js" className="w-10" />
            <img src="/assets/images/react.png" alt="react" className="w-10" />
            <img src="/assets/images/fire.png" alt="firebase" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email: <span className="text-sky-700">admin@gmail.com</span></p>
            <p>Demo password: <span className="text-sky-700">1234</span></p>
          </div>
          <div className="font-semibold my-8 space-x-6">
            <Link to="https://github.com/yasirrabbanitanvir/Trip-Time" target="_blank" className="hover:text-primary">
              Code <FaGithub className="inline ml-4" />
            </Link>
            <Link to="https://triptime24.vercel.app/" target="_blank" className="hover:text-primary">
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
        <div className="md:block hidden">
          <SliderProject projectImages={project2} />
        </div>
      </div>

      {/* Project 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl transition duration-150 bg-cyan-50 items-center" data-aos="fade-right" data-aos-duration="800">
        <div>
          <SliderProject projectImages={project3} />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">AI INTEGRATED WEBSITE (FLASK)</h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            Integrated an AI model to classify animals in real-time from uploaded images.
            <br />
            Designed for seamless user interaction with accurate and fast predictions.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="/assets/images/html5.png" alt="html" className="w-10" />
            <img src="/assets/images/css.png" alt="css" className="w-10" />
            <img src="/assets/images/js.png" alt="js" className="w-10" />
            <img src="/assets/images/python.png" alt="python" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email: <span className="text-sky-700">admin@email.com</span></p>
            <p>Demo password: <span className="text-sky-700">123456</span></p>
          </div>
          <div className="font-semibold my-8 space-x-6">
            <Link to="https://github.com/yasirrabbanitanvir/Animal-ai-V2" target="_blank" className="hover:text-primary">
              Code <FaGithub className="inline ml-4" />
            </Link>
            <Link to="https://animalai.vercel.app/" target="_blank" className="hover:text-primary">
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;