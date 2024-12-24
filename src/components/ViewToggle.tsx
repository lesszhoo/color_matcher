import React from 'react';
import { LayoutGrid, Table } from 'lucide-react';
import { ViewMode } from '../types/color';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <button
        onClick={() => onViewChange('card')}
        className={`p-2 rounded-md ${
          currentView === 'card'
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        title="Card View"
      >
        <LayoutGrid className="h-5 w-5" />
      </button>
      <button
        onClick={() => onViewChange('table')}
        className={`p-2 rounded-md ${
          currentView === 'table'
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        title="Table View"
      >
        <Table className="h-5 w-5" />
      </button>
    </div>
  );
}