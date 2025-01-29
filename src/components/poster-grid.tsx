import Link from 'next/link';
import Image from 'next/image';
import { Poster } from 'src/lib/types';

export function PosterGrid({ posters }: { posters: Poster[] }) {
  return (
    <div className="grid py-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {posters.map((poster) => (
        <Link 
          key={poster.slug}
          href={`/media/${poster.slug}`}
          className="group relative block overflow-hidden transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl"
        >
          <div className="aspect-[3/4] relative">
            <Image
              src={poster.imageUrl}
              alt={poster.title}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-opacity flex items-center justify-center">
            <h2 className="text-white font-bold">{poster.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}