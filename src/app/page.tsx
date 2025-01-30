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
            Visualize algorithm and data structures through lens
          </p>
        </div>
        <div />
        <Card>
          <CardHeader className='flex flex-row items-center justify-between'>
            <div className='mr-48'>
              <CardTitle>Linear Search</CardTitle>
              <CardDescription>
                Visualize linear search algorithm
              </CardDescription>
            </div>
            <Button asChild>
              <Link href='/search/linear'>Visualize</Link>
            </Button>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between'>
            <div className='mr-48'>
              <CardTitle>Binary Search</CardTitle>
              <CardDescription>
                Visualize binary search algorithm
              </CardDescription>
            </div>
            <Button asChild>
              <Link href='/search/binary'>Visualize</Link>
            </Button>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between'>
            <div className='mr-48'>
              <CardTitle>Bubble Sort</CardTitle>
              <CardDescription>Visualize bubble sort algorithm</CardDescription>
            </div>
            <Button asChild>
              <Link href='/sort/bubble'>Visualize</Link>
            </Button>
          </CardHeader>
        </Card>
      </main>
    </div>
  );
}
