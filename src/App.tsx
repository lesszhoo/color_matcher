import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { ColorInput } from './components/ColorInput';
import { ColorResult } from './components/ColorResult';
import { ColorTable } from './components/ColorTable';
import { ViewToggle } from './components/ViewToggle';
import { parseColor, calculateColorDistance, calculateSimilarity } from './utils/colorConversion';
import { MatchResult, ViewMode } from './types/color';
import { colorDatabase } from './data/colorDatabase';

function App() {
  const [results, setResults] = useState<MatchResult[]>([]);
  const [error, setError] = useState<string>('');
  const [viewMode, setViewMode] = useState<ViewMode>('card');

  const handleColorMatch = (inputColor: string, count: number) => {
    try {
      setError('');
      const targetRgb = parseColor(inputColor);
      
      const matches = colorDatabase
        .map(color => ({
          ...color,
          distance: calculateColorDistance(targetRgb, color.rgb),
          similarity: calculateSimilarity(
            calculateColorDistance(targetRgb, color.rgb)
          ),
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, count);

      setResults(matches);
    } catch (err) {
      setError('Invalid color format. Please use HEX (#FF5733), RGB (rgb(255, 87, 51)), or HSL (hsl(12, 100%, 60%))');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Palette className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900">
            Color Matcher
          </h1>
          <p className="mt-2 text-gray-600">
            Find similar colors from our database. Supports HEX, RGB, and HSL formats.
          </p>
        </div>

        <div className="space-y-6">
          <ColorInput onSubmit={handleColorMatch} />
          
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-2 text-sm text-red-700">{error}</div>
                </div>
              </div>
            </div>
          )}

          {results.length > 0 && (
            <>
              <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
              {viewMode === 'card' ? (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <ColorResult key={index} {...result} />
                  ))}
                </div>
              ) : (
                <ColorTable results={results} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;