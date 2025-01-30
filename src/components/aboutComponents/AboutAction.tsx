const AboutAction = () => {
  return (
    <section className='bg-backgroundExtra px-6 py-16 text-center text-white'>
      <h2 className='font-semibold text-3xl'>Start Practicing Today!</h2>
      <p className='mt-4 text-lg'>
        Enhance your DSA skills with{' '}
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>
          {' '}
          Algolens
        </span>
        .
      </p>
      <a
        href='https://algolens.afridi.dev/'
        className='mt-6 inline-block rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-3 font-bold text-white transition hover:bg-gray-200'
      >
        Get Started
      </a>
    </section>
  );
};

export default AboutAction;
