import { Temporal } from "@js-temporal/polyfill";

export function getMonth(monthIsoFormat: number) {
  const monthArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  let monthInWords;

  monthArray.forEach((month, index) => {
    if (monthIsoFormat === index + 1) {
      monthInWords = month;
    }
  });

  return monthInWords;
}

export const getCurrentDate = () => {
  const today = Temporal.Now.plainDateTimeISO();
  const todayDate = today.day;
  const monthInWords: any = getMonth(today.month);
  const year = today.year;

  return `${todayDate} ${
    monthInWords[0] + monthInWords[1] + monthInWords[2]
  } ${year}`;
};
