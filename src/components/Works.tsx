import { Heading } from './Heading';
import { Section } from './Section';
import WorksCard, { WorksProps } from './WorksCard';

const works: WorksProps[] = [
  {
    title: '3legant',
    tech: [
      'React',
      'TypeScript',
      'NodeJS',
      'Express',
      'Tailwinds',
      'Shadcn',
      'Axios',
      'Zustand'
    ],
    src: '/3legant.webp',
    hrefDemo: 'https://3legant-roan.vercel.app/',
    description:
      'Ce projet est un site e-commerce moderne dédié à la vente d’écouteurs, de casques audio et d’accessoires.'
  },
  {
    title: 'movie-mg',
    tech: ['React', 'TypeScript', 'Tailwinds', 'Fetch API'],
    src: '/movie.webp',
    hrefDemo: 'https://movie-mg.vercel.app/',
    description:
      'App React + TypeScript qui récupère les films via API Fetch, avec pagination intégrée et interface moderne'
  },
  {
    title: 'swrnym',
    tech: ['React', 'NextJS', 'Tailwinds', 'Shadcn'],
    src: '/swrnym.webp',
    hrefDemo: 'https://swrnym.vercel.app/',
    description:
      'Landing page élégante en **Next.js + React**, avec mode **clair ou sombre** au choix. Design responsive, valorisation visuelle des voitures de rêve'
  },

  {
    title: 'Batman',
    tech: ['HTML', 'CSS', 'JavaScript'],
    src: '/batman.webp',
    hrefDemo: 'https://batman-nate.vercel.app/',
    description:
      'Site web immersif autour de l’univers Batman, avec sections dédiées aux héros, adversaires et films.'
  }
];

export const Works = () => {
  return (
    <Section id="works" className="bg-card">
      <Heading
        title="Projets"
        desc="J’ai eu le plaisir de travailler sur ces superbes projets"
      />
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {works.map((work) => (
          <WorksCard key={work.title} work={work} />
        ))}
      </div>
    </Section>
  );
};
