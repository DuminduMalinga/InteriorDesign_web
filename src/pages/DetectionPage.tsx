import { useState } from 'react';
import { ArrowLeft, RefreshCw, Edit3, Merge, Split, Play, Trash2 } from 'lucide-react';

type Point = [number, number];

type Room = {
  id: string;
  name: string;
  points: Point[];
};

export default function DetectionPage({ onBack, onHome, onNext }: { onBack?: () => void; onHome?: () => void; onNext?: () => void }) {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 'r1', name: 'Room 1', points: [[10,10],[45,10],[45,45],[10,45]] },
    { id: 'r2', name: 'Room 2', points: [[55,10],[90,10],[90,45],[55,45]] },
    { id: 'r3', name: 'Room 3', points: [[10,55],[45,55],[45,90],[10,90]] },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedForMerge, setSelectedForMerge] = useState<Record<string, boolean>>({});
  const [drawMode, setDrawMode] = useState(false);

  const renameRoom = (id: string, newName: string) => {
    setRooms(r => r.map(x => x.id === id ? { ...x, name: newName } : x));
  };

  const toggleSelect = (id: string) => {
    setSelectedForMerge(s => ({ ...s, [id]: !s[id] }));
  };

  const regenerate = () => {
    // placeholder: re-run detection (mock)
    setRooms(r => r.map(x => ({ ...x, name: x.name })));
    alert('Regenerating detection (mock)');
  };

  const mergeSelected = () => {
    const ids = Object.keys(selectedForMerge).filter(k => selectedForMerge[k]);
    if (ids.length < 2) {
      alert('Select at least two rooms to merge');
      return;
    }

    // simple merge: bounding box around all points
    const points = rooms
      .filter(r => ids.includes(r.id))
      .flatMap(r => r.points);

    const xs = points.map(p => p[0]);
    const ys = points.map(p => p[1]);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const merged: Room = {
      id: 'm' + Date.now(),
      name: 'Merged Room',
      points: [[minX,minY],[maxX,minY],[maxX,maxY],[minX,maxY]]
    };

    setRooms(r => r.filter(room => !ids.includes(room.id)).concat(merged));
    setSelectedForMerge({});
  };

  const startSplit = () => {
    setDrawMode(true);
    alert('Enter split draw mode (mock). Draw on the canvas to split a room.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button onClick={() => onBack?.()} className="px-3 py-2 rounded-lg border flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
              <h1 className="text-2xl font-bold">Detected Rooms</h1>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={regenerate} className="px-3 py-2 rounded-lg bg-blue-50 border"><RefreshCw className="w-4 h-4" /> Regenerate</button>
              <button onClick={mergeSelected} className="px-3 py-2 rounded-lg bg-gray-100 border"><Merge className="w-4 h-4" /> Merge</button>
              <button onClick={startSplit} className={`px-3 py-2 rounded-lg border ${drawMode ? 'bg-yellow-50' : ''}`}><Split className="w-4 h-4" /> Split</button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden bg-gray-100 h-[560px] relative flex items-center justify-center">
            {/* Placeholder image / canvas */}
            <div className="w-full h-full relative">
              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
                <image href="/src/assets/floorplan-placeholder.png" x="0" y="0" width="100" height="100" opacity="0.06" />
                {rooms.map((room, idx) => (
                  <g key={room.id}>
                    <polygon
                      points={room.points.map(p => p.join(',')).join(' ')}
                      fill={`hsl(${(idx*70)%360} 70% 60% / 0.18)`}
                      stroke={`hsl(${(idx*70)%360} 70% 50%)`}
                      strokeWidth={0.6}
                    />
                    <text x={room.points[0][0] + 2} y={room.points[0][1] + 4} fontSize={3} fill="#111">{room.name}</text>
                  </g>
                ))}
                {drawMode && (
                  <rect x={5} y={5} width={90} height={90} fill="none" stroke="orange" strokeDasharray="2" />
                )}
              </svg>
            </div>
          </div>
        </div>

        <aside className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Rooms ({rooms.length})</h2>

          <ul className="space-y-3 mb-4">
            {rooms.map(room => (
              <li key={room.id} className="flex items-center gap-3 p-3 border rounded-lg">
                <input type="checkbox" checked={!!selectedForMerge[room.id]} onChange={() => toggleSelect(room.id)} />
                <div className="flex-1">
                  {editingId === room.id ? (
                    <input
                      className="w-full p-1 border rounded"
                      defaultValue={room.name}
                      onBlur={(e) => { renameRoom(room.id, e.target.value); setEditingId(null); }}
                      autoFocus
                    />
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{room.name}</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setEditingId(room.id)} className="text-sm text-gray-500"><Edit3 className="w-4 h-4" /></button>
                        <button onClick={() => setRooms(r => r.filter(x => x.id !== room.id))} className="text-sm text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <button onClick={regenerate} className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center justify-center gap-2"><RefreshCw className="w-4 h-4" /> Regenerate Detection</button>
            <button onClick={mergeSelected} className="w-full px-4 py-2 rounded-lg border flex items-center justify-center gap-2"><Merge className="w-4 h-4" /> Merge Selected</button>
            <button onClick={startSplit} className="w-full px-4 py-2 rounded-lg border flex items-center justify-center gap-2"><Split className="w-4 h-4" /> Split (Draw)</button>
          </div>

          <div className="mt-6">
            <button onClick={() => onNext?.()} className="w-full px-4 py-3 rounded-lg bg-green-600 text-white font-semibold flex items-center justify-center gap-2"><Play className="w-4 h-4" /> Next: 3D Extrusion</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
