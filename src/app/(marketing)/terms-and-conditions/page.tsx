import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-28 pb-20 text-black md:pt-40">
      <h1 className="mb-8 font-serif text-4xl md:text-5xl">
        Terms &amp; Conditions
      </h1>
      <div className="space-y-6 leading-relaxed">
        <p>Last updated: 24th March, 2026</p>

        <p className="text-gray-500">
          Welcome to Cosmic Path. By accessing or using our website, services,
          courses, and consultations, you agree to be bound by these Terms &
          Conditions. Please read them carefully before using our platform.
        </p>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-500">
            By accessing and using this website, you accept and agree to be
            bound by these Terms & Conditions. If you do not agree with any part
            of these terms, you must not use our website or services. We reserve
            the right to update or modify these terms at any time without prior
            notice.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            2. Use of Services
          </h2>
          <p className="mb-4 text-gray-500">
            Our services, including astrological consultations and courses, are
            provided for informational and educational purposes only. You agree
            to use our services in accordance with all applicable laws and
            regulations.
          </p>
          <p className="text-gray-500">
            You must not use our services for any unlawful purpose, or in any
            way that could damage, disable, or impair the website or interfere
            with any other party&apos;s use of the website.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            3. User Accounts
          </h2>
          <p className="text-gray-500">
            When you create an account with us, you must provide accurate,
            complete, and up-to-date information. You are responsible for
            safeguarding your account credentials and for any activities or
            actions under your account. You must notify us immediately of any
            unauthorized use of your account.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            4. Intellectual Property
          </h2>
          <p className="text-gray-500">
            All content on this website, including but not limited to text,
            graphics, logos, images, audio clips, video content, course
            materials, and software, is the property of Cosmic Path and is
            protected by applicable intellectual property laws. You may not
            reproduce, distribute, modify, or create derivative works from any
            content without our prior written consent.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            5. Payment Terms
          </h2>
          <p className="text-gray-500">
            All payments for services and courses are processed through secure
            third-party payment gateways. Prices are listed in Indian Rupees
            (INR) unless otherwise stated. We reserve the right to change prices
            at any time. Payment must be received in full before access to
            courses or prior to consultation appointments.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-500">
            Cosmic Path shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of
            our services. Our astrological readings and consultations are for
            guidance and entertainment purposes and should not be taken as
            professional advice for legal, financial, or medical decisions.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            7. Governing Law
          </h2>
          <p className="text-gray-500">
            These Terms & Conditions are governed by and construed in accordance
            with the laws of India. Any disputes arising under these terms shall
            be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">8. Contact Us</h2>
          <p className="text-gray-500">
            If you have any questions about these Terms & Conditions, please
            contact us at{" "}
            <a
              href="mailto:myaccount.abc@gmail.com"
              className="transition-colors hover:underline"
            >
              myaccount.abc@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
