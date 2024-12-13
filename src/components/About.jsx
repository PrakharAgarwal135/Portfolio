import React from "react";

export default function About() {
  return (
    <section className="flex flex-col gap-6 md:gap-10 pt-[110px]" id="about">
      <div className="uppercase text-5xl md:text-4xl xl:text-5xl font-bold text-[#b1b9c1]">
        Person Behind the Projects
      </div>
      {/* about  */}
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 gap-6 text-white/80 text-xl md:text-xl">
          <div className="leading-[34px] md:leading-[39px]">
            Hello, I'm Prakhar Agarwal, currently pursuing B.Tech in Computer
            Science at Jaipur Engineering College and Research Centre.
          </div>
          <div className="leading-[34px] md:leading-[39px]">
            I am a passionate{" "}
            <span className="font-bold uppercase">
              full-stack web developer
            </span>{" "}
            and <span className="font-bold uppercase">software engineer</span>{" "}
            with a deep interest in{" "}
            <span className="font-bold uppercase">programming</span>. Along with
            my passion for tech, I also have a keen interest in gaming and
            music, which I believe helps me stay creative, stress free and
            balanced.
          </div>
          <div className="inline leading-[34px] md:leading-[39px]">
            Alongside my technical expertise, I have developed strong soft
            skills that complement my journey. I am an effective{" "}
            <span className="font-bold uppercase">communicator</span>, able to
            clearly articulate ideas effectively. My{" "}
            <span className="font-bold uppercase">teamwork abilities</span> have
            allowed me to contribute effectively in group settings, while my{" "}
            <span className="font-bold uppercase">leadership skills</span>{" "}
            enable me to guide teams towards achieving their goals with
            precision and confidence.
            <br className="hidden md:block" />
          </div>
        </div>

        {/* tech stack  */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              Programming Languages
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              C, C++, Java, Python
            </div>
          </div>
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              Frontend Tools
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              JavaScript, React, Redux, HTML5, Git/GitHub, Axios, Maptiler
            </div>
          </div>
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              UI Libraries
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              CSS3, Tailwind CSS, Bootstrap, Bulma, Material UI
            </div>
          </div>
          <div>
            <div className="font-bold antialiased text-xl md:text-2xl mb-2">
              Backend Tools
            </div>
            <div className="text-white/60 text-base md:text-xl leading-8">
              NodeJs, ExpressJs, MongoDB, SQL, Razorpay, JWT, Sessions,
              Passport.js, Postman Api
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
