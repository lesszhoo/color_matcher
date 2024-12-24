import React from 'react';

interface ColorResultProps {
  name: string;
  hex: string;
  rgb: [number, number, number];
  similarity: number;
  distance: number;
}

export function ColorResult({ name, hex, rgb, similarity, distance }: ColorResultProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
      <div
        className="w-16 h-16 rounded-md shadow-inner"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <div className="text-sm text-gray-500 space-y-1">
          <p>HEX: {hex}</p>
          <p>RGB: rgb({rgb.join(', ')})</p>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 rounded"
                  style={{
                    width: `${similarity}%`,
                    backgroundColor: similarity >= 60 ? '#10B981' : '#F59E0B'
                  }}
                />
              </div>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">
              {similarity.toFixed(1)}%
            </span>
          </div>
          {similarity < 60 && (
            <p className="text-amber-600 font-medium">匹配度较低</p>
          )}
        </div>
      </div>
    </div>
  );
}