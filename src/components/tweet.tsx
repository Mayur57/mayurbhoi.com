import { Suspense } from 'react'
import { EmbeddedTweet, TweetNotFound, TweetSkeleton, type TweetProps } from 'react-tweet'
import { getTweet } from 'react-tweet/api'

const TweetContent = async ({ id, components, onError }: any) => {
  let error
  const tweet = id
    ? await getTweet(id).catch(err => {
        if (onError) {
          error = onError(err)
        } else {
          console.error(err)
          error = err
        }
      })
    : undefined
  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound
    return <NotFound error={error} />
  }

  return <EmbeddedTweet tweet={tweet} components={components} />
}

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className='tweet my-6'>
      <div className={`flex justify-center`}>
        <Suspense fallback={<TweetSkeleton />}>
          <ReactTweet id={id} />
        </Suspense>
      </div>
    </div>
  )
}
