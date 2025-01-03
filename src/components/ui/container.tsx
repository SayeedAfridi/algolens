import type { FC, PropsWithChildren } from 'react';

export interface ContainerProps extends PropsWithChildren {}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className='mx-10'>{children}</div>;
};
