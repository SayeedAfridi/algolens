'use client';

import { Button } from '@src/components/ui/button';
import { CodeViewer } from '@src/components/ui/code-viewer';
import { Input } from '@src/components/ui/input';
import { cn, delay, generateRandomArray } from '@src/lib/utils';
import { Suspense, use, useCallback, useState } from 'react';

export type BinarySearchProps = {
  languages: Promise<string[]>;
};

const BinarySearch = ({ languages: langPromise }: BinarySearchProps) => {
  const languages = use(langPromise);
  const [array, setArray] = useState<number[]>(
    generateRandomArray(11).sort((a, b) => a - b),
  );
  const [active, setActive] = useState<number>();
  const [found, setFound] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [needle, setNeedle] = useState<number>();
  const [left, setLeft] = useState<number | null>(null);
  const [right, setRight] = useState<number | null>(null);

  const clearState = useCallback(() => {
    setActive(undefined);
    setFound(undefined);
    setError(false);
  }, []);

  const binarySearch = useCallback(async () => {
    if (needle === undefined || Number.isNaN(needle)) {
      return;
    }
    clearState();
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      setLeft(left);
      setRight(right);
      const mid = Math.floor((left + right) / 2);
      setActive(mid);
      await delay(1000);

      if (array[mid] === needle) {
        setFound(mid);
        setActive(undefined);
        return;
      }

      if (array[mid] < needle) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setError(true);
    setActive(undefined);
  }, [needle, array, clearState]);

  return (
    <>
      <div className='mb-4 flex gap-4'>
        <Input
          type='number'
          placeholder='Enter number'
          onChange={(e) => {
            setNeedle(+e.target.value);
          }}
        />
        <Button onClick={binarySearch}>Search</Button>
      </div>
      {error && (
        <span className='mb-4 block text-red-400'>Element not found!</span>
      )}
      <span className='text-xl'>Array</span>
      <div className='my-4 flex flex-wrap gap-4 '>
        {array.map((num, index) => {
          return (
            <div
              className={cn(
                'flex h-[48px] w-[48px] items-center justify-center rounded-sm transition-colors ease-in-out',
                index === active
                  ? 'bg-amber-600' // Active element
                  : index === found
                    ? 'bg-green-600' // Found element
                    : index === left
                      ? 'bg-blue-600' // First element (left pointer)
                      : index === right
                        ? 'bg-purple-600' // Last element (right pointer)
                        : 'bg-slate-500', // Default color
              )}
              key={`${num}-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
            >
              {num}
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          clearState();
          setArray(() => generateRandomArray(11).sort((a, b) => a - b));
        }}
      >
        Regenerate array
      </Button>
      <div className='mt-4' />
      <Suspense fallback={<div>Loading...</div>}>
        <CodeViewer feature='binary' languages={languages} />
      </Suspense>
    </>
  );
};

export default BinarySearch;
