import { Upload, ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-20 pb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Floor Plan
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Into a Fully Designed 3D Interior
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload your floor plan and watch as our AI automatically detects rooms,
            places furniture, and creates a stunning 3D visualization in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Upload className="w-5 h-5" />
              Upload Floor Plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg">
              Try Demo
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-1 shadow-2xl">
            <div className="bg-white rounded-xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Upload className="w-12 h-12" />
                </div>
                <p className="text-lg">Floor Plan Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
