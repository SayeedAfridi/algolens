import { Container } from '@src/components/ui/container';
import { LinearSearch } from '@src/features/linear/LinearSearch';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linear Search',
  description: 'Visualise linear search',
};

export default function Linear() {
  return (
    <Container>
      <div className='mx-auto my-8 w-[700px]'>
        <LinearSearch />
      </div>
    </Container>
  );
}
