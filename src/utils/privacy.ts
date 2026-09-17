export function maskSensitiveValue(
  value: string | number,
  secure: boolean
): string | number {
  return secure ? "•••" : value;
}