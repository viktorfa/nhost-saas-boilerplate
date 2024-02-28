import { differenceWith, toPairs, fromPairs, isEqual } from "lodash-es";

export const getDifferenceInObjects = <T = Record<string, any>>({
  from,
  to,
}: {
  from: T;
  to: T;
}): Partial<T> => {
  const changes = differenceWith(toPairs<T>(to), toPairs<T>(from), isEqual);

  // Changes in array form
  console.log(changes);
  // Changes in object form
  console.log(fromPairs(changes));

  return fromPairs(changes);
};

export const stringToBoolean = (string?: any): boolean => {
  if (!string || !string.toLowerCase) {
    return !!string;
  }
  switch (string.toLowerCase().trim()) {
    case "true":
    case "yes":
    case "1":
      return true;
    case "false":
    case "no":
    case "0":
    case null:
      return false;
    default:
      return Boolean(string);
  }
};

export const isProd = () =>
  process.env.NHOST_SUBDOMAIN === "YOUR_PROD_SUBDOMAIN";

export const useMock =
  process.env.NHOST_SUBDOMAIN === "local" &&
  !["true", "1"].includes(process.env.DISABLE_MOCK);
