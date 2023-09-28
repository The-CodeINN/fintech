import Link from 'next/link';
import { Button } from '../ui/button';

const LandingHero = () => {
  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>
          <span className='text-blue-500'>Finteza</span> is the best
        </h1>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        Finteza is the best platform for your business. It is a comprehensive
        solution for finance and investments
      </div>
      <div>
        <Link href='/register'>
          <Button
            variant='premium'
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
