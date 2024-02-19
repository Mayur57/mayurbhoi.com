import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'

import { TweetComponent } from './tweet'

import 'src/app/marker.css'

function Table({ data }: any) {
  const headers = data.headers.map((header: any, index: any) => <th key={index}>{header}</th>)
  const rows = data.rows.map((row: any, index: number) => (
    <tr key={index}>
      {row.map((cell: string, cellIndex: number) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: any) {
  const href = props.href
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }
  if (href.startsWith('#')) return <a {...props} />
  return <a target='_blank' rel='noopener noreferrer' {...props} />
}

function RoundedImage(props: any) {
  return (
    <div className='flex flex-col items-center pt-4'>
      <Image alt={props.alt} className='border dark:border-[#222]' {...props} />
      <p className='opacity-50 italic text-xs text-center sm:px-16'>{props.alt}</p>
    </div>
  )
}

function Callout(props: any) {
  return (
    <div className='not-prose px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-[#F3F2F5] dark:bg-neutral-800 rounded-lg p-1 text-sm items-start text-neutral-900 dark:text-neutral-100 mb-8'>
      <div className='leading-0 flex mt-1 mr-2 gap-2'>{props.emoji}<strong>{props.title}</strong></div>
      <div className='w-full mt-1 callout'>{props.children}</div>
    </div>
  )
}

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  /* eslint-disable-next-line react/display-name */
  return ({ children }: any) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }
}

function Divider() {
  return <div className='h-[1px] w-full bg-black opacity-10 dark:bg-white my-8' /> 
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  hr: Divider,
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  Tweet: TweetComponent,
  Table,
}

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
}

export function MDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={options}
    />
  )
}
