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
  const previewText = `Välkommen till My App Name`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Välkommen till My App Name
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Du kan nu använda tjänsten, och dina filer och resultat kommer att
              säkert lagras på ditt konto.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Fyll i ett litet formulär på webbplatsen för att få 120 minuters
              gratis transkribering.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Tveka inte att kontakta oss om du har några frågor eller feedback.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="https://my-app.com/app/dashboard"
              >
                Logga in
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Eller besök denna länk:{" "}
              <Link
                href="https://my-app.com/app/dashboard"
                className="text-blue-600 no-underline"
              >
                https://my-app.com/app/dashboard
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Detta e-postmeddelande har skickats till{" "}
              <span className="text-black">{toEmail}</span>. Om du inte
              förväntade dig att få detta e-postmeddelande kan du tryggt
              ignorera det.
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
