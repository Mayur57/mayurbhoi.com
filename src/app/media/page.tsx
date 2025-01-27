// app/media/page.tsx (Homepage)
import Footer from 'src/components/footer'
import Navigator from 'src/components/navigator'
import { PosterGrid } from 'src/components/poster-grid'
import { Signature } from 'src/components/signature'
import Title from 'src/components/title'
import { fetchAllPosters } from 'src/lib/PosterData'

export default async function MediaHomePage() {
  const posters = await fetchAllPosters()

  return (
    <main className='container mx-auto px-8 py-8'>
      <Navigator />
      <Title>posters</Title>
      <PosterGrid posters={posters} />
      <Footer />
      <Signature />
    </main>
  )
}
