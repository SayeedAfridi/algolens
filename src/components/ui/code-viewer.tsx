'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@src/components/ui/select';
import { type FC, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type CodeViewerProps = {
  languages: string[];
};

const getCode = async (language: string) => {
  const codeRq = await fetch(
    `${process.env.URL}/api/codes/contents?feature=linear`,
    {
      method: 'POST',
      body: JSON.stringify({
        lang: language,
      }),
    },
  );

  const code = await codeRq.json();
  return code;
};

const CodeViewer: FC<CodeViewerProps> = ({ languages }) => {
  const [selectedlang, setSelectedLang] = useState<string>(languages[0]);
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    if (!selectedlang) return;
    getCode(selectedlang).then((res) => {
      setCode(res.content);
    });
  }, [selectedlang]);

  return (
    <div className='mt-5'>
      <div>
        <Select
          value={selectedlang}
          onValueChange={(val) => setSelectedLang(val)}
        >
          <SelectTrigger>
            {selectedlang ? (
              <span style={{ textTransform: 'capitalize' }}>
                {selectedlang}
              </span>
            ) : (
              <SelectValue placeholder='Select language' />
            )}
          </SelectTrigger>
          <SelectContent>
            {languages.map((lng) => {
              return (
                <SelectItem
                  style={{ textTransform: 'capitalize' }}
                  value={lng}
                  key={lng}
                >
                  {lng}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <SyntaxHighlighter language={selectedlang} style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
