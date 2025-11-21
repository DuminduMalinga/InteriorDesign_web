import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function DesignPage({ onBack, onNext }: { onBack?: () => void; onNext?: () => void }) {
  const [wallHeight, setWallHeight] = useState<number>(3);
  const [mode, setMode] = useState<'wireframe' | 'solid'>('solid');
  const [textureOn, setTextureOn] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => onBack?.()} className="px-3 py-2 rounded-lg border flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
            <h1 className="text-2xl font-bold">Wall Extrusion / 3D Structure</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Apply</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 h-[640px] flex flex-col">
            <div className="flex-1 bg-white border rounded-lg flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="mb-4">3D Viewer Placeholder</div>
                <div className="mb-2">Mode: <strong>{mode}</strong></div>
                <div>Wall height: <strong>{wallHeight}m</strong></div>
              </div>
            </div>

            <div className="mt-4 bg-white rounded-lg p-3 flex items-center justify-between border">
              <div className="flex items-center gap-3">
                <button onClick={() => setMode('wireframe')} className={`px-3 py-1 rounded ${mode === 'wireframe' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Wireframe</button>
                <button onClick={() => setMode('solid')} className={`px-3 py-1 rounded ${mode === 'solid' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Solid</button>
                <button onClick={() => setTextureOn(t => !t)} className={`px-3 py-1 rounded ${textureOn ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Floor Texture {textureOn ? 'On' : 'Off'}</button>
              </div>

              <div>
                <button onClick={() => onNext?.()} className="px-4 py-2 rounded-lg bg-green-600 text-white">Next: Furniture</button>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Wall Settings</h2>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Wall Height: {wallHeight} m</label>
              <input type="range" min="2" max="5" step="0.1" value={wallHeight} onChange={(e) => setWallHeight(Number(e.target.value))} className="w-full" />
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Apply</button>
              <button className="px-4 py-2 rounded-lg border">Reset</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
