import data from "./data";

export default function Section_four() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">{data.head.titleh2}</h2>
        <p className="text-lg text-gray-600 mt-4 p-30 m-10">
          {data.head.describe}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
        {data.list_item.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-black mb-2 font-bold">
              {item.title}
            </h3>
            <p className="text-base text-gray-400">{item.desc}</p>
            <div className="self-start mt-4">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-full">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
