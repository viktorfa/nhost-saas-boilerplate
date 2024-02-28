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

export type WelcomeEmailProps = {
  toEmail: string;
};

export const WelcomeEmail = ({ toEmail }: WelcomeEmailProps) => {
  const previewText = `Velkommen til My App Name`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Velkommen til My App Name
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Du kan nå bruke tjenesten, og dine filer og resultater vil bli
              trygt lagret i din konto.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Fullfør et bitte lite skjema på nettstedet for å få 120 minutters
              gratis transkribering.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Ta gjerne kontakt hvis du lurer på noe eller har tilbakemelding.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="https://my-app.com/app/dashboard"
              >
                Logg inn
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Eller besøk denne linken:{" "}
              <Link
                href="https://my-app.com/app/dashboard"
                className="text-blue-600 no-underline"
              >
                https://my-app.com/app/dashboard
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Denne eposten er sendt til{" "}
              <span className="text-black">{toEmail}</span>. Hvis du ikke
              forventet å motta denne eposten, kan du trygt ignorere den.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WelcomeEmail.PreviewProps = {
  toEmail: "gunnar@gmail.com",
} as WelcomeEmailProps;

export default WelcomeEmail;
