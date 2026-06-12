"use client";

import { useEffect, useMemo, useState } from "react";

const labels = ["Days", "Hours", "Mins", "Secs"];

const getTimeParts = (target: number) => {
  const diff = Math.max(target - Date.now(), 0);

  return [
    Math.floor(diff / 86400000),
    Math.floor((diff % 86400000) / 3600000),
    Math.floor((diff % 3600000) / 60000),
    Math.floor((diff % 60000) / 1000),
  ];
};

interface WebinarCountdownProps {
  scheduledAt: string;
  isPast: boolean;
}

const WebinarCountdown = ({ scheduledAt, isPast }: WebinarCountdownProps) => {
  const target = useMemo(() => new Date(scheduledAt).getTime(), [scheduledAt]);
  const [parts, setParts] = useState(() => [0, 0, 0, 0]);

  useEffect(() => {
    const update = () => setParts(getTimeParts(target));

    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <section className="mx-auto w-full max-w-300 px-4 py-8">
      <div
        className="flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/4.5 p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between md:p-10"
        data-reveal
      >
        <div>
          <h2 className="text-2xl font-semibold text-white">
            {isPast ? "This Webinar Has Ended" : "Webinar Starts In"}
          </h2>
          <p className="mt-1 text-[#bdb7ce]">
            {isPast
              ? "Stay tuned for upcoming webinars."
              : "Seats are limited for this live learning session."}
          </p>
        </div>
        {!isPast && (
          <div className="grid grid-cols-4 gap-3">
            {parts.map((part, index) => (
              <div
                key={labels[index]}
                className="min-w-16 rounded-lg border border-[#c9a84c]/20 bg-[#c9a84c]/10 px-3 py-4 text-center"
              >
                <span className="block text-2xl font-bold text-[#c9a84c] md:text-3xl">
                  {String(part).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[0.68rem] font-semibold tracking-[0.16em] text-[#bdb7ce] uppercase">
                  {labels[index]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WebinarCountdown;
