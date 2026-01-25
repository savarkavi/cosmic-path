import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import React from "react";

const MarketingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
