import { Icon } from "@iconify/react";
import logo2 from "../assets/logo2.png";
export default function Navbar() {
  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 sm:mt-8 std-backdrop-blur">
          {/* logo  */}
          <div className="w-[35px] h-[35px]">
            <img src={logo2} alt="Logo" />
          </div>

          {/* links  */}
          <ul className="hidden sm:flex gap-8 lg:gap-12 text-white">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </ul>

          {/* social icons  */}
          <div className="gap-5 text-2xl hidden sm:flex">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/prakhar-agarwal-1216a9227/"
            >
              <Icon icon="hugeicons:linkedin-01" />
            </a>
            <a target="_blank" href="https://github.com/PrakharAgarwal135">
              <Icon icon="hugeicons:github" />
            </a>
            <a href="mailto:prakharagarwal135@gmail.com">
              <Icon icon="hugeicons:mail-account-01" />
            </a>
          </div>

          {/* Menu Icon for small screens */}
          <div className="sm:hidden text-white text-2xl">
            <Icon icon="lucide:menu" />
          </div>
        </div>
      </div>
    </>
  );
}