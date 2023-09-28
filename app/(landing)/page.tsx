import LandingHero from '@/components/dashboard/LandingHero';
import LandingNavbar from '@/components/dashboard/LandingNav';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
