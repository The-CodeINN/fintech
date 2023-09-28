'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { CreditCard } from 'lucide-react';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const LandingNavbar = () => {
  return (
    <nav className='px-4 pt-6 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
          <CreditCard className='text-white w-8 h-8' />
        </div>
        <h1 className={cn('text-2xl font-bold text-white', font.className)}>
          Finteza
        </h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        {/* <Link href={isSignedIn ? '/dashboard' : '/sign-up'}> */}
        <Link href='/register'>
          <Button variant='outline' className='rounded-full'>
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
