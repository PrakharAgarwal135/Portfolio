import React from "react";
import positionIcon from "../../assets/position-icon.svg";

export default function TimelineCard({
  companyImg,
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}) {
  return (
    <div className="flex items-start gap-4 relative">
      {/* position icon (dot)  */}
      <img
        src={positionIcon}
        width={24}
        height={24}
        alt="dot"
        className="absolute -translate-x-[30px] sm:-translate-x-8"
      />

      {/* image and all data  */}
      <div className="grid grid-cols-5 sm:flex items-start gap-4 pl-4">
        {/* company image  */}
        <img
          src={companyImg}
          width={70}
          height={70}
          alt="Img"
          className="col-span-1"
        />

        {/* text  */}
        <div className="col-span-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{jobTitle}</h1>
            <p className="text-base sm:text-lg font-bold my-2">
              {company} | {jobType}
            </p>
          </div>
          <p className="text-base sm:text-lg text-white/60">{duration}</p>

          <ul>
            {stuffIDid.map((stuff, index) => (
              <li key={index} className="my-2">
                <span className="text-white/60 mr-1">✦</span>
                {stuff}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
