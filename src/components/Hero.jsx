import React from "react";
import handwave from "../assets/handwave.svg";
import photo from "../assets/photo3.png";

export default function Hero() {
  return (
    <section
      className="pt-20 sm:pt-0 flex sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div>
        <div className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6 mt-10">
          <p className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6">
            Hey, there
          </p>
          <div className="col-span-3">
            <img src={handwave} width={35} height={35} alt="hand" />
          </div>
        </div>
        <h1 className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-6xl leading-tight font-bold">
          <p className="inline">I&apos;m </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Prakhar Agarwal
          </span>
          <p>a Software Engineer</p>
        </h1>

        <p className="text-white/60  text-xl smm:text-2xl lg:text-3xl xl:text-3xl mt-3 smm:mt-6 ">
          based in Jaipur , Rajasthan
        </p>

        <a
          href="https://drive.google.com/drive/folders/18tsdh55eb1QPs6AQ2YctMpTY4DXk3rjk?usp=sharing"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 bg-icon-radial text-white font-medium rounded-lg text-lg md:text-2xl"
        >
          See Resume
        </a>
      </div>

      {/* image */}
      <div>
        <div className="hidden sm:flex items-center justify-center relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden bg-image-radial">
          <img
            src={photo}
            alt="Prakhar's picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
