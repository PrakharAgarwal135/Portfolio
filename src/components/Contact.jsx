import React from "react";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section className="flex flex-col gap-6 md:gap-10 pt-[90px]" id="contact">
      <div className="uppercase text-5xl md:text-4xl xl:text-5xl font-bold text-[#b1b9c1]">
        Contact Me
      </div>

      <div className="w-full rounded-[20px] bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] p-6">
        <p className="text-lg sm:text-xl text-white mb-6">
          I'd love to hear from you! Whether you have a question, an
          opportunity, or just want to say hi, feel free to drop me a message.
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-6">
          {/* email btn  */}
          <a
            href="mailto:prakharagarwal135@gmail.com"
            className="flex items-center gap-2 text-white p-3 rounded-full bg-icon-radial"
            target="_blank"
            aria-label="Email"
          >
            <Icon icon="mdi:email" className="text-2xl" />
            <span className="hidden sm:block">prakharagarwal135@gmail.com</span>
          </a>

          {/* linkedin btn  */}
          <a
            href="https://www.linkedin.com/in/prakhar-agarwal-1216a9227/"
            className="flex items-center gap-2 text-white p-3 rounded-full bg-icon-radial"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Icon icon="akar-icons:linkedin-fill" className="text-2xl" />
            <span className="hidden sm:block">LinkedIn</span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/PrakharAgarwal135"
            className="flex items-center gap-2 text-white p-3 rounded-full bg-icon-radial"
            target="_blank"
            aria-label="GitHub"
          >
            <Icon icon="akar-icons:github-fill" className="text-2xl" />
            <span className="hidden sm:block">GitHub</span>
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/prakharrr__1/"
            className="flex items-center gap-2 text-white p-3 rounded-full bg-icon-radial"
            target="_blank"
            aria-label="Instagram"
          >
            <Icon icon="akar-icons:instagram-fill" className="text-2xl" />
            <span className="hidden sm:block">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
