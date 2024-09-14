import data from "./data";

export default function SectionThree() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="text-center mb-12 p-20 ">
        <span className="text-sm font-semibold text-black uppercase">
          {data.head.content}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          {data.head.titleh2}
        </h2>
        <p className="text-xl text-gray-400 mt-4">{data.head.describe}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {data.list.map((item, index) => (
          <div
            className="bg-white p-8 rounded-lg  flex flex-col items-center text-center"
            key={index}
          >
            <div className="text-4xl mb-4 text-white bg-black br-1 p-3 rounded-full">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-lg text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
