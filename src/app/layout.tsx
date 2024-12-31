import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@src/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

const rubik = Rubik({
  variable: '--font-rubik',
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
    <html className='dark' lang='en'>
      <body className={`${rubik.variable} antialiased`}>
        <div className='flex flex-row justify-between p-8'>
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
