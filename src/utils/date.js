const getUserTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export function getDateInUserTimeZone(date) {
  const userTimeZone = getUserTimeZone();
  return date.toLocaleString('en-US', { timeZone: userTimeZone });
}
