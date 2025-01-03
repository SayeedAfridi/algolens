import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@src/components/ui/navigation-menu';

import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Algolens',
  description: 'The program to visualise algorithms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='dark' lang='en' suppressHydrationWarning>
      <body className={`${rubik.variable} antialiased`}>
        <div className='flex flex-row justify-between bg-slate-900 p-4'>
          <NavigationMenu className='flex items-center'>
            <NavigationMenuList>
              <Image src='/algolens.webp' alt='logo' width={32} height={32} />
              <Link href='/'>
                <NavigationMenuItem>Algolens</NavigationMenuItem>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link legacyBehavior passHref href='/team'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Team
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link legacyBehavior passHref href='/about'>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </body>
    </html>
  );
}
