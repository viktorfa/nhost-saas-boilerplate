import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export type PurchaseEmailProps = {
  toEmail: string;
  purchaseAmountString: string;
  purchaseCredits: number;
  receiptUrl?: string;
};

export const PurchaseEmail = ({
  toEmail,
  purchaseAmountString,
  purchaseCredits,
  receiptUrl,
}: PurchaseEmailProps) => {
  const previewText = `My App Name - Thank you for your purchase`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Thank you for your purchase
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Your purchase of {purchaseCredits} minutes of transcription for{" "}
              {purchaseAmountString} has been completed.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Visit{" "}
              <Link
                href="https://my-app.com/app/dashboard"
                className="text-blue-600 no-underline"
              >
                My App Name
              </Link>{" "}
              to get started.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Please contact us if you have any questions or feedback.
            </Text>
            {(receiptUrl && (
              <Text className="text-black text-[14px] leading-[24px]">
                Receipt can be viewed at{" "}
                <Link href={receiptUrl} className="text-blue-600 no-underline">
                  {receiptUrl}
                </Link>
              </Text>
            )) ||
              null}
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="https://my-app.com/app/dashboard"
              >
                Log in
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Or visit this link:{" "}
              <Link
                href="https://my-app.com/app/dashboard"
                className="text-blue-600 no-underline"
              >
                https://my-app.com/app/dashboard
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This email was sent to{" "}
              <span className="text-black">{toEmail}</span>. If you were not
              expecting to receive this email, you can safely ignore it.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PurchaseEmail.PreviewProps = {
  toEmail: "gunnar@gmail.com",
  purchaseAmountString: "200,- kr",
  purchaseCredits: 100,
  receiptUrl:
    "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xT0hHVVBIQVVRS1hhMGNsKICGr60GMga0l-C1aTY6LBbb3A-jqlVI6EEoYOhrl61v2loWPT9yJKjz45824Lm7wAPfYptmK3i4mZT3",
} as PurchaseEmailProps;

export default PurchaseEmail;
