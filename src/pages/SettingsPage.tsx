import { useState } from 'react';
import { Sun, Moon, Globe, Ruler, User, Folder } from 'lucide-react';

export default function SettingsPage({ onBack }: { onBack?: () => void }) {
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  const [language, setLanguage] = useState<string>('en');
  const [units, setUnits] = useState<'m'|'ft'>('m');

  const projects = [
    { id: 'p1', name: 'Apartment Renovation' },
    { id: 'p2', name: 'Office Redesign' },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => onBack?.()} className="px-3 py-2 rounded-lg border">Back</button>
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">User Preferences</h2>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="font-medium">Theme</div>
                <div className="text-sm text-gray-500">Light / Dark mode</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setTheme('light')} className={`px-3 py-1 rounded ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}><Sun className="w-4 h-4" /></button>
                <button onClick={() => setTheme('dark')} className={`px-3 py-1 rounded ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}><Moon className="w-4 h-4" /></button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Language</label>
              <div className="flex gap-2">
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="p-2 border rounded">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="font-medium">Measurement Units</div>
                <div className="text-sm text-gray-500">Meters or Feet</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setUnits('m')} className={`px-3 py-1 rounded ${units === 'm' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}><Ruler className="w-4 h-4" /> m</button>
                <button onClick={() => setUnits('ft')} className={`px-3 py-1 rounded ${units === 'ft' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}><Ruler className="w-4 h-4" /> ft</button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Account</h3>
              <div className="bg-gray-50 p-4 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"><User className="w-6 h-6 text-gray-500" /></div>
                  <div>
                    <div className="font-medium">Jane Doe</div>
                    <div className="text-sm text-gray-500">jane.doe@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Projects</h2>
            <ul className="space-y-3">
              {projects.map(p => (
                <li key={p.id} className="flex items-center gap-3 p-2 border rounded">
                  <Folder className="w-5 h-5 text-gray-500" />
                  <div className="flex-1">{p.name}</div>
                  <button className="px-3 py-1 rounded border text-sm">Open</button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
