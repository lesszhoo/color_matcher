export interface ColorEntry {
  name: string;
  hex: string;
  rgb: [number, number, number];
}

export const colorDatabase: ColorEntry[] = [
  { name: "Pure Red", hex: "#FF0000", rgb: [255, 0, 0] },
  { name: "Coral", hex: "#FF7F50", rgb: [255, 127, 80] },
  { name: "Deep Pink", hex: "#FF1493", rgb: [255, 20, 147] },
  { name: "Orange Red", hex: "#FF4500", rgb: [255, 69, 0] },
  { name: "Gold", hex: "#FFD700", rgb: [255, 215, 0] },
  { name: "Forest Green", hex: "#228B22", rgb: [34, 139, 34] },
  { name: "Royal Blue", hex: "#4169E1", rgb: [65, 105, 225] },
  { name: "Deep Sky Blue", hex: "#00BFFF", rgb: [0, 191, 255] },
  { name: "Purple", hex: "#800080", rgb: [128, 0, 128] },
  { name: "Slate Gray", hex: "#708090", rgb: [112, 128, 144] },
  // Add more colors as needed
];