import React from "react";

const RefundPolicyPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-28 pb-20 text-black md:pt-40">
      <h1 className="mb-8 font-serif text-4xl md:text-5xl">
        Refund & Cancellation Policy
      </h1>
      <div className="space-y-6 leading-relaxed">
        <p>Last updated: 13th March, 2026</p>

        <p className="text-gray-500">
          At Cosmic Path, we are committed to providing you with the best
          astrological consultations and courses. Please read our refund and
          cancellation policy carefully before making any purchases or bookings.
        </p>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            1. Consultation Cancellations & Rescheduling
          </h2>
          <p className="mb-4 text-gray-500">
            We understand that circumstances may arise which require you to
            change your plans. You may reschedule or cancel your consultation
            appointment up to 24 hours before the scheduled time without any
            penalty.
          </p>
          <p className="text-gray-500">
            Cancellations made within 24 hours of the scheduled appointment will
            not be eligible for a refund.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">2. Course Refunds</h2>
          <p className="text-gray-500">
            For online courses, refunds are evaluated on a case-by-case basis.
            If you are dissatisfied with a course, please contact us within 7
            days of purchase. Refunds will not be granted if a significant
            portion of the course material has already been accessed or
            downloaded.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            3. Processing of Refunds
          </h2>
          <p className="text-gray-500">
            Approved refunds will be processed within 5-7 business days and will
            automatically be applied to your original method of payment.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">4. Exceptions</h2>
          <p className="text-gray-500">
            In cases of unexpected emergencies or issues on our end that prevent
            the delivery of services, a full refund or a rescheduled appointment
            will be offered.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">Contact Us</h2>
          <p className="text-gray-500">
            If you have any questions about our refund and cancellation policy,
            please contact us at{" "}
            <a
              href="mailto:contact@cosmicpath.com"
              className="transition-colors hover:underline"
            >
              contact@cosmicpath.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
