const AboutHero = () => {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-16 text-center'>
      <h1 className='font-bold text-4xl text-white'>
        About{' '}
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>
          {' '}
          Algolens
        </span>
      </h1>
      <p className='mt-4 max-w-2xl text-lg text-neutral-400'>
        A platform designed for coding practice and visualizing{' '}
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>
          {' '}
          Data Structures and Algorithms (DSA){' '}
        </span>{' '}
        in an interactive way.
      </p>
    </section>
  );
};

export default AboutHero;
