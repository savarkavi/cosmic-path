"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { faqs } from "./webinar-data";
import WebinarSectionHeading from "./webinar-section-heading";

const WebinarFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="mx-auto w-full max-w-300 px-4 py-16 md:py-24">
      <WebinarSectionHeading label="FAQs" title="Got Questions?" />
      <div className="mx-auto mt-10 max-w-3xl">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border-b border-white/10"
              data-reveal
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-semibold text-white transition-colors hover:text-[#c9a84c]"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-300",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0">
                  <p className="pb-6 leading-7 text-[#bdb7ce]">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WebinarFaqSection;
