import { Button } from '@src/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@src/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=''>
      <main className='mt-10 flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center justify-center'>
          <Image
            src='/algolens.webp'
            alt='Next.js logo'
            width={164}
            height={164}
            priority
          />
          <h3 className='text-5xl'>Algolens</h3>
          <p className='mt-2'>
            Visualise algorithm and data structures through lens
          </p>
        </div>
        <div>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
              <div className='mr-48'>
                <CardTitle>Linear Search</CardTitle>
                <CardDescription>
                  Visualise linear search algorithm
                </CardDescription>
              </div>
              <Button asChild>
                <Link href='/search/linear'>Visualise</Link>
              </Button>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}
