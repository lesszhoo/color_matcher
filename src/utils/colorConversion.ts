// Color conversion utilities
export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error('Invalid hex color');
  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ];
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

export function parseColor(color: string): [number, number, number] {
  if (color.startsWith('#')) {
    return hexToRgb(color);
  }
  if (color.startsWith('rgb')) {
    const match = color.match(/\d+/g);
    if (!match || match.length !== 3) throw new Error('Invalid RGB color');
    return match.map(Number) as [number, number, number];
  }
  if (color.startsWith('hsl')) {
    const match = color.match(/\d+/g);
    if (!match || match.length !== 3) throw new Error('Invalid HSL color');
    const [h, s, l] = match.map(Number);
    return hslToRgb(h, s, l);
  }
  throw new Error('Unsupported color format');
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [
    Math.round(255 * f(0)),
    Math.round(255 * f(8)),
    Math.round(255 * f(4))
  ];
}

export function calculateColorDistance(color1: [number, number, number], color2: [number, number, number]): number {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
  const rMean = (r1 + r2) / 2;
  const r = r1 - r2;
  const g = g1 - g2;
  const b = b1 - b2;
  const weightR = 2 + rMean / 256;
  const weightG = 4;
  const weightB = 2 + (255 - rMean) / 256;
  return Math.sqrt(weightR * r * r + weightG * g * g + weightB * b * b);
}

export function calculateSimilarity(distance: number): number {
  const maxDistance = 764.8233151496104; // Maximum possible distance
  return Math.max(0, Math.min(100, (1 - distance / maxDistance) * 100));
}