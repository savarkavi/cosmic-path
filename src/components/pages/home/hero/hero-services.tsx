"use client";

import { heroServices } from "@/lib/constants";

const HeroServices = () => {
  return (
    <div className="relative mx-auto w-full max-w-300 px-8 py-4 2xl:px-0">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {heroServices.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/40 p-8 shadow-xl backdrop-blur-3xl transition-all duration-500 ease-out hover:-translate-y-2"
              style={
                {
                  "--service-color": service.color,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute -top-10 -right-10 z-0 h-40 w-40 rounded-full opacity-10 blur-3xl transition-all duration-700 ease-out"
                style={{ backgroundColor: service.color }}
              />
              <div
                className="absolute -bottom-10 -left-10 z-0 h-40 w-40 rounded-full opacity-10 blur-3xl transition-all duration-700 ease-out group-hover:scale-150 group-hover:opacity-30"
                style={{ backgroundColor: service.color }}
              />
              <div className="relative z-10 flex h-full flex-col items-start text-left">
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: service.color }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl border transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
                    style={{
                      borderColor: `${service.color}40`,
                      backgroundColor: `white`,
                    }}
                  />
                  <Icon
                    className="relative z-10 h-7 w-7 transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{ color: service.color }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-3 cursor-default text-xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 dark:text-neutral-100">
                  {service.title}
                </h3>

                <p className="line-clamp-3 cursor-default text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroServices;
