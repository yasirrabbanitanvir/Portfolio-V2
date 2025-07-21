import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();
  const publicKeys = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  console.log(publicKeys)
  console.log(import.meta.env)
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm("service_nsuko84", "template_3a8r92i", form.current, {
        publicKey: publicKeys, 
      })
      .then(
        () => {
          console.log("Email sent"); 
          toast.success("Your Message was sent successfully!"); 
          
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.error(error.text); 
          toast.error("FAILED...", error.text); 
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm border-2 focus:outline-primary lg:py-5 lg:px-5"
          placeholder="Your Full Name"
          type="text"
          name="username"
          id="name"
          required
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="email">
          Your Email
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm border-2 focus:outline-primary lg:py-5  lg:px-5"
          placeholder="Your Email"
          name="user_email"
          type="text"
          id="user_email"
          required
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="message">
          Your Message
        </label>

        <textarea
          className="w-full rounded-lg border-gray-200 p-3 text-sm border-2 focus:outline-primary  lg:px-5 lg:py-5"
          placeholder="Your Message"
          rows="8"
          name="message"
          id="message"
        ></textarea>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="inline-block w-full rounded-lg btn btn-primary px-5 py-3 font-medium text-white sm:w-auto"
        >
          Send Mail
        </button>
        
      </div>
    </form>
  );
};

export default ContactForm;