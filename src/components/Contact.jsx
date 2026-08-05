import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "../data/siteConfig.js";

export default function Contact() {
  function openEmail() {
    window.location.href =`mailto:${siteConfig.email}`;
  }

  function openGithub() {
    window.open(
      siteConfig.github,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section id="contact" className="px-5 pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#d76444] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/65">
            Let&apos;s connect
          </p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            欢迎与我联系
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openEmail}
            className="inline-flex items-center rounded-full border-0 bg-white px-5 py-3 font-medium text-[#18211d] transition hover:bg-white/90"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </button>

          <button
            type="button"
            onClick={openGithub}
            className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
}