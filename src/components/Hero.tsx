import { cn } from '@/lib/utils';
import { Mail, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import profilImage from '../assets/profil.webp';
import { Section } from './Section';
import { buttonVariants } from './ui/button';
import { FlipWords } from './ui/flip-words';
export const Hero = () => {
  const words = ['Frontend', 'Backend', 'React', 'Next', 'Express', 'Node'];
  const skills = [
    {
      title: 'React',
      icon: '/reactjs.svg'
    },
    {
      title: 'TypeScript',
      icon: '/typescript.svg'
    },

    {
      title: 'NextJs',
      icon: '/nextjs.svg'
    },
    {
      title: 'NodeJs',
      link: '#',
      icon: '/nodejs.svg'
    },
    {
      title: 'ExpressJs',
      link: '#',
      icon: '/expressjs.svg'
    },
    {
      title: 'Tailwind',
      link: 'https://tailwindcss.com/',
      icon: '/tailwind.svg'
    }
  ];

  return (
    <Section id="home">
      <div className="flex items-center justify-between gap-y-8 max-md:flex-col md:min-w-1/2 md:gap-x-8">
        <div className="flex flex-col gap-y-4 lg:gap-y-8">
          <h1 className="font-sans text-3xl lg:text-5xl">
            Salut👋, Je suis{' '}
            <span className="text-primary">Falinantenaina</span>
          </h1>
          <div className="max-sm:text-sm">
            <div className="inline-block">
              Je suis développeur d’applications web spécialisé en{' '}
              <FlipWords words={words} />
            </div>
          </div>
          <p>
            Passionné par la création d’applications performantes, conviviales
            et évolutives.
          </p>
          <div className="flex gap-x-2">
            <Link className={cn(buttonVariants())} href="/#works">
              <span>Projet</span>
              <SquareArrowOutUpRight />
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'outline' }))}
              href="/#contact"
            >
              <span>Contact</span>
              <Mail />
            </Link>
          </div>
        </div>
        <div className="min-w-70 lg:min-w-80 xl:min-w-100">
          <Image
            src={profilImage}
            width={960}
            height={1280}
            className="bg-card size-70 rounded-full object-cover lg:size-80 xl:size-100"
            alt="profil"
          />
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <h2 className="font-sans text-2xl font-medium">Ma stack préférée</h2>
        <div className="flex gap-x-2 sm:gap-x-4 lg:gap-x-8">
          {skills.map((skill) => (
            <Image
              src={skill.icon}
              key={skill.title}
              alt={skill.title}
              width={40}
              height={40}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
