/* eslint-disable react/jsx-no-target-blank */
import { RiWhatsappFill } from "react-icons/ri";
import HeaderText from "./../HeaderText/HeaderText";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import ContactForm from "../Forms/ContactForm";


const Contact = () => {
  return (
    <div id="contact"  >
      <HeaderText text1={"Connect with me"} text2={"Contact"} />
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center  gap-6 lg:gap-16" >
        <div className="flex gap-6 flex-col md:col-span-1">
          <article className="border-4 border-primary rounded-xl p-6 justify-center items-center text-center gap-6 flex flex-col lg:text-xl font-medium hover:border-[#d94b44] hover:text-[#d94b44] hover:bg-[#f7f8fc] text-primary  text-base hover:shadow-lg" data-aos="fade-right"  data-aos-duration="800">
            <div>

            <p>
              <MdEmail className="text-5xl w-full  " />
            </p>
            <h4>Email</h4>
            </div>
            <h5 className="break-normal md:break-all">
              yasirrabbanitanvir@gmail.com
            </h5>
            <a
              href="mailto:yasirrabbanitanvir@gmail.com"
              className="transition duration-150 text-base font-bold hover:scale-105 btn btn-ghost btn-sm hover:border-2 hover:border-[#d94b44] hover:bg-white"
            >
              Send a mail
            </a>
          </article>
          <article className="border-4 border-primary hover:border-white rounded-xl p-6 justify-center items-center text-center gap-6 flex flex-col lg:text-xl font-medium hover:bg-[#5aca66] text-primary hover:text-white text-base" data-aos="fade-right"  data-aos-duration="900">
            <p>
              <RiWhatsappFill className="text-5xl w-full  hover:text-white" />
            </p>
            <h4>WhatsApp</h4>
            
            <a
              href="https://api.whatsapp.com/send?phone=8801752822254"
              target="_blank"
              className="transition duration-150 text-base font-bold hover:scale-105  btn btn-ghost btn-sm hover:border-2 hover:border-white"
            >
              Send a message
            </a>
          </article>
          <article className="border-4 border-primary hover:border-white rounded-xl p-6 justify-center items-center text-center gap-6 flex flex-col lg:text-xl font-medium hover:bg-gradient-to-tr hover:from-[#2a7dfd] hover:via-[#9d35fd] hover:to-[#f75087] text-primary hover:text-white text-base" data-aos="fade-right"  data-aos-duration="1000">
            <p>
              <FaFacebookMessenger className="text-5xl w-full  hover:text-white" />
            </p>
            <h4>Messenger</h4>
            <h5>Yasir Rabbani Tanvir</h5>
            <a
              href="https://www.facebook.com/share/1GGAM3oAXH/"
              target="_blank"
              className="transition duration-150 text-base font-bold hover:scale-105 btn btn-ghost btn-sm hover:border-2 hover:border-white"
            >
              Send a message
            </a>
          </article>
        </div>
        <div className="md:col-span-2 lg:max-w-[80%]" data-aos="fade-up"  data-aos-duration="1000">
         <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;