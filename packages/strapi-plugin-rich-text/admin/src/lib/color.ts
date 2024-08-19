import type { RgbColor, RgbaColor } from "../../../types/color";

export const round = (
  number: number,
  digits = 0,
  base = Math.pow(10, digits)
): number => {
  return Math.round(base * number) / base;
};

const format = (number: number) => {
  const hex = number.toString(16);
  return hex.length < 2 ? "0" + hex : hex;
};

export const rgbaStringToRgba = (rgbaString: string): RgbaColor => {
  const matcher =
    /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  const match = matcher.exec(rgbaString);

  if (!match) return { r: 0, g: 0, b: 0, a: 1 };

  return {
    r: Number(match[1]),
    g: Number(match[3]),
    b: Number(match[5]),
    a: match[7] === undefined ? 1 : Number(match[7]),
  };
};

export const rgbStringToRgba = rgbaStringToRgba;

export const rgbaToHex = ({ r, g, b, a }: RgbaColor): string => {
  const alphaHex = a < 1 ? format(round(a * 255)) : "";
  return "#" + format(r) + format(g) + format(b) + alphaHex;
};
