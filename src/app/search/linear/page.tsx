import { Container } from '@src/components/ui/container';
import { LinearSearch } from '@src/features/linear/LinearSearch';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Linear Search',
  description: 'Visualise linear search',
};

export const dynamic = 'force-dynamic';

const getLanguages = async (): Promise<string[]> => {
  const codesReq = await fetch(`${process.env.URL}/api/codes?feature=linear`);

  const codes = await codesReq.json();
  return codes.languages ?? [];
};

export default async function Linear() {
  const languages = getLanguages();
  return (
    <Container>
      <div className='mx-auto my-8 w-[700px]'>
        <Suspense fallback={<div>Loading...</div>}>
          <LinearSearch languages={languages} />
        </Suspense>
      </div>
    </Container>
  );
}
