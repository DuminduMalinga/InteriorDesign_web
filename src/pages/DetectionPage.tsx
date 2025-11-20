import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function DetectionPage({ onBack, onHome }: { onBack?: () => void; onHome?: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Detecting Rooms</h1>
            <p className="text-gray-600 mt-2">Processing your floor plan and detecting rooms. This may take a few moments.</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onBack?.()} className="px-3 py-2 rounded-lg border text-sm">Back</button>
            <button onClick={() => onHome?.()} className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm">Home</button>
          </div>
        </div>

        <div className="border rounded-xl border-dashed border-gray-200 p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-lg text-gray-700">Room detection in progress...</p>
            <p className="text-sm text-gray-500">When complete you'll be able to review detected rooms and generate a 3D design.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
