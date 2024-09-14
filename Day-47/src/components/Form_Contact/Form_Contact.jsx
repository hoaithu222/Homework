import { FaPhone } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";

export default function Form_Contact() {
  return (
    <section className="m-4 lg:m-10">
      <div className="inner-head text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-black">
          Contact Us
        </h2>
        <p className="text-sm lg:text-lg text-gray-400 mt-4 px-4 sm:px-10 lg:px-40 font-medium">
          Ready to get started? Feel free to reach out through the contact form,
          and let's embark on a journey of innovation and success.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 lg:mt-12 lg:gap-12 justify-between lg:justify-around rounded-lg shadow-lg p-6 lg:p-10">
        {/* content */}
        <div className="bg-gray-900 text-white p-6 sm:p-20 lg:p-8 lg:pt-20 lg:w-1/2 rounded-lg shadow-lg">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            Contact Information
          </h3>
          <p className="text-sm lg:text-gray-400 mb-6">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-lg lg:text-xl" />
              <span className="text-sm lg:text-lg">+1(424) 535 3523</span>
            </div>
            <div className="flex items-center space-x-3">
              <IoMail className="text-lg lg:text-xl" />
              <span className="text-sm lg:text-lg">hello@mail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <HiTicket className="text-lg lg:text-xl" />
              <span className="text-sm lg:text-lg">Open Support Ticket</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-20 lg:w-1/2 rounded-lg shadow-lg mt-8 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="eg. Lucas"
                className="mt-1 block w-full focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="eg. Jones"
                className="mt-1 block w-full focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-black"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="eg. lucas@mail.com"
                className="mt-1 block w-full focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-black"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                What are you interested in?
              </label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="interest" className="form-radio" />
                  <span className="ml-2">Design</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="interest" className="form-radio" />
                  <span className="ml-2">Development</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="interest" className="form-radio" />
                  <span className="ml-2">Support</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="interest" className="form-radio" />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                placeholder="Type your message here"
                className="mt-1 block w-full focus:outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-black"
                rows="4"
              ></textarea>
            </div>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
