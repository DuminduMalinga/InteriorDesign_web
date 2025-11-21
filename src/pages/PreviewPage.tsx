import { useState } from 'react';
import { Camera, Sun, Moon, Download, Save, ImagePlus, ArrowLeft } from 'lucide-react';

export default function PreviewPage({ onBack, onHome }: { onBack?: () => void; onHome?: () => void }) {
  const [lighting, setLighting] = useState<'soft'|'studio'|'night'>('soft');
  const [camera, setCamera] = useState<'top'|'iso'|'walk'>('iso');
  const [floorTex, setFloorTex] = useState<'oak'|'marble'|'tiles'|'concrete'>('oak');

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onBack?.()} className="px-3 py-2 rounded-lg border flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
            <h1 className="text-2xl font-bold">Final 3D Preview</h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => alert('Export image (mock)')} className="px-3 py-2 rounded-lg border flex items-center gap-2"><ImagePlus className="w-4 h-4" /> Export Image</button>
            <button onClick={() => alert('Download 3D model (mock)')} className="px-3 py-2 rounded-lg border flex items-center gap-2"><Download className="w-4 h-4" /> Download Model</button>
            <button onClick={() => alert('Save project (mock)')} className="px-3 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2"><Save className="w-4 h-4" /> Save Project</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-4 h-[720px]">
            <div className="w-full h-full bg-white border rounded-lg flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Lighting:</span>
                  <button onClick={() => setLighting('soft')} className={`px-2 py-1 rounded ${lighting === 'soft' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Soft</button>
                  <button onClick={() => setLighting('studio')} className={`px-2 py-1 rounded ${lighting === 'studio' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Studio</button>
                  <button onClick={() => setLighting('night')} className={`px-2 py-1 rounded ${lighting === 'night' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Night</button>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => setCamera('top')} className={`px-2 py-1 rounded ${camera === 'top' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Top</button>
                  <button onClick={() => setCamera('iso')} className={`px-2 py-1 rounded ${camera === 'iso' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Isometric</button>
                  <button onClick={() => setCamera('walk')} className={`px-2 py-1 rounded ${camera === 'walk' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>Walkthrough</button>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="mb-2">Full-Screen 3D Viewer Placeholder</div>
                  <div className="mb-2">Lighting: <strong>{lighting}</strong> • Camera: <strong>{camera}</strong></div>
                  <div className="text-sm">(Replace with react-three-fiber scene for full 3D rendering)</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-4 shadow h-[720px]">
            <h2 className="text-lg font-semibold mb-4">Preview Settings</h2>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Lighting Presets</div>
              <div className="flex gap-2">
                <button onClick={() => setLighting('soft')} className={`px-3 py-1 rounded ${lighting === 'soft' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}><Sun className="w-4 h-4 inline-block mr-2" /> Soft Light</button>
                <button onClick={() => setLighting('studio')} className={`px-3 py-1 rounded ${lighting === 'studio' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}><Sun className="w-4 h-4 inline-block mr-2" /> Studio</button>
              </div>
              <div className="mt-2">
                <button onClick={() => setLighting('night')} className={`px-3 py-1 rounded ${lighting === 'night' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}><Moon className="w-4 h-4 inline-block mr-2" /> Night Mood</button>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Floor Texture</div>
              <select value={floorTex} onChange={(e) => setFloorTex(e.target.value as any)} className="w-full p-2 border rounded">
                <option value="oak">Oak</option>
                <option value="marble">Marble</option>
                <option value="tiles">Tiles</option>
                <option value="concrete">Concrete</option>
              </select>
            </div>

            <div className="mt-6 space-y-3">
              <button onClick={() => alert('Export Image (mock)')} className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center justify-center gap-2"><ImagePlus className="w-4 h-4" /> Export Image</button>
              <button onClick={() => alert('Download 3D model (mock)')} className="w-full px-4 py-2 rounded-lg border flex items-center justify-center gap-2"><Download className="w-4 h-4" /> Download 3D Model</button>
              <button onClick={() => alert('Save Project (mock)')} className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white flex items-center justify-center gap-2"><Save className="w-4 h-4" /> Save Project</button>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Tip: Use a proper 3D renderer (three.js / react-three-fiber) to implement lighting, camera presets, and exports.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
