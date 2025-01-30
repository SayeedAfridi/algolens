import AboutAction from '@src/components/aboutComponents/AboutAction';
import AboutFeature from '@src/components/aboutComponents/AboutFeature';
import AboutHero from '@src/components/aboutComponents/AboutHero';
import AboutQuery from '@src/components/aboutComponents/AboutQuery';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-backgroundExtra text-gray-900'>
      {/* Hero Section */}
      <AboutHero />

      {/* Features Section */}
      <AboutFeature />

      {/* How It Works */}
      <AboutQuery />

      {/* Call to Action */}
      <AboutAction />
    </div>
  );
}
