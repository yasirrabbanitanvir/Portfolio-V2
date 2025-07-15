import { BsCarFront, BsFillBuildingsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import SliderProject from "../SliderProject/SliderProject";
const ProjectCard = () => {
  const project1 = [

          // <img src="assets/images/kp (1).png" alt="image"/>,
          // <img src="assets/images/kp (2).png" alt="image"/>,
          // <img src="assets/images/kp (3).png" alt="image"/>,
          // <img src="assets/images/kp (3).png" alt="image"/>

  ];

  const project2 = [
    // "https://i.imgur.com/mEaH2ts.png",
    // "https://i.imgur.com/RVkfpN9.png",
    // "https://i.imgur.com/LmnQbpC.png",
    // "https://i.imgur.com/SU7hQlR.png",
    // "https://i.imgur.com/OnQdcVY.png"
  ];
  const project3 = [
    // "https://i.imgur.com/d6Y4B8D.png",
    // "https://i.imgur.com/3Hmi51N.png",
    // "https://i.imgur.com/NxWTtU9.png",
    // "https://i.imgur.com/p06Y0kn.png",
    // "https://i.imgur.com/UiJdpIg.png"
  ];
  return (
    <div className="my-16 space-y-6 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 bg-cyan-50 items-center border" data-aos="fade-right"  data-aos-duration="800">
        <div className="content">
          <SliderProject projectImages={project1}></SliderProject>
          {/* <div className="screen">
          <img src="https://i.ibb.co/vJMP6T6/hompage.png"  className="cursor-pointer"/>
        </div> */}
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            E-COMMERCE WEBSITE (PHP)
            {/* {" "}
            <BsFillBuildingsFill className="text-3xl text-primary inline ml-4" /> */}
          </h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
           Full-stack food delivery website developed using HTML, CSS,
 JavaScript, jQuery, PHP, and MySQL. There is -{" "}
            <span className="font-semibold">Users and Admin </span>
            role for this website.
            <br />
            Admin manages the orders , total sales and user roles. Stripe
            payment is available.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/MySQL.png" alt="MySQL" className="w-10" />
            <img
              src="assets/images/html5.png"
              alt="html"
              className="w-10"
            />
            <img src="assets/images/js.png" alt="react" className="w-10" />
            <img src="assets/images/php.png" alt="node" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email : <span className="text-sky-700">admin@gmail.com</span> </p>
            <p>Demo password : <span className="text-sky-700">123456</span> </p>
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to={"https://github.com/yasirrabbanitanvir/Khudalagsebd"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link>
            <Link
              to={"http://khudalagsebd.online/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 text-center justify-center shadow-md p-6 rounded-xl   transition duration-150 bg-cyan-50 items-center border "  data-aos="fade-right"  data-aos-duration="800">
        <div className="block md:hidden">
        <SliderProject projectImages={project2}></SliderProject>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
             BLOG WEBSITE (REACT.JS)
            {/* <BsCarFront className="text-3xl text-rose-600 inline ml-4" /> */}
          </h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            Developed a dynamic blog website using React.js and MySQL. Implemented state management features for real-time content
 updates.
            <br />
           Designed with a focus on interactivity and smooth user
 experience.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/js.png" alt="js" className="w-10" />
            <img src="assets/images/react.png" alt="react" className="w-10" />
            <img
              src="assets/images/php.png"
              alt="php"
              className="w-10"
            />
            <img src="assets/images/MySQL.png" alt="MySQL" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email : <span className="text-sky-700">admin@gmail.com</span> </p>
            <p>Demo password : <span className="text-sky-700">1234</span> </p>
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to={"https://github.com/yasirrabbanitanvir/Blogwebsite"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://00blogweb.vercel.app/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
        <div className="md:block hidden">
        <SliderProject projectImages={project2}></SliderProject>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl   transition duration-150 bg-cyan-50 items-center"  data-aos="fade-right"  data-aos-duration="800">
        <div>
        <SliderProject projectImages={project3}></SliderProject>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
             AI INTEGRATED WEBSITE (FLASK)
          </h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            Integrated an AI model to classify animals in real-time from
 uploaded images.
            <br />
           Designed for seamless user interaction with accurate and fast
 predictions.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/html5.png" alt="html" className="w-10" />
            <img src="assets/images/css.png" alt="css" className="w-10" />
            <img
              src="assets/images/js.png"
              alt="js"
              className="w-10"
            />
            <img src="assets/images/python.png" alt="python" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email : <span className="text-sky-700">admin@email.com</span> </p>
            <p>Demo password : <span className="text-sky-700">123456</span> </p>
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to={"https://github.com/yasirrabbanitanvir/Animal-Classification"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://animal-classification-phi.vercel.app/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;