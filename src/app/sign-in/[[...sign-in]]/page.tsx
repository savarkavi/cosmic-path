import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <SignIn
        appearance={{
          variables: {
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
}
