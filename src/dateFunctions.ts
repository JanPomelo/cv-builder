import { format } from "date-fns";
import { profExp, education } from "./types";

export function adjustDateFormat(date: string): string {
  const year: string = date.substring(0, 4);
  const month: string = date.substring(5, 7);
  const newDate: string = month + "/" + year;
  return newDate;
}

export function turnToday2Now(exp: education | profExp): string {
  let endDate = adjustDateFormat(exp.endDate);
  const today = format(new Date(), "yyyy-MM-dd");
  if (today === exp.endDate) {
    endDate = "now";
  }
  return endDate;
}