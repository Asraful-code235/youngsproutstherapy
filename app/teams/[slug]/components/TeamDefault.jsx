'use client';

import { Button } from '@/components/ui/button';
import { urlForImage } from '@/lib/sanity/image';
import Image from 'next/image';
import Link from 'next/link';

export const Badge = ({ text, className = '' }) => {
  return (
    <button
      className={`bg-[#f0e4e4] text-gray-800 px-4 py-2 rounded-full ${className}`}
    >
      {text}
    </button>
  );
};
export default function TeamDefault({ team }) {
  const imageProps =
    team && team?.mainImage ? urlForImage(team.mainImage) : null;

  return (
    <section className='pt-16 px-6'>
      <section className='max-w-7xl mx-auto flex flex-col gap-8'>
        <div className='w-full flex flex-col items-center gap-4 mt-8 md:mt-14'>
          <div className='w-[300px] h-[300px] rounded-md overflow-hidden border-2 border-[#ab6969]'>
            <Image
              src={imageProps.src}
              {...(team.mainImage.blurDataURL && {
                placeholder: 'blur',
                blurDataURL: team.mainImage.blurDataURL,
              })}
              alt={team.mainImage.alt || 'Thumbnail'}
              priority={false}
              className='object-cover rounded-md object-top transition-all w-[400px] h-[400px] group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out'
              width={300}
              height={300}
            />
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl md:text-5xl font-semibold'>{team.name}</h1>
            <h4 className='text-xl md:text-2xl font-medium'>{team.position}</h4>
            {team?.appointmentLink && (
              <Button className='bg-[#cca4a4] hover:bg-[#e2b6b6] w-fit text-base'>
                <Link href={`${team?.appointmentLink}`} target='_blank'>
                  Book A Free Consultation
                </Link>
              </Button>
            )}
          </div>
        </div>

        <section className='px-4'>
          <article className='flex flex-col gap-8 md:gap-10 w-full md:flex-[2.95]'>
            <div className='md:text-xl'>{team?.description}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:space-y-0 space-y-6'>
              <div>
                {team?.specialities && (
                  <div className='flex flex-col gap-4'>
                    <p className='text-xl md:text-2xl'>Specialities:</p>
                    <ul className='flex flex-wrap gap-2'>
                      {team?.specialities.map((item) => (
                        <li key={item}>
                          <Badge text={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                {team?.clientFocus && (
                  <div className='flex flex-col gap-6'>
                    <p className='text-2xl md:text-3xl'>Client Focus:</p>
                    <ul className='flex flex-wrap gap-2'>
                      {team?.clientFocus.map((item) => (
                        <li key={item}>
                          <Badge text={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                {team?.therapyFormats && (
                  <div className='flex flex-col gap-6'>
                    <p className='text-2xl md:text-3xl'>Therapy Formats:</p>
                    <ul className='flex flex-wrap gap-2'>
                      {team?.therapyFormats.map((item) => (
                        <li key={item}>
                          <Badge text={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
}
