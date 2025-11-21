import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import UploadPage from './pages/UploadPage';
import DetectionPage from './pages/DetectionPage';
import DesignPage from './pages/DesignPage';
import FurniturePage from './pages/FurniturePage';
import type { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'detection') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => handleNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              FloorPlan3D
            </button>
            <div className="flex gap-3">
              <button onClick={() => handleNavigate('upload')} className="px-4 py-2 rounded-lg border">Back</button>
              <button onClick={() => handleNavigate('home')} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Home</button>
            </div>
          </div>
        </nav>
        <DetectionPage onBack={() => handleNavigate('upload')} onHome={() => handleNavigate('home')} onNext={() => handleNavigate('design')} />
      </div>
    );
  }

  if (currentPage === 'upload') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => handleNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              FloorPlan3D
            </button>
          </div>
        </nav>
        <UploadPage onNext={() => handleNavigate('detection')} />
      </div>
    );
  }

  if (currentPage === 'design') {
    return (
      <div className="min-h-screen bg-white">
        <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => handleNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              FloorPlan3D
            </button>
            <div className="flex gap-3">
              <button onClick={() => handleNavigate('detection')} className="px-4 py-2 rounded-lg border">Back</button>
              <button onClick={() => handleNavigate('home')} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Home</button>
            </div>
          </div>
        </nav>
        <DesignPage onBack={() => handleNavigate('detection')} onNext={() => handleNavigate('furniture')} />
      </div>
    );
  }

  if (currentPage === 'furniture') {
    return (
      <div className="min-h-screen bg-white">
        <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => handleNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              FloorPlan3D
            </button>
            <div className="flex gap-3">
              <button onClick={() => handleNavigate('design')} className="px-4 py-2 rounded-lg border">Back</button>
              <button onClick={() => handleNavigate('home')} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Home</button>
            </div>
          </div>
        </nav>
        <FurniturePage onBack={() => handleNavigate('design')} onNext={() => handleNavigate('export')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              FloorPlan3D
            </button>
            <button
              onClick={() => handleNavigate('upload')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <Hero onGetStarted={() => handleNavigate('upload')} />
      <Features />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
