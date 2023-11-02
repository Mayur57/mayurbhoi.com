import { Metadata } from "next";
import MainLayout from "src/components/main-layout";
import Title from "src/components/title";

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
    </MainLayout>
  )
}
