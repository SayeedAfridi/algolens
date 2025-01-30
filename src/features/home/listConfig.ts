type ListConfig = {
  title: string;
  description: string;
  link: string;
  cta?: string;
};

export const HomeListConfig: ListConfig[] = [
  {
    title: 'Linear Search',
    description: 'Visualize linear search algorithm',
    link: '/search/linear',
  },
  {
    title: 'Binary Search',
    description: 'Visualize binary search algorithm',
    link: '/search/binary',
  },
  {
    title: 'Bubble Sort',
    description: 'Visualize bubble sort algorithm',
    link: '/sort/bubble',
  },
];
