import AboutAction from '@src/features/about/AboutAction';
import AboutFeature from '@src/features/about/AboutFeature';
import AboutHero from '@src/features/about/AboutHero';
import AboutQuery from '@src/features/about/AboutQuery';

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
