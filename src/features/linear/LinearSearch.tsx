'use client';

import type React from 'react';
import { Suspense, use, useCallback, useState } from 'react';

import { Button } from '@src/components/ui/button';
import CodeViewer from '@src/components/ui/code-viewer';
import { Input } from '@src/components/ui/input';
import { cn, delay, generateRandomArray } from '@src/lib/utils';

export type LinearSearchProps = {
  languages: Promise<string[]>;
};

export const LinearSearch: React.FC<LinearSearchProps> = ({
  languages: langPromise,
}) => {
  const languages = use(langPromise);
  const [array, setArray] = useState<number[]>(generateRandomArray());
  const [active, setActive] = useState<number>();
  const [found, setFound] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [needle, setNeedle] = useState<number>();

  const clearState = useCallback(() => {
    setActive(undefined);
    setFound(undefined);
    setError(false);
  }, []);

  const search = useCallback(async () => {
    if (needle === undefined || Number.isNaN(needle)) {
      return;
    }
    clearState();
    for (let i = 0; i < array.length; i++) {
      setActive(i);
      if (array[i] === needle) {
        setFound(i);
        await delay();
        setActive(undefined);
        return;
      }
      await delay();
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
        <Button onClick={search}>Search</Button>
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
                  ? 'bg-amber-600'
                  : index === found
                    ? 'bg-green-600'
                    : 'bg-slate-500',
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
          setArray(() => generateRandomArray());
        }}
      >
        Regenerate array
      </Button>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeViewer languages={languages} />
      </Suspense>
    </>
  );
};
