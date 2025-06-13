import React from "react";
import firstfatyn from "../../assets/firstfatyn.png";
import PwC from "../../assets/PwC.png";
import upflairs from "../../assets/upflairs.png";
import TimelineCard from "./TimelineCard";

export default function Timeline() {
  // timeline data
  const TimelineData = [
    {
      companyImg: PwC,
      jobTitle: " Cybersecurity",
      company: "PwC India",
      jobType: "Apprenticeship",
      duration: "Feb 2025 - July 2025",
      stuffIDid: [
        "Completed comprehensive training in programming, cybersecurity, and prompt engineering through instructor-led sessions and interactive modules.",
      ],
    },
    {
      companyImg: upflairs,
      jobTitle: " Full-Stack Web Developer",
      company: "Upflairs Pvt. Ltd.",
      jobType: "Apprenticeship",
      duration: "July 2024 - Aug 2024",
      stuffIDid: [
        "Led a team of 4 to develop the CampQuest project, showcasing proficiency in MERN stack.",
        "Achieved successful completion of the project within a strict 5-week timeline.",
      ],
    },
    {
      companyImg: firstfatyn,
      jobTitle: "Frontend Developer",
      company: "Firstfatyn Pvt. Ltd.",
      jobType: "Internship",
      duration: "Aug 2023 - Sep 2023",
      stuffIDid: [
        "Designed and Developed more than 6 templates for the company's e-commerce website.",
        "Optimized the website for both desktop and mobile platforms.",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-6 md:gap-10 pt-[110px]" id="work">
      <div className="uppercase text-5xl md:text-4xl xl:text-5xl font-bold text-[#b1b9c1]">
        Experience and Training
      </div>

      {/* this div for the white line on the left  */}
      {/* determines height also  */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-2 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineCard
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
