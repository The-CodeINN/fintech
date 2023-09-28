import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finteza',
  description: ' Welcome to your dashboard!',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} flex justify-center`}>
        {/* <main className='w-full mx-2 sm:mx-0 sm:w-11/12 md:w-5/6 lg:w-4/6'> */}
        <main className='h-full overflow-auto'>
          <div className='w-full container max-w-3xl py-10 px-6 xs:px-8 sm:px-16 md:px-20 lg:px-24 2xl:px-36 '>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              <Toaster />
              <Header />
              {children}
            </ThemeProvider>
          </div>
        </main>

        {/* </main> */}
      </body>
    </html>
  );
}
