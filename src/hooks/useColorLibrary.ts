import { useState, useCallback } from 'react';
import { ColorEntry, ColorLibrary } from '../types/color';
import { colorDatabase, colorLibraries } from '../data/colorLibraries';

export function useColorLibrary() {
  const [colors, setColors] = useState<ColorEntry[]>(colorDatabase);
  const [libraries] = useState<ColorLibrary[]>(colorLibraries);

  const addColor = useCallback((color: Omit<ColorEntry, 'id'>) => {
    const newColor: ColorEntry = {
      ...color,
      id: Math.random().toString(36).substr(2, 9)
    };
    setColors(prev => [...prev, newColor]);
  }, []);

  const updateColor = useCallback((id: string, updates: Partial<ColorEntry>) => {
    setColors(prev =>
      prev.map(color => (color.id === id ? { ...color, ...updates } : color))
    );
  }, []);

  const deleteColor = useCallback((id: string) => {
    setColors(prev => prev.filter(color => color.id !== id));
  }, []);

  const getColorsByLibrary = useCallback(
    (libraryId: string) => {
      return colors.filter(color => color.library === libraryId);
    },
    [colors]
  );

  const getColorsByCategory = useCallback(
    (category: string) => {
      return colors.filter(color => color.category === category);
    },
    [colors]
  );

  const exportLibrary = useCallback(
    (libraryId: string) => {
      const libraryColors = getColorsByLibrary(libraryId);
      const library = libraries.find(lib => lib.id === libraryId);
      return {
        library,
        colors: libraryColors
      };
    },
    [getColorsByLibrary, libraries]
  );

  const importLibrary = useCallback((data: { library: ColorLibrary; colors: ColorEntry[] }) => {
    const { colors: newColors } = data;
    setColors(prev => {
      const filtered = prev.filter(color => color.library !== data.library.id);
      return [...filtered, ...newColors];
    });
  }, []);

  return {
    colors,
    libraries,
    addColor,
    updateColor,
    deleteColor,
    getColorsByLibrary,
    getColorsByCategory,
    exportLibrary,
    importLibrary
  };
}