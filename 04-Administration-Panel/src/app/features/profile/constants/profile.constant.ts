import { Images, Items } from '@shared/types/types';

export interface OptionsGroup {
  image: Images;
  item: Items;
  endpointUrl: string;
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
        endpointUrl: 'analytics',
      },
      {
        image: {
          alt: '',
          url: 'icons/library.svg',
        },
        item: 'Library',
        endpointUrl: '',
      },
      {
        image: {
          alt: '',
          url: 'icons/shared-2.svg',
        },
        item: 'Shared Projects',
        endpointUrl: '',
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
        endpointUrl: '',
      },
      {
        image: {
          alt: '',
          url: 'icons/update.svg',
        },
        item: 'Updates',
        endpointUrl: '',
      },
      {
        image: {
          alt: '',
          url: 'icons/team.svg',
        },
        item: 'Team Review',
        endpointUrl: '',
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
        endpointUrl: '',
      },
      {
        image: {
          alt: '',
          url: 'icons/archive.svg',
        },
        item: 'Archive',
        endpointUrl: '',
      },
    ],
  },
];
