import type React from 'react';

import Link from 'next/link';

import { Button } from '@src/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@src/components/ui/card';

export interface ListItemProps {
  title: string;
  description: string;
  link: string;
  cta?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  link,
  cta = 'Visualize',
}) => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between'>
        <div className='mr-48'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button asChild>
          <Link href={link}>{cta}</Link>
        </Button>
      </CardHeader>
    </Card>
  );
};
