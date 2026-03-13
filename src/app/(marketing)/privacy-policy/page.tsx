import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-28 pb-20 text-black md:pt-40">
      <h1 className="mb-8 font-serif text-4xl md:text-5xl">Privacy Policy</h1>
      <div className="space-y-6 leading-relaxed">
        <p>Last updated: 13th March, 2026</p>
        <p className="text-gray-500">
          Welcome to Cosmic Path. We respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you as
          to how we look after your personal data when you visit our website and
          tell you about your privacy rights and how the law protects you.
        </p>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            1. Information We Collect
          </h2>
          <p className="text-gray-500">
            We may collect, use, store and transfer different kinds of personal
            data about you, including but not limited to identity data, contact
            data, financial data, and technical data.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            2. How We Use Your Data
          </h2>
          <p className="text-gray-500">
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data to perform the contract we
            are about to enter into or have entered into with you, and to comply
            with a legal or regulatory obligation.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">3. Data Security</h2>
          <p className="text-gray-500">
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way, altered, or disclosed.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">
            4. Your Legal Rights
          </h2>
          <p className="text-gray-500">
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to
            request access, correction, erasure, restriction, transfer, to
            object to processing, to portability of data, and (where the lawful
            ground of processing is consent) to withdraw consent.
          </p>
        </div>

        <div>
          <h2 className="mt-8 mb-4 font-serif text-2xl">5. Contact Us</h2>
          <p className="text-gray-500">
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at{" "}
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

export default PrivacyPolicyPage;
