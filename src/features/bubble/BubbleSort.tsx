'use client';
import { Button } from '@src/components/ui/button';
import { CodeViewer } from '@src/components/ui/code-viewer';
import { generateRandomArray } from '@src/lib/utils';
import { Suspense, use, useState } from 'react';

export type BubbleSortProps = {
  languages: Promise<string[]>;
};
const BubbleSort = ({ languages: langPromise }: BubbleSortProps) => {
  const languages = use(langPromise);
  const [array, setArray] = useState<number[]>(
    generateRandomArray(11).sort((a, b) => a - b),
  );

  const bubbleSort = () => {};

  return (
    <>
      <span className='text-xl'>Array</span>
      <div className='my-4 flex flex-wrap gap-4 '>
        {array.map((num, index) => {
          return (
            <div
              key={`${num}-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
              className='flex h-[48px] w-[48px] items-center justify-center rounded-sm bg-slate-500'
            >
              {num}
            </div>
          );
        })}
      </div>
      <div className='mb-4 flex gap-4'>
        <Button onClick={bubbleSort}>Sort</Button>
        <Button
          onClick={() => {
            setArray(() => generateRandomArray(11).sort((a, b) => a - b));
          }}
        >
          Regenerate array
        </Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeViewer feature='bubble' languages={languages} />
      </Suspense>
    </>
  );
};

export default BubbleSort;
