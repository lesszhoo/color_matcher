import { ColorLibrary, ColorEntry } from '../types/color';

export const colorLibraries: ColorLibrary[] = [
  {
    id: 'basic',
    name: 'Basic Colors',
    description: 'Fundamental color palette with primary and secondary colors',
    categories: ['Primary', 'Secondary', 'Neutral']
  },
  {
    id: 'theme',
    name: 'Theme Colors',
    description: 'Themed color sets for different design systems',
    categories: ['Light', 'Dark', 'Brand']
  },
  {
    id: 'semantic',
    name: 'Semantic Colors',
    description: 'Colors with specific meanings and use cases',
    categories: ['Success', 'Warning', 'Error', 'Info']
  }
];

export const colorDatabase: ColorEntry[] = [
  {
    id: '1',
    name: 'Pure Red',
    hex: '#FF0000',
    rgb: [255, 0, 0],
    category: 'Primary',
    library: 'basic',
    description: 'Pure red color, maximum saturation'
  },
  {
    id: '2',
    name: 'Success Green',
    hex: '#10B981',
    rgb: [16, 185, 129],
    category: 'Success',
    library: 'semantic',
    description: 'Primary success indication color'
  },
  {
    id: '3',
    name: 'Warning Amber',
    hex: '#F59E0B',
    rgb: [245, 158, 11],
    category: 'Warning',
    library: 'semantic',
    description: 'Primary warning indication color'
  },
  // Add more colors...
];