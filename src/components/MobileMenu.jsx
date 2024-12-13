import React from "react";
import { Icon } from "@iconify/react";

export default function MobileMenu({ onMenuOpen }) {
  return (
    <div className="grid z-20 items-center grid-cols-2 sm:hidden px-6 py-5 fixed top-12 rounded-2xl max-w-[90%] w-full bg-gradient-to-r from-[#d9d9d91f]  to-[#7373731f] mt-12 sm:mt-16 backdrop-blur-md">
      <ul
        className="flex flex-col gap-4 lg:gap-12 text-white "
        onClick={() => onMenuOpen(false)}
      >
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </ul>

      {/* icons  */}
      <div className="flex flex-col gap-3 z-20 items-center justify-center">
        <a
          className="p-4 flex-1 flex justify-center w-full rounded-xl h-fit text-4xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
          target="_blank"
          href="https://www.linkedin.com/in/prakhar-agarwal-1216a9227/"
        >
          <Icon icon="hugeicons:linkedin-01" />
        </a>

        <div className="flex gap-3 w-full">
          <a
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="https://github.com/PrakharAgarwal135"
          >
            <Icon icon="hugeicons:github" />
          </a>
          <a
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
            target="_blank"
            href="mailto:prakharagarwal135@gmail.com"
          >
            <Icon icon="hugeicons:mail-account-01" />
          </a>
        </div>
      </div>
    </div>
  );
}
