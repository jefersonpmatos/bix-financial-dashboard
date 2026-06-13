export function uniqueBy<T>(arr: T[], key: keyof T) {
  return Array.from(new Set(arr.map((item) => item[key])));
}
