import { Images, Items } from '@shared/types/types';

interface OptionsGroup {
  image: Images;
  item: Items;
}

interface Options {
  group: string;
  resources: OptionsGroup[];
}

export const profileOptions: Options[] = [
  {
    group: 'Projects',
    resources: [
      {
        image: {
          alt: '',
          url: 'icons/dashboard.svg',
        },
        item: 'Dashboard',
      },
      {
        image: {
          alt: '',
          url: 'icons/library.svg',
        },
        item: 'Library',
      },
      {
        image: {
          alt: '',
          url: 'icons/shared-2.svg',
        },
        item: 'Shared Projects',
      },
    ],
  },
  {
    group: 'Status',
    resources: [
      {
        image: {
          alt: '',
          url: 'icons/new.svg',
        },
        item: 'New',
      },
      {
        image: {
          alt: '',
          url: 'icons/update.svg',
        },
        item: 'Updates',
      },
      {
        image: {
          alt: '',
          url: 'icons/team.svg',
        },
        item: 'Team Review',
      },
    ],
  },
  {
    group: 'History',
    resources: [
      {
        image: {
          alt: '',
          url: 'icons/recent.svg',
        },
        item: 'Recently Edited',
      },
      {
        image: {
          alt: '',
          url: 'icons/archive.svg',
        },
        item: 'Archive',
      },
    ],
  },
];
