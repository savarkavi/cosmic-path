import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-40 bg-[#1a1512] pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-0">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl tracking-wide text-white uppercase">
              Cosmic Path
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Guiding souls through the celestial map. We bring ancient Vedic
              wisdom to the modern seeker, illuminating the path ahead.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-20 lg:gap-52">
            <div>
              <h3 className="mb-6 text-xs font-bold tracking-[0.15em] text-white uppercase">
                Offerings
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Natal Charts
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Relationship Synastry
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Vedic Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Muhurtha Selection
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-bold tracking-[0.15em] text-white uppercase">
                Company
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    About Rishi
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-white/10"></div>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
          <p>© 2026 Cosmic Path Astrology. All rights reserved.</p>
          <p>Designed with Starlit Intentions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
