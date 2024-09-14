import logoCoinbase from "../../assets/images/logo-coinbase.svg";
import logoSpotify from "../../assets/images/logo-spotify.svg";
import logoPinterest from "../../assets/images/logo-pinterest.svg";
import logoGoogle from "../../assets/images/logo-google.svg";
import logoAmazon from "../../assets/images/logo-amazon.svg";
import logoNetflix from "../../assets/images/logo-netflix.svg";

export default function SectionTwo() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h4 className="custom-text-size font-bold text-gray-800">
          My Awesome Clients
        </h4>
      </div>
      {/* Sử dụng grid với responsive breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        <img
          src={logoCoinbase}
          alt="Coinbase Logo"
          className="w-24 sm:w-32 lg:w-36 h-auto object-contain"
        />
        <img
          src={logoSpotify}
          alt="Spotify Logo"
          className="w-24 sm:w-32 lg:w-36 h-auto object-contain"
        />
        <img
          src={logoPinterest}
          alt="Pinterest Logo"
          className="w-24 sm:w-32 lg:w-36 h-auto object-contain"
        />
        <img
          src={logoGoogle}
          alt="Google Logo"
          className="w-24 sm:w-32 lg:w-36 h-auto object-contain"
        />
        <img
          src={logoAmazon}
          alt="Amazon Logo"
          className="w-24 sm:w-32 lg:w-36 h-auto object-contain"
        />
        <img
          src={logoNetflix}
          alt="Netflix Logo"
          className="w-24 sm:w-32 lg:w-36 h-auto object-contain"
        />
      </div>
    </section>
  );
}
