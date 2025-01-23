import { Container } from '@src/components/ui/container';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Algolens Team',
  description: 'Contributors of algolens project',
};

interface Contributor {
  avatar_url: string;
  contributions: number;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  user_view_type: string;
}

const getContributors = async () => {
  const response = await fetch(
    'https://api.github.com/repos/SayeedAfridi/algolens/contributors?per_page=100&page=1',
  );
  const data: Contributor[] = await response.json();
  return data;
};
export default async function Team() {
  const contributors = await getContributors();

  return (
    <Container>
      <div className='mx-auto my-8 w-[700px]'>
        <h2 className='mb-10 text-center text-2xl'>Algolens Team</h2>
        <div className='flex flex-wrap gap-8'>
          {contributors.map((contributor) => {
            return (
              <div key={contributor.id} className='flex flex-col items-center'>
                <Image
                  width={80}
                  height={80}
                  className='rounded-full'
                  src={contributor.avatar_url}
                  alt={contributor.login}
                />
                <a href={contributor.html_url} target='_blank' rel='noreferrer'>
                  <p className='mt-2 text-gray-300 text-lg'>
                    @{contributor.login}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
