import Image from 'next/image';
import { Heading } from './Heading';
import { Section } from './Section';
import { PinContainer } from './ui/3d-pin';

type ProjectsProps = {
  title: string;
  tech: Array<string>;
  src: string;
  hrefDemo: string;
};

const projects: ProjectsProps[] = [
  {
    title: '3legant',
    tech: ['React', 'TypeScript', 'Express', 'Shadcn UI', 'Axios', 'Zustand'],
    src: '/3legant.webp',
    hrefDemo: 'https://3legant-roan.vercel.app/'
  },
  {
    title: 'movie-mg',
    tech: ['React', 'TypeScript', 'Tailwindcss', 'Fetch API'],
    src: '/movie.webp',
    hrefDemo: 'https://movie-mg.vercel.app/'
  },
  {
    title: 'swrnym',
    tech: ['NextJS', 'Tailwindcss', 'Shadcn UI'],
    src: '/swrnym.webp',
    hrefDemo: 'https://swrnym.vercel.app/'
  },
  {
    title: 'Batman',
    tech: ['HTML', 'CSS'],
    src: '/batman.webp',
    hrefDemo: 'https://batman-nate.vercel.app/'
  },
  {
    title: 'La maison de la jungle',
    tech: ['React', 'CSS'],
    src: '/maison_jungle.webp',
    hrefDemo: 'https://la-maison-de-la-jungle.vercel.app/'
  },
  {
    title: 'Estatein',
    tech: ['HTML', 'CSS', 'JavaScript'],
    src: '/estatein.webp',
    hrefDemo: 'https://estatein-mg.netlify.app/'
  }
];

export const Projects = () => {
  return (
    <Section id="works" className="bg-background">
      <Heading
        title="Projets"
        desc="J’ai eu le plaisir de travailler sur ces superbes projets"
      />
      <div className="mt-4 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3 lg:gap-x-12 2xl:gap-y-14">
        {projects.map((project) => (
          <PinContainer
            key={project.title}
            title={project.hrefDemo}
            href={project.hrefDemo}
          >
            <div className="flex h-[18rem] w-[19rem] flex-col justify-between gap-y-3 lg:w-[15rem] xl:w-[18rem] 2xl:h-[20rem] 2xl:w-[24rem]">
              <h2 className="text-xl">{project.title}</h2>
              <div className="border-primary flex flex-wrap gap-x-1 gap-y-2 overflow-hidden text-sm">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="border-primary text-primary rounded-full border px-2"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <Image
                src={project.src}
                width={1598}
                height={897}
                alt=""
                className="flex-1 rounded-xl"
              />
            </div>
          </PinContainer>
        ))}
      </div>
    </Section>
  );
};
