export function getSessionStorageOrDefault(
  key: string,
  defaultValue: string | boolean
) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}
