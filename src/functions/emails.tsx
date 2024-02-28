import * as React from "react";
import { render, type Options } from "@react-email/render";
import {
  WelcomeEmail,
  type WelcomeEmailProps,
} from "../react-email/emails/en/welcome-email";
import {
  PurchaseEmail,
  type PurchaseEmailProps,
} from "../react-email/emails/en/purchase-email";

export const getWelcomeEmailSubjectLine = ({
  locale = "en",
}: {
  locale: string;
}) => {
  switch (locale) {
    case "en":
      return "My App Name - Welcome to My App Name";
    case "nb":
      return "My App Name - Velkommen til My App Name";
    case "nn":
      return "My App Name - Velkomen til My App Name";
    case "da":
      return "My App Name - Velkommen til My App Name";
    case "sv":
      return "My App Name - Välkommen till My App Name";
    default:
      return "My App Name - Welcome to My App Name";
  }
};
export const getPurchaseEmailSubjectLine = ({
  locale = "en",
}: {
  locale: string;
}) => {
  switch (locale) {
    case "en":
      return "My App Name - Thank you for your purchase";
    case "nb":
      return "My App Name - Takk for ditt kjøp";
    case "nn":
      return "My App Name - Takk for ditt kjøp";
    case "da":
      return "My App Name - Tak for dit køb";
    case "sv":
      return "My App Name - Tack för ditt köp";
    default:
      return "My App Name - Thank you for your purchase";
  }
};

export const getWelcomeEmailString = async ({
  props,
  options = {},
  locale = "en",
}: {
  props: WelcomeEmailProps;
  options?: Options;
  locale: string;
}) => {
  let WelcomeEmailComponent = WelcomeEmail;

  console.log("getWelcomeEmailString");
  console.log("getWelcomeEmailString", locale);

  switch (locale) {
    case "en":
      WelcomeEmailComponent = (
        await require("../react-email/emails/en/welcome-email")
      ).WelcomeEmail;
      break;
    case "nb":
      WelcomeEmailComponent = (
        await require("../react-email/emails/nb/welcome-email")
      ).WelcomeEmail;
      break;
    case "nn":
      WelcomeEmailComponent = (
        await require("../react-email/emails/nn/welcome-email")
      ).WelcomeEmail;
      break;
    case "da":
      WelcomeEmailComponent = (
        await require("../react-email/emails/da/welcome-email")
      ).WelcomeEmail;
      break;
    case "sv":
      WelcomeEmailComponent = (
        await require("../react-email/emails/sv/welcome-email")
      ).WelcomeEmail;
      break;
  }

  const emailHtml = render(<WelcomeEmailComponent {...props} />, options);
  console.log(emailHtml);
  return emailHtml;
};

export const getPurchaseEmailString = async ({
  props,
  options = {},
  locale = "en",
}: {
  props: PurchaseEmailProps;
  options?: Options;
  locale: string;
}) => {
  let PurchaseEmailComponent = PurchaseEmail;
  switch (locale) {
    case "en":
      PurchaseEmailComponent = (
        await require("../react-email/emails/en/purchase-email")
      ).PurchaseEmail;
      break;
    case "nb":
      PurchaseEmailComponent = (
        await require("../react-email/emails/nb/purchase-email")
      ).PurchaseEmail;
      break;
    case "nn":
      PurchaseEmailComponent = (
        await require("../react-email/emails/nn/purchase-email")
      ).PurchaseEmail;
      break;
    case "da":
      PurchaseEmailComponent = (
        await require("../react-email/emails/da/purchase-email")
      ).PurchaseEmail;
      break;
    case "sv":
      PurchaseEmailComponent = (
        await require("../react-email/emails/sv/purchase-email")
      ).PurchaseEmail;
      break;
  }

  const emailHtml = render(<PurchaseEmailComponent {...props} />, options);
  console.log(emailHtml);
  return emailHtml;
};
