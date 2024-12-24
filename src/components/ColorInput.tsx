import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ColorInputProps {
  onSubmit: (color: string, count: number) => void;
}

export function ColorInput({ onSubmit }: ColorInputProps) {
  const [color, setColor] = useState('');
  const [count, setCount] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(color, count);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
          输入颜色值
        </label>
        <div className="mt-1 flex space-x-4">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="#FF5733 or rgb(255, 87, 51)"
          />
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10))}
            className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        匹配颜色
      </button>
    </form>
  );
}