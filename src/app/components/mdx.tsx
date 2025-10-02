import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { TweetComponent } from './tweet';
import { highlight } from 'sugar-high';
import React, { ReactNode } from 'react';

interface TableData {
  headers: string[];
  rows: (string | ReactNode)[][];
}

function Table({ data }: { data: TableData }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
Table.displayName = 'Table';

function CustomLink(props: React.ComponentProps<'a'>) {
  let href = props.href;
  if (href && href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href && href.startsWith('#')) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
CustomLink.displayName = 'CustomLink';

function RoundedImage({ alt = '', ...props }: ImageProps) {
  return <Image alt={alt} className="rounded-lg" {...props} />;
}
RoundedImage.displayName = 'RoundedImage';

interface CalloutProps {
  emoji: string;
  children: ReactNode;
}

function Callout(props: CalloutProps) {
  return (
    <div className="px-4 py-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded p-1 text-sm flex items-center text-gray-900 dark:text-gray-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}
Callout.displayName = 'Callout';

interface CardProps {
  title: string;
  pros?: string[];
  cons?: string[];
}

function ProsCard({ title, pros }: CardProps) {
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 my-4 w-full">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros?.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
ProsCard.displayName = 'ProsCard';

function ConsCard({ title, cons }: CardProps) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 my-6 w-full">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons?.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
ConsCard.displayName = 'ConsCard';

function Code({ children, ...props }: { children: string } & React.ComponentProps<'code'>) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
Code.displayName = 'Code';

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function createHeading(level: number) {
  const HeadingComponent = ({ children }: { children: ReactNode }) => {
    const slug = typeof children === 'string' ? slugify(children) : '';
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
    );
  };
  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  StaticTweet: TweetComponent,
  code: Code,
  Table,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
CustomMDX.displayName = 'CustomMDX';