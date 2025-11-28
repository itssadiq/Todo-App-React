import dayjs from "dayjs";

const today = dayjs();
export const currentDay = today.format("ddd");
export const currentDate = today.format("D");

const yesterday = today.subtract(1, "day");
export const yesterdayDay = yesterday.format("ddd");
export const yesterdayDate = yesterday.format("D");

const tomorrow = today.add(1, "day");
export const tomorrowDay = tomorrow.format("ddd");
export const tomorrowDate = tomorrow.format("D");

const day2 = today.add(2, "day");
export const day2day = day2.format("ddd");
export const day2date = day2.format("D");

const day3 = today.add(3, "day");
export const day3day = day3.format("ddd");
export const day3date = day3.format("D");

const day4 = today.add(4, "day");
export const day4day = day4.format("ddd");
export const day4date = day4.format("D");
