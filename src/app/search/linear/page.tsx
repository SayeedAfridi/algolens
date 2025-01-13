import { Container } from '@src/components/ui/container';
import { LinearSearch } from '@src/features/linear/LinearSearch';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linear Search',
  description: 'Visualise linear search',
};

export const getLanguages = async () => {
  const codesReq = await fetch(`${process.env.URL}/api/codes?feature=linear`);

  const codes = await codesReq.json();
  return codes;
};

export default async function Linear() {
  const languages = await getLanguages();

  return (
    <Container>
      <div className='mx-auto my-8 w-[700px]'>
        <LinearSearch languages={languages.languages} />
      </div>
    </Container>
  );
}
