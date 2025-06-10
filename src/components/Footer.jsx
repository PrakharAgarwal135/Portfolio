import { Icon } from "@iconify/react";
import React from "react";

const curYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="footer"
      className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex justify-end "
    >
      {/* <p>
        <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . CREATED
        BY PRAKHAR AGARWAL
      </p> */}
      <button
        className="md:flex hidden items-center gap-1 cursor-pointer"
        onClick={scrollToTop}
      >
        <Icon icon="mdi:arrow-top" className="text-2xl" />
        <p className="underline">SCROLL TO TOP</p>
      </button>
    </section>
  );
}
