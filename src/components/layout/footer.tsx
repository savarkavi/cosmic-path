import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-40 bg-[#1a1512] pt-16 pb-8 text-gray-300">
      <div className="container mx-auto max-w-300 px-6 lg:px-0">
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
                Company
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/courses"
                    className="transition-colors hover:text-white"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultation/booking-details"
                    className="transition-colors hover:text-white"
                  >
                    Book consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-xs font-bold tracking-[0.15em] text-white uppercase">
                Legal
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="transition-colors hover:text-white"
                  >
                    Refund / Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="transition-colors hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="transition-colors hover:text-white"
                  >
                    Contact Us
                  </Link>
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
