import { Container } from '@src/components/ui/container';
import BinarySearch from '@src/features/binary/codes/BinarySearch';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Binary Search',
  description: 'Visualize binary search',
};

export const dynamic = 'force-dynamic';

const getLanguages = async (): Promise<string[]> => {
  const codesReq = await fetch(`${process.env.URL}/api/codes?feature=binary`);

  const codes = await codesReq.json();
  return codes.languages ?? [];
};

export default async function Linear() {
  const languages = getLanguages();
  return (
    <Container>
      <div className='mx-auto my-8 w-[700px]'>
        <Suspense fallback={<div>Loading...</div>}>
          <BinarySearch languages={languages} />
        </Suspense>
      </div>
    </Container>
  );
}
