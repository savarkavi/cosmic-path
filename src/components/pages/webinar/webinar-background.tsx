const stars = Array.from({ length: 140 }, (_, index) => {
  const left = (index * 37) % 100;
  const top = (index * 53) % 100;
  const duration = 2 + (index % 5) * 0.7;
  const delay = (index % 11) * 0.35;
  const opacity = 0.6 + (index % 5) * 0.08;
  const size = index % 11 === 0 ? 4 : index % 5 === 0 ? 3 : 2;

  return { delay, duration, left, opacity, size, top };
});

const WebinarBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#080613]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_10%,rgba(123,94,167,0.18),transparent),radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(201,168,76,0.10),transparent),radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(123,94,167,0.06),transparent)]" />
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute z-10 rounded-full bg-[#fff7d6]"
          style={{
            animation: `webinar-twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            boxShadow: "0 0 10px rgba(255, 247, 214, 0.9)",
            height: star.size,
            left: `${star.left}%`,
            opacity: 0.35,
            top: `${star.top}%`,
            width: star.size,
            ["--star-opacity" as string]: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default WebinarBackground;
