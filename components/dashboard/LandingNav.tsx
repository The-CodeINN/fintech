import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { CreditCard } from 'lucide-react';
import getCurrentUser from '../actions/getCurrentUser';
import SignInButton from '../signIn';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

export default async function LandingNavbar() {
  const user = await getCurrentUser();

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
        {user ? (
          <div className='flex items-center gap-2'>
            <Button className='text-white bg-transparent border border-white rounded-full'>
              <Link href='/dashboard'>Dashboard</Link>
            </Button>
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </nav>
  );
}
