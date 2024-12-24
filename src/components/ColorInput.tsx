import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ColorInputProps {
  onSubmit: (color: string, count: number) => void;
}

export function ColorInput({ onSubmit }: ColorInputProps) {
  const [color, setColor] = useState('');
  const [count, setCount] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (color) {
      onSubmit(color, count);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
          Enter Color (HEX, RGB, or HSL)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#FF5733 or rgb(255, 87, 51) or hsl(12, 100%, 60%)"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <input
            type="number"
            min="1"
            max="10"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Search className="h-4 w-4 mr-2" />
            Match
          </button>
        </div>
      </div>
    </form>
  );
}