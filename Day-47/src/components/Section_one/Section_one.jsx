import image_7 from "../../assets/images/image-7.svg";

export default function SectionOne() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between p-6 space-y-6 lg:space-y-0">
      <div className="content w-full lg:w-2/4 space-y-4 p-10 pt-20">
        <h2 className="text-5xl leading-relaxed font-bold text-gray-900 lg:pr-20 md:pr-10 sm:pr-6 pr-4">
          Welcome to my Web Development Portfolio!
        </h2>

        <p className="text-lg text-gray-400 md:text-base sm:text-sm">
          I'm Lily Smith, a passionate web developer based in the USA. Here,
          you'll get a glimpse of my journey in the world of web development,
          where creativity meets functionality.
        </p>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your email
          </label>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-3/5">
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button className="h-12 bg-black text-white rounded-md shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/3">
            REQUIRE OFFER
          </button>
        </div>

        <p className="text-sm text-gray-600">
          Read my{" "}
          <span className="underline text-gray-500 cursor-pointer">
            Terms and Conditions
          </span>
        </p>
      </div>
      <div className="image w-full lg:w-2/4">
        <img
          src={image_7}
          alt="Portfolio Illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
