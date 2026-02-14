import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex flex-col gap-6 md:items-center lg:gap-8 xl:flex-row xl:justify-between xl:gap-0">
      <p className="text-3xl capitalize md:text-6xl">
        Explore the{" "}
        <span className="text-accent-foreground italic">Cosmic</span> sciences
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <Button className="bg-foreground rounded-full px-8 text-white">
          All courses
        </Button>
        <Button variant="outline" className="shdaow-lg rounded-full px-8">
          Beginner
        </Button>
        <Button variant="outline" className="shdaow-lg rounded-full px-8">
          Advanced
        </Button>
      </div>
    </div>
  );
};

export default Header;
