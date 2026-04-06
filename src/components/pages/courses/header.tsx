export const Header = () => {
  return (
    <div className="flex flex-col gap-6 md:items-center lg:gap-8 xl:flex-row xl:justify-between xl:gap-0">
      <p className="text-3xl capitalize md:text-6xl">
        Explore the{" "}
        <span className="text-accent-foreground italic">Cosmic</span> sciences
      </p>
    </div>
  );
};

export default Header;
