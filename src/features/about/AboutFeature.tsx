import type React from 'react';

import { FaCode, FaEye, FaRocket } from 'react-icons/fa';

const AboutFeature = () => {
  return (
    <section className='mx-auto grid max-w-6xl gap-8 px-8 py-16 md:grid-cols-3'>
      <FeatureCard
        icon={<FaCode className='text-4xl text-blue-500' />}
        title='Code with Confidence'
        description='Practice coding problems to enhance your problem-solving skills.'
      />
      <FeatureCard
        icon={<FaEye className='text-4xl text-green-500' />}
        title='Visualize Algorithms'
        description='See how popular algorithms work step by step through interactive visualizations.'
      />
      <FeatureCard
        icon={<FaRocket className='text-4xl text-purple-500' />}
        title='Learn Efficiently'
        description='Understand algorithm efficiency with time complexity insights and optimal solutions.'
      />
    </section>
  );
};

function FeatureCard({
  icon,
  title,
  description,
}: { icon: React.ReactElement; title: string; description: string }) {
  return (
    <div className='rounded-xl border border-orange-700 bg-neutral-300 p-6 text-center shadow-orange-400 shadow-sm'>
      <div className='flex justify-center'>{icon}</div>
      <h3 className='mt-4 font-semibold text-xl'>{title}</h3>
      <p className='mt-2 text-gray-600'>{description}</p>
    </div>
  );
}

export default AboutFeature;
