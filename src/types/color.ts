export interface ColorEntry {
  id: string;
  name: string;
  hex: string;
  rgb: [number, number, number];
  description?: string;
  category: string;
  library: string;
  tags?: string[];
}

export interface ColorLibrary {
  id: string;
  name: string;
  description: string;
  categories: string[];
}

export interface MatchResult extends ColorEntry {
  similarity: number;
  distance: number;
}

export type ViewMode = 'card' | 'table';