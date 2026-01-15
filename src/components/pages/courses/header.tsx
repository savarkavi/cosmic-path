import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="font- text-6xl capitalize">
        Explore the{" "}
        <span className="text-accent-foreground italic">Cosmic</span> sciences
      </p>
      <div className="flex items-center gap-4">
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
