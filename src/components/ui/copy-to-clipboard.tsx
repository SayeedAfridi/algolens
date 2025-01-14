'use client';

import type React from 'react';

import { Check, Clipboard } from 'lucide-react';

import { Button } from '@src/components/ui/button';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export type CopyToClipboardProps = {
  text: string;
  successMessage?: string;
};

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  successMessage = 'Code copied!',
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      toast.success(successMessage);
      setTimeout(() => {
        setCopied(false);
      }, 500);
    }
  }, [copied, successMessage]);

  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
      }}
      className='relative z-10 inline-flex h-7 w-7 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-transparent font-medium text-foreground text-sm opacity-100 shadow-sm transition-colors hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:shrink-0'
    >
      <span className='sr-only'>Copy</span>
      {copied ? <Check size={24} /> : <Clipboard size={24} />}
    </Button>
  );
};
