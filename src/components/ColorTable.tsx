import React from 'react';
import { MatchResult } from '../types/color';

interface ColorTableProps {
  results: MatchResult[];
}

export function ColorTable({ results }: ColorTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Preview
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              HEX
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              RGB
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Similarity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map((result, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div
                  className="w-8 h-8 rounded-md shadow-inner"
                  style={{ backgroundColor: result.hex }}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {result.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {result.hex}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                rgb({result.rgb.join(', ')})
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-1 max-w-[100px]">
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 rounded"
                        style={{
                          width: `${result.similarity}%`,
                          backgroundColor: result.similarity >= 60 ? '#10B981' : '#F59E0B'
                        }}
                      />
                    </div>
                  </div>
                  <span className="ml-2 text-sm text-gray-700">
                    {result.similarity.toFixed(1)}%
                  </span>
                </div>
                {result.similarity < 60 && (
                  <span className="text-xs text-amber-600">匹配度较低</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {result.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}