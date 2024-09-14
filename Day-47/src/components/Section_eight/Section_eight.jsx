import logoCoinbase from "../../assets/images/logo-coinbase.svg";
import logoSpotify from "../../assets/images/logo-spotify.svg";
import logoPinterest from "../../assets/images/logo-pinterest.svg";
import logoGoogle from "../../assets/images/logo-google.svg";
import logoAmazon from "../../assets/images/logo-amazon.svg";
import logoNetflix from "../../assets/images/logo-netflix.svg";

export default function Section_eight() {
  return (
    <section>
      <div className="inner-head m-20 text-center text-black opacity-80">
        <p className="desc text-lg text-gray-400 mt-4 p-30 text-gray-400 font-medium">
          POPULAR CLIENTS
        </p>
        <h2 className="title text-4xl font-bold text-black">
          Trusted by over 10,000+ clients
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:p-10 lg:p-5">
        <div className="inner-image">
          <img
            src={logoCoinbase}
            alt="Coinbase"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-40 md:h-40 lg:w-32 lg:h-32 grayscale"
          />
        </div>
        <div className="inner-image">
          <img
            src={logoSpotify}
            alt="Spotify"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-40 md:h-40 lg:w-32 lg:h-32 grayscale"
          />
        </div>
        <div className="inner-image">
          <img
            src={logoPinterest}
            alt="Pinterest"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-40 md:h-40 lg:w-32 lg:h-32 grayscale"
          />
        </div>
        <div className="inner-image">
          <img
            src={logoGoogle}
            alt="Google"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-40 md:h-40 lg:w-32 lg:h-32 grayscale"
          />
        </div>
        <div className="inner-image">
          <img
            src={logoAmazon}
            alt="Amazon"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-40 md:h-40 lg:w-32 lg:h-32 grayscale"
          />
        </div>
        <div className="inner-image">
          <img
            src={logoNetflix}
            alt="Netflix"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-40 md:h-40 lg:w-32 lg:h-32 grayscale"
          />
        </div>
      </div>
    </section>
  );
}
