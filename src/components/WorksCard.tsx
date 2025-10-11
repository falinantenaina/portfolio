import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';

export type WorksProps = {
  title: string;
  tech: Array<string>;
  src: string;
  hrefDemo: string;
  description: string;
};

const WorksCard = ({ work }: { work: WorksProps }) => {
  return (
    <Card className="bg-background group cursor-text">
      <div>
        <div className="flex items-center justify-between p-4">
          <h2 className="font-sans text-white">{work.title}</h2>
          <Link href={work.hrefDemo} target="_blank">
            <SquareArrowOutUpRight className="text-primary" />
          </Link>
        </div>
        <div className="relative">
          <Image
            src={work.src}
            alt={`${work.title} poster`}
            width={1598}
            height={897}
            className="min-h-full rounded-b-xl"
          />
          <div className="lg:group-hover:bg-background/95 bg-background/90 absolute top-0 flex min-h-full min-w-full flex-col justify-between rounded-b-xl px-4 py-2 lg:hidden lg:p-4 lg:group-hover:flex">
            <div>
              <h2 className="text-primary text-xl">{work.title}</h2>
              <p className="text-white max-lg:text-xs">{work.description}</p>
            </div>
            <div className="border-primary flex flex-wrap gap-1 overflow-hidden max-lg:text-sm lg:gap-4">
              {work.tech.map((tech, index) => (
                <div
                  key={index}
                  className="border-primary text-primary rounded-full border px-2"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WorksCard;
