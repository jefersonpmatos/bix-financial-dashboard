export function loadStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const data = localStorage.getItem(key);
    if (!data) return fallback;

    return JSON.parse(data);
  } catch {
    return fallback;
  }
}

export function saveStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") return;

  localStorage.setItem(key, JSON.stringify(value));
}
