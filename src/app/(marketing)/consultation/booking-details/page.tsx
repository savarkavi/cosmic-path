"use client";

import { BookingDetailsForm } from "@/components/forms/booking-details";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Loader2 } from "lucide-react";

const BookingDetailsPage = () => {
  const user = useQuery(api.users.getMe);

  if (user === undefined || user === null) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 md:pt-30">
      <div className="container mx-auto px-4">
        <BookingDetailsForm user={user} />
      </div>
    </div>
  );
};

export default BookingDetailsPage;
