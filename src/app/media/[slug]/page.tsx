// app/media/[slug]/page.tsx (Individual Poster Page)
import { PosterView } from 'src/components/poster-view'; 
import { fetchPosterBySlug, fetchAdjacentPosters } from 'src/lib/PosterData';

export default async function PosterPage({
  params,
}: {
  params: { slug: string };
}) {
  const poster = await fetchPosterBySlug(params.slug);
  const adjacentPosters = await fetchAdjacentPosters(params.slug);

  return <PosterView poster={poster} adjacentPosters={adjacentPosters} />;
}