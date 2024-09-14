import { FaMaxcdn } from "react-icons/fa";

export default function Button() {
  return (
    <div>
      <a href="https://www.material-tailwind.com/">
        <button className="fixed bottom-4 right-4 flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
          <FaMaxcdn size={20} />
          Made with Material Tailwind
        </button>
      </a>
    </div>
  );
}
