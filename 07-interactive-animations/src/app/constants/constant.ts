interface NavUrl {
  id: number;
  name: string;
}

interface LabelInfo extends NavUrl {
  paragraph: string;
}

export const navurl: NavUrl[] = [
  {
    id: 1,
    name: 'HOME',
  },
  {
    id: 2,
    name: 'WEB DESIGN',
  },
  {
    id: 3,
    name: 'PRINT DESIGN',
  },
  {
    id: 4,
    name: 'BLOG',
  },
  {
    id: 5,
    name: 'ABOUT',
  },
  {
    id: 6,
    name: 'CONTACT',
  },
];

export const imagePresentation = Array.from({ length: 18 }, (_, i) => `web-images/${i + 1}.webp`);

export const labelInfo: LabelInfo[] = [
  {
    id: 1,
    name: 'Show Values',
    paragraph:
      'A website is not just a platform to present information. It is a public representation of the values of a brand, project, or personality.',
  },
  {
    id: 2,
    name: 'Build Trust',
    paragraph:
      'A communicate, responsive, and sophisticated website can do wonders for building trust and confidence between your brand and its potential audience. ',
  },
  {
    id: 3,
    name: 'Tell a Story',
    paragraph:
      'We exploit content-driven designs, visual compositions and live interactivity to convey your story effectively.',
  },
];
