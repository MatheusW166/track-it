function dateToLocaleString(date, locale = "pt-BR", timeZone = "UTC") {
  return date.toLocaleString(locale, { timeZone }).split(",")[0];
}

export { dateToLocaleString };
