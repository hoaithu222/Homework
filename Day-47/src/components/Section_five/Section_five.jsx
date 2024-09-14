import { GrFormNextLink } from "react-icons/gr";
import { FaChartSimple } from "react-icons/fa6";
import { HiPuzzlePiece } from "react-icons/hi2";
import { HiCursorClick } from "react-icons/hi";

export default function Section_five() {
  return (
    <section className="p-12 bg-white flex flex-col lg:flex-row  justify-between">
      <div className=" mb-12 lg:w-2/5">
        <h2 className="text-4xl font-bold text-black">My Resume</h2>
        <p className="text-lg text-gray-600 mt-4 p-2">
          Highly skilled and creative Web Developer with 5+ years of experience
          in crafting visually stunning and functionally robust websites and web
          applications.
        </p>
        <div className="mt-4 inline-flex items-center bg-white text-black font-bold px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-300">
          VIEW MORE <GrFormNextLink className="ml-2" />
        </div>
      </div>
      <div className="lg:w-2/5 lg:items-center pt-5">
        <div className="flex items-center mb-10 space-x-4">
          <div className="p-3 rounded-xl bg-gray-900 flex items-center justify-center">
            <FaChartSimple className="text-3xl text-white" />
          </div>
          <p className="text-gray-400">
            Bachelor of Science in Computer Science
          </p>
        </div>
        <div className="flex items-center mb-10 space-x-4">
          <div className="p-3 rounded-xl bg-gray-900 flex items-center justify-center">
            <HiPuzzlePiece className="text-3xl text-white" />
          </div>
          <p className="text-gray-400">Certified Web Developer</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-gray-900 flex items-center justify-center">
            <HiCursorClick className="text-3xl text-white" />
          </div>
          <p className="text-gray-400">
            Frontend Framework Proficiency Certification
          </p>
        </div>
      </div>
    </section>
  );
}
