import { Container } from '@src/components/ui/container';
import BubbleSort from '@src/features/bubble/BubbleSort';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Bubble Sort',
  description: 'Visualize Bubble sort',
};
export const dynamic = 'force-dynamic';

const getLanguages = async (): Promise<string[]> => {
  const codesReq = await fetch(`${process.env.URL}/api/codes?feature=bubble`);
  const codes = await codesReq.json();
  return codes.languages ?? [];
};

export default async function Bubble() {
  const languages = getLanguages();
  return (
    <Container>
      <div className='mx-auto my-8 w-[700px]'>
        <Suspense fallback={<div>Loading...</div>}>
          <BubbleSort languages={languages} />
        </Suspense>
      </div>
    </Container>
  );
}
