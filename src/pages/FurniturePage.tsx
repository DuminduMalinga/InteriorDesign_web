import { useState } from 'react';
import { ChevronLeft, RotateCcw, RotateCw, PlusSquare } from 'lucide-react';

const categories = [
  'Bedroom',
  'Living Room',
  'Kitchen',
  'Bathroom',
  'Office'
];

const themes = ['Modern', 'Minimalist', 'Scandinavian', 'Industrial', 'Luxury'];

export default function FurniturePage({ onBack, onNext }: { onBack?: () => void; onNext?: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [selectedTheme, setSelectedTheme] = useState<string>(themes[0]);
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={() => onBack?.()} className="px-3 py-2 rounded-lg border flex items-center gap-2"><ChevronLeft className="w-4 h-4" /> Back</button>
            <h1 className="text-2xl font-bold">Furniture Placement</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg border">Undo</button>
            <button className="px-3 py-2 rounded-lg border">Redo</button>
            <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">Auto Arrange</button>
            <button onClick={() => onNext?.()} className="px-3 py-2 rounded-lg bg-green-600 text-white">Next: Export</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <aside className="lg:col-span-1 bg-white rounded-2xl p-4 shadow h-[640px] overflow-auto">
            <h2 className="font-semibold mb-3">Furniture Library</h2>
            <div className="flex gap-2 mb-4 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1 rounded ${selectedCategory === cat ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>{cat}</button>
              ))}
            </div>

            <div className="space-y-3">
              {/* Mock thumbnails */}
              {[1,2,3,4,5].map(i => (
                <div key={i} className="p-2 border rounded flex items-center gap-3 cursor-pointer hover:bg-gray-50" onClick={() => setSelectedObject(`${selectedCategory}-${i}`)}>
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center"><PlusSquare className="w-5 h-5 text-gray-500" /></div>
                  <div>
                    <div className="font-medium">{selectedCategory} Item {i}</div>
                    <div className="text-sm text-gray-500">Thumbnail</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-4 bg-gray-50 rounded-2xl p-4 h-[640px] flex flex-col">
            <div className="flex-1 bg-white border rounded-lg flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="mb-2">3D Architecture View</div>
                <div className="text-sm text-gray-500 mb-2">Walls + floor + room divisions</div>
                <div className="mb-2">Selected: <strong>{selectedObject ?? 'none'}</strong></div>
                <div className="text-sm text-gray-400">(Drag items from the left into this view in the real implementation)</div>
              </div>
            </div>

            <div className="mt-4 bg-white rounded-lg p-3 flex items-center justify-between border">
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 rounded border">Reset Layout</button>
                <button className="px-3 py-1 rounded border">Auto Arrange</button>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded border">Rotate -</button>
                <button className="px-3 py-1 rounded border">Rotate +</button>
              </div>
            </div>
          </main>

          <aside className="lg:col-span-1 bg-white rounded-2xl p-4 shadow h-[640px]">
            <h2 className="font-semibold mb-3">Object Properties</h2>
            {selectedObject ? (
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Position</label>
                  <div className="text-sm">x: 0.0, y: 0.0, z: 0.0</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Rotation</label>
                  <div className="text-sm">0°</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Scale</label>
                  <div className="text-sm">1.0</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Material / Color</label>
                  <div className="mt-2 flex gap-2">
                    <div className="w-6 h-6 bg-gray-900 rounded" />
                    <div className="w-6 h-6 bg-red-500 rounded" />
                    <div className="w-6 h-6 bg-blue-500 rounded" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500">Select an object to edit its properties.</div>
            )}

            <div className="mt-6">
              <label className="block text-sm text-gray-600 mb-2">Theme</label>
              <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)} className="w-full p-2 border rounded">
                {themes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
