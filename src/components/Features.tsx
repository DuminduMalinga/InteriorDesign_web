import { Sparkles, Eye, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Auto Room Detection',
    description: 'AI automatically identifies and labels rooms from your floor plan with precision.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Zap,
    title: 'Smart Furniture Placement',
    description: 'Intelligent algorithms place furniture optimally based on room type and dimensions.',
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: Eye,
    title: '3D View',
    description: 'Explore your designed space in immersive 3D from any angle or perspective.',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Palette,
    title: 'Theme Customization',
    description: 'Choose from multiple design themes and styles to match your vision perfectly.',
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to bring your floor plans to life with professional interior design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
