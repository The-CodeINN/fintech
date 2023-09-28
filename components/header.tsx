import { ModeToggle } from './ModeToggle';
import getCurrentUser from './actions/getCurrentUser';
import SignInButton from './signIn';
import Link from 'next/link';
import UserDropdown from './userDropdown';
import { CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <header className='flex justify-between items-center py-3'>
      <Link href='/' className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
          <CreditCard className='text-white w-8 h-8' />
        </div>
        <h1 className={cn('text-2xl font-bold text-white')}>Finteza</h1>
      </Link>
      <div className='flex items-center gap-2'>
        {user ? (
          <div className='flex items-center gap-2'>
            <UserDropdown currentUser={user} />
          </div>
        ) : (
          <SignInButton />
        )}

        <ModeToggle />
      </div>
    </header>
  );
}
