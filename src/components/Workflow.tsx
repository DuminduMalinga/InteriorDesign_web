import { Upload, ScanSearch, Sofa, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Upload your floor plan image in any common format',
    color: 'bg-blue-500'
  },
  {
    icon: ScanSearch,
    title: 'Detect',
    description: 'AI analyzes and identifies rooms automatically',
    color: 'bg-teal-500'
  },
  {
    icon: Sofa,
    title: 'Furnish',
    description: 'Smart placement of furniture and decor elements',
    color: 'bg-cyan-500'
  },
  {
    icon: Download,
    title: 'Export',
    description: 'Download your 3D design and floor plan',
    color: 'bg-indigo-500'
  }
];

export default function Workflow() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From floor plan to fully furnished 3D design in four simple steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-indigo-200 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg mb-4">
                      {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
