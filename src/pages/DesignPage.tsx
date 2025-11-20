import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function DesignPage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => onBack?.()} className="px-3 py-2 rounded-lg border flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
            <h1 className="text-2xl font-bold">3D Room Extrusion</h1>
          </div>
          <div>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Generate 3D</button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow">
          <p className="text-gray-600">This page will show a 3D extrusion preview of detected rooms. (Placeholder)</p>
          <div className="mt-6 h-96 bg-white border rounded-lg flex items-center justify-center text-gray-400">3D Canvas Placeholder</div>
        </div>
      </div>
    </div>
  );
}
