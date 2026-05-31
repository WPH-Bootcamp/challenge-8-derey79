// 1. Import your local asset assets
import imgPorto1 from '../../src/assets/porto-card1.png';
import imgPorto2 from '../../src/assets/porto-card2.png';
import imgPorto3 from '../../src/assets/porto-card3.png';

export interface projectItem {
  id: number;
  name: string;
  desc: string;
  image: string;
}

export const projectData: projectItem[] = [
  {
    id: 1,
    name: 'Portofolio 1',
    desc: 'Landing Page',
    image: imgPorto1,
  },
  {
    id: 2,
    name: 'Portofolio 1',
    desc: 'Landing Page',
    image: imgPorto2,
  },
  {
    id: 3,
    name: 'Portofolio 1',
    desc: 'Landing Page',
    image: imgPorto3,
  },
];
