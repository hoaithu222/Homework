export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-gray-200 m-10 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center">
        <div className="text-gray-500 text-sm w-full md:w-1/2">
          <p>© 2024 Made with Material Tailwind by Creative Tim.</p>
        </div>
        <div className="box w-full md:w-1/2 flex justify-between md:justify-end gap-4 mt-4 md:mt-0 items-center">
          <div className="text-sm">
            <ul className="flex space-x-4 md:space-x-6 text-gray-500">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
              <li className="hover:text-black cursor-pointer">Service</li>
            </ul>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
