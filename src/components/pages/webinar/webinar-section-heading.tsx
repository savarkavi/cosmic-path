type WebinarSectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
};

const WebinarSectionHeading = ({
  centered = true,
  description,
  label,
  title,
}: WebinarSectionHeadingProps) => {
  return (
    <div
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      data-reveal
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[#c9a84c] uppercase">
        {label}
      </p>
      <h2 className="text-3xl leading-tight font-semibold text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#bdb7ce] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default WebinarSectionHeading;
