export const maskText = (
  text: string,
  secure: boolean
) => {
  if (!secure) return text;

  return "••••••••";
};

export const maskPartial = (
  text: string,
  secure: boolean
) => {
  if (!secure) return text;

  return text[0] + "••••••";
};