import { Metadata } from 'next'
import MainLayout from 'src/components/main-layout'
import Title from 'src/components/title'

export const metadata: Metadata = {
  title: 'Privacy Statements',
  description: 'Privacy statements about the website and other products by Mayur Bhoi',
  openGraph: {
    title: 'Privacy Statements',
    description: 'Privacy statements about the website and other products by Mayur Bhoi',
    url: 'https://mayurbhoi.com/privacy',
    type: 'website',
    images: [
      {
        url: 'https://mayurbhoi.com/og?title=Privacy%20Statements&section=true',
        width: 1200,
        height: 630,
        alt: 'Mayur Bhoi',
      },
    ],
  },
}

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <Title>privacy statements</Title>
      <div className='pt-6 prose-sm dark:prose-invert sm:prose'>
        <h2 className='font-medium tracking-tight pt-4'>Countless</h2>
        <p className='not-prose text-sm mt-1 mb-4'>
          This privacy policy applies to the countless extension (the &quot;Extension&quot;). The
          Extension is provided by Mayur Bhoi and is intended for use as is. By using the Extension,
          you consent to the collection, use, and sharing of your information as described in this
          privacy policy.
        </p>
        <strong className='not-prose font-medium tracking-tight'>
          What information is collected by the Extension?
        </strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          The Extension does not collect any personal information about you or the tweets you view
          while the Extension is enabled.
        </p>
        <strong className='not-prose font-medium tracking-tight'>
          How is the collected information used?
        </strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          As the Extension does not collect any information, there is no information to use.
        </p>
        <strong className='not-prose font-medium tracking-tight'>
          Is the collected information shared with third parties?
        </strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          As the Extension does not collect any information, there is no information to share with
          third parties.
        </p>
        <strong className='not-prose font-medium tracking-tight'>
          How is the collected information stored?
        </strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          As the Extension does not collect any information, there is no information to store.
        </p>
        <strong className='not-prose font-medium tracking-tight'>Your Choices</strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          You can choose to disable the Extension at any time by accessing the Extension settings in
          your Chrome browser and turning it off.
        </p>
        <strong className='not-prose font-medium tracking-tight'>
          Changes to this Privacy Policy
        </strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          We may update this privacy policy from time to time. We encourage you to review the
          privacy policy whenever you access the Extension to stay informed about our information
          practices and the choices available to you.
        </p>
        <strong className='not-prose font-medium tracking-tight'>Contact Me</strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          If you have any questions about this privacy policy, please reach out at{' '}
          <code className='bg-yellow-200 dark:bg-orange-400 dark:bg-opacity-30'>
            mayur072000 at [Google&apos;s Mailing Service] dot com
          </code>
          .
        </p>
        <hr />
        <h2 className='font-medium tracking-tight pt-4'>mayurbhoi.com</h2>
        <strong className='not-prose font-medium tracking-tight'>Anonymized Analytics</strong>
        <p className='not-prose text-sm mt-1 mb-4'>
          <u>This website does not collect any personal information about you.</u>
        </p>
        <p className='not-prose text-sm mt-1 mb-4'>
          The website is hosted on Vercel. Vercel Analytics (
          <a className='not-prose underline' href='https://vercel.com/docs/analytics'>
            read more
          </a>
          ) is enabled on this website which is used to collect anonymous information about the
          visitors to the website like number of visits on each page. No information that can be
          used to identify any visiter is tracked or stored.
        </p>
      </div>
    </MainLayout>
  )
}
