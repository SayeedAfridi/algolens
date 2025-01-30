import { FaCircleCheck } from 'react-icons/fa6';
const AboutQuery = () => {
  return (
    <section className='bg-colorDark px-6 py-16 text-center'>
      <h2 className='font-semibold text-3xl text-white'>How It Works</h2>
      <div className='mx-auto mt-4 max-w-3xl text-lg text-neutral-400'>
        <div className='flex items-center justify-center gap-2'>
          <FaCircleCheck className='text-orange-500' />
          <span>Choose an algorithm to visualize.</span>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <FaCircleCheck className='text-orange-500' />
          <span>See the step-by-step execution.</span>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <FaCircleCheck className='text-orange-500' />
          <span>Solve coding problems related to the algorithm.</span>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <FaCircleCheck className='text-orange-500' />
          <span>Improve your DSA skills and level up 🚀</span>
        </div>
      </div>
    </section>
  );
};

export default AboutQuery;
