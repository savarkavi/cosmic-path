import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Hr,
  Section,
  Button,
  Preview,
  Tailwind,
} from "@react-email/components";

// --------------------------------------------------------
// 1. STUDENT WELCOME EMAIL
// --------------------------------------------------------
interface StudentEmailProps {
  name: string | undefined;
  orderId: string;
  amount: number;
  courses: { title: string }[];
}

export const StudentWelcomeEmail = ({
  name,
  orderId,
  amount,
  courses,
}: StudentEmailProps) => {
  return (
    <Html>
      <Preview>Welcome to the course! Payment confirmed.</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Namaste🙏,{" "}
              <strong className="capitalize">{name ?? "User"}</strong>!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Thank you for your purchase. We have successfully received your
              payment of
              <strong> ₹{amount}</strong>.
            </Text>

            <Section>
              <Text className="text-[16px] font-bold text-black">
                Your Courses:
              </Text>
              <ul className="list-disc pl-5">
                {courses.map((course, index) => (
                  <li key={index} className="mb-2 text-[14px] text-black">
                    {course.title}
                  </li>
                ))}
              </ul>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            <Text className="text-[12px] leading-[24px] text-[#666666]">
              <strong>Order ID:</strong> {orderId}
            </Text>

            <Section className="mt-[32px] mb-[32px] text-center">
              <div className="rounded-lg bg-blue-50 p-4">
                <Text className="m-0 text-[16px] font-bold text-blue-800">
                  What happens next?
                </Text>
                <Text className="m-0 mt-2 text-[14px] text-blue-600">
                  Our team is finalizing the batch schedule. You will receive a
                  separate email with the <strong>Zoom Link</strong> and{" "}
                  <strong>Date/Time</strong> shortly.
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// --------------------------------------------------------
// 2. ADMIN NOTIFICATION EMAIL
// --------------------------------------------------------
interface AdminEmailProps {
  customerEmail: string | undefined;
  customerPhone: string | undefined;
  amount: number;
  courses?: { title: string }[];
  bookingDetails?: {
    serviceType: string;
    message?: string;
  };
}

export const AdminNotificationEmail = ({
  customerEmail,
  customerPhone,
  amount,
  courses,
  bookingDetails,
}: AdminEmailProps) => {
  return (
    <Html>
      <Preview>{`New Sale: ₹${amount}`}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-gray-50 font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] bg-white p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-green-600">
              New Sale! 💰
            </Heading>

            <Section className="mb-4 rounded bg-gray-100 p-4">
              <Text className="m-0 text-[14px]">
                <strong>User:</strong> {customerEmail}
              </Text>
              <Text className="m-0 text-[14px]">
                <strong>Phone:</strong> {customerPhone ?? "N/A"}
              </Text>
              <Text className="m-0 text-[14px]">
                <strong>Total:</strong> ₹{amount}
              </Text>
            </Section>

            {courses && courses.length > 0 && (
              <Section>
                <Text className="font-bold">Items Purchased:</Text>
                <ul className="list-disc pl-5">
                  {courses.map((course, index) => (
                    <li key={index} className="mb-1 text-[14px]">
                      {course.title}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {bookingDetails && (
              <Section>
                <Text className="font-bold">Consultation Booked:</Text>
                <Text className="m-0 text-[14px]">
                  <strong>Service:</strong> {bookingDetails.serviceType}
                </Text>
                {bookingDetails.message && (
                  <Text className="m-0 text-[14px]">
                    <strong>Message:</strong> {bookingDetails.message}
                  </Text>
                )}
              </Section>
            )}

            <Section className="mt-[32px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href="https://yoursite.com/admin"
              >
                Go to Admin Dashboard
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// --------------------------------------------------------
// 3. STUDENT BOOKING EMAIL
// --------------------------------------------------------
interface StudentBookingEmailProps {
  name: string | undefined;
  orderId: string;
  amount: number;
  serviceType: string;
  message?: string;
}

export const StudentBookingEmail = ({
  name,
  orderId,
  amount,
  serviceType,
  message,
}: StudentBookingEmailProps) => {
  return (
    <Html>
      <Preview>Booking Confirmed! Consultation Scheduled.</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Namaste🙏,{" "}
              <strong className="capitalize">{name ?? "User"}</strong>!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Thank you for booking a consultation. We have successfully
              received your payment of
              <strong> ₹{amount}</strong>.
            </Text>

            <Section>
              <Text className="text-[16px] font-bold text-black">
                Booking Details:
              </Text>
              <Text className="mt-2 text-[14px] text-black">
                <strong>Service Type:</strong> {serviceType}
              </Text>
              {message && (
                <Text className="mt-1 text-[14px] text-black">
                  <strong>Your Message:</strong> {message}
                </Text>
              )}
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            <Text className="text-[12px] leading-[24px] text-[#666666]">
              <strong>Order ID:</strong> {orderId}
            </Text>

            <Section className="mt-[32px] mb-[32px] text-center">
              <div className="rounded-lg bg-blue-50 p-4">
                <Text className="m-0 text-[16px] font-bold text-blue-800">
                  What happens next?
                </Text>
                <Text className="m-0 mt-2 text-[14px] text-blue-600">
                  Our team will contact you shortly to confirm the scheduled
                  time for your consultation. Please keep an eye on your email
                  and phone.
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
