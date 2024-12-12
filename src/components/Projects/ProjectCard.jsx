import { Icon } from "@iconify/react";
import React from "react";
import Tags from "./Tags";

export default function ProjectCard({ title, img, gita, livea, about, stack }) {
  return (
    <div className="w-full rounded-[20px] bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 duration-700 ">
      {/* thumbnail  */}
      <img
        src={img}
        width={420}
        height={700}
        alt="work"
        className="rounded-[10px] w-full lg:col-span-5 xl:w-[45%] my-auto"
      />

      {/* content  */}
      <div className="flex flex-col gap-4 lg:col-span-7 xl:w-[55%]">
        {/* title and icons  */}
        <div className="flex items-center justify-between">
          {/* title  */}
          <h2 className="text-3xl sm:text-4xl xl:text-4xl font-bold">
            {title}
          </h2>

          {/* live demo and github icons  */}
          <div className="flex gap-3 md:gap-4 text-2xl sm:text-3xl xl:text-3xl">
            <a
              href={livea}
              className="rounded-full bg-icon-radial hover:bg-bgColor p-3"
              target="_blank"
              aria-label="View Github Repo"
            >
              <Icon icon="material-symbols:open-in-new" />
            </a>
            <a
              href={gita}
              className="rounded-full bg-icon-radial hover:bg-bgColor p-3"
              target="_blank"
              aria-label="View Live Demo"
            >
              <Icon icon="mingcute:github-line" />
            </a>
          </div>
        </div>

        {/* description  */}
        <p className="text-base text-white/70">{about}</p>

        {/* tags  */}
        <div className="flex gap-3 md:gap-4 flex-wrap">
          {stack.map((tech, index) => (
            <Tags key={index}>{tech}</Tags>
          ))}
        </div>
      </div>
    </div>
  );
}
