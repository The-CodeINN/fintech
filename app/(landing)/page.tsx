import LandingHero from '@/components/landing/LandingHero';
import LandingNavbar from '@/components/landing/LandingNav';

export default function Home() {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
