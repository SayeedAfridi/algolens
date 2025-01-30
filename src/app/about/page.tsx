import AboutAction from '@src/features/aboutComponents/AboutAction';
import AboutFeature from '@src/features/aboutComponents/AboutFeature';
import AboutHero from '@src/features/aboutComponents/AboutHero';
import AboutQuery from '@src/features/aboutComponents/AboutQuery';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-backgroundExtra text-gray-900'>
      <AboutHero />
      <AboutFeature />
      <AboutQuery />
      <AboutAction />
    </div>
  );
}
