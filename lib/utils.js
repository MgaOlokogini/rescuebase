export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function dateToIso(value) {
  return value ? new Date(value).toISOString() : null;
}
