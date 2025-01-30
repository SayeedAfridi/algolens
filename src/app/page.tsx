import Image from 'next/image';

import { ListItem } from '@src/features/home/ListItem';
import { HomeListConfig } from '@src/features/home/listConfig';

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
        {HomeListConfig.map((config) => {
          return <ListItem {...config} key={config.link} />;
        })}
      </main>
    </div>
  );
}
