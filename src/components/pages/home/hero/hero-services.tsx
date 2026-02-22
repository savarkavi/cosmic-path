"use client";

import { heroServices } from "@/lib/constants";

const HeroServices = () => {
  return (
    <div className="relative mx-auto w-full max-w-300 px-8 2xl:px-0">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {heroServices.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/70 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
              style={
                {
                  "--service-color": service.color,
                } as React.CSSProperties
              }
            >
              <div
                className="h-1 w-full transition-all duration-500"
                style={{ backgroundColor: service.color }}
              />

              <div className="relative flex flex-col items-center px-8 py-2">
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <Icon
                    className="h-8 w-8 transition-all duration-500 group-hover:scale-110"
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="text-foreground mb-3 cursor-default text-center text-xl font-bold tracking-tight lg:text-2xl">
                  {service.title}
                </h3>
                <div
                  className="mb-4 h-0.5 w-10 rounded-full transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: service.color }}
                />
                <p className="text-muted-foreground mb-4 cursor-default text-center text-sm leading-relaxed lg:text-base">
                  {service.desc}
                </p>
              </div>
              <div
                className="pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
                style={{ backgroundColor: service.color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroServices;
