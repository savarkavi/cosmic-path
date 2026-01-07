interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex w-fit flex-col items-center gap-2">
      <p className="font-italiana text-center text-7xl">{title}</p>
      <div className="bg-primary h-1 w-1/2" />
    </div>
  );
};

export default SectionTitle;
