const getUserTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export function getDateInUserTimeZone(date) {
  const userTimeZone = getUserTimeZone();
  return date.toLocaleString('en-US', { timeZone: userTimeZone });
}

export function isSameDay(date1, date2) {
  return date1.toDateString() === date2.toDateString();
}

export function getFiveDaysFromNow() {
  const date = new Date();
  date.setDate(date.getDate() + 4);
  return date;
}
