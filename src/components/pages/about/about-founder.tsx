import { Separator } from "@radix-ui/react-separator";
import { Leaf, Target } from "lucide-react";
import Image from "next/image";

const AboutFounder = () => {
  return (
    <section className="bg-[#202837] px-6 py-24 text-white md:py-32 xl:px-0">
      <div className="mx-auto grid w-full max-w-300 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="mx-auto w-full max-w-[430px]">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/12 bg-[#242c3a]">
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(120deg, transparent 0 26px, rgba(217, 119, 6, 0.35) 27px, transparent 28px)",
              }}
              aria-hidden="true"
            />
            <Image
              src="/owner-photo.jpeg"
              alt="founder image"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 430px, 90vw"
            />
          </div>

          <div className="mt-5 grid border border-white/12 sm:grid-cols-2">
            <div className="border-b border-white/12 p-5 sm:border-r sm:border-b-0">
              <div className="flex items-center gap-2">
                <Leaf className="text-primary" />
                <p className="text-xl font-semibold">Philosophy</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Empowerment through awareness, not fear through predictions.
              </p>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <Target className="text-primary" />
                <p className="text-xl font-semibold">Mission</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Deliver honest, practical, and spiritually grounded guidance to
                every seeker.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-4xl leading-[1.08] font-medium text-balance capitalize md:text-6xl">
            Meet the{" "}
            <span className="text-primary font-serif italic">founder</span>
          </p>
          <div className="mt-8 space-y-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            <p>
              Mr. Yashkaran Sharma is an ardent lover of Astrology & other
              occult sciences. He is the author of the acclaimed books{" "}
              <span className="font-bold italic">
                Author of Encyclopedia of Astrological Remedies
              </span>
              , <span className="font-bold italic">Jyotish Sutram</span> and{" "}
              <span className="font-bold italic">Brihat Upay Samhita</span>. He
              has made serious studies in the area of Vedic Astrology & Tantra,
              and probed deep down the intricacies of these esoteric subjects.
              He traveled far and wide in the pursuit of knowledge and
              accomplishments. He has been associated with these subjects &
              Shastras from the very outset of his youth and indulged in serious
              researches of remedial side of astrology after doing his post
              graduations in English Literature from Shimla. Tradition is
              blended remarkably with modernity & scientific outlook in his
              personality. He comes from respectable Brahmin family of Himachal
              Pradesh famous for its knowledge & integrity. He is senior
              astrologer & best astrology professor in India who teaches
              Astrology to research scholars & other serious students. His
              erudition earns him early admiration from his students as well as
              his seniors.
            </p>
            <p>
              He also Edited Future Samachar and Research Journal of Astrology
              for more than a decade. He has contributed many astrological
              articles in different periodicals. His journey of gaining
              astrological knowledge started with the thorough study of
              Lagnachandrika of Vaidyanath which is his favourite book of
              astrology even today because it was gifted to him by his father
              Mr. M.R. Sharma who was his first Astrology & Spiritual Guru.He
              took Gayatri Deeksha from Bramhchari Swayambhu Chaitanya,
              Durgasapatshati Deeksha from Pandit Leeladhar Shastri and Srividya
              Deeksha from Anant Srivibhushit Jyotishpeethadheeshwar &
              Dwarkashardapeethadheeshwar Jagadguru Shankaracharya Swami
              Swaroopanand Saraswati ji Maharaj.
            </p>
          </div>
          <Separator className="bg-primary/40 mt-10 h-px w-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
