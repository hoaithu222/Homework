import { useState } from "react";
import data from "./data";

export default function Section_six() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">What Clients Say</h2>
        <p className="text-lg text-gray-400 mt-4 p-30 m-10">
          Discover what clients have to say about their experiences working with
          me. My client's satisfaction is my greatest achievement!
        </p>
      </div>

      <div className="inner-wrap flex flex-col lg:flex-row items-center lg:items-start p-20">
        <div className="content w-full lg:w-3/5 sm:p-4 lg:p-20 ">
          <h3 className="title text-3xl font-semibold mb-4 md:p-0 lg:pr-40 font-bold">
            {data.title}
          </h3>
          <p className="text-gray-400 mb-4">{data.desc}</p>
          <h4 className="font-semibold mb-1">{data.name}</h4>
          <p className="text-gray-300 mb-6">{data.work}</p>

          <div className="flex space-x-2">
            {data.list_image.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`inner-image w-10 h-10 rounded-md overflow-hidden border-2 cursor-pointer ${
                  activeIndex === index ? "border-black" : "border-gray-300"
                } ${activeIndex === index ? "opacity-100" : "opacity-50"}`}
              >
                <img
                  src={item.image}
                  alt={`Avatar ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="image w-full lg:w-2/5 p-1 flex justify-start ">
          <img
            src={data.list_image[activeIndex].image}
            alt="Active Avatar"
            className=" h-auto object-cover rounded-lg shadow-lg lg:w-full sm:w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
