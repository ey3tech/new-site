import fs from 'fs';
import path from 'path';
import { Post, postMarkdown } from 'layouts/Post';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import readingTime from 'reading-time';
import rehypeImgSize from 'rehype-img-size';
import rehypeMinify from 'rehype-preset-minify';
import rehypeSlug from 'rehype-slug';
import { JOBS_PATH, jobFilePaths } from 'utils/mdx';
import { formatTimecode } from 'utils/timecode';
import rehypePrism from '@mapbox/rehype-prism';
import { generateOgImage } from './og-image';

export default function PostPage({ frontmatter, code, timecode, ogImage }) {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Post timecode={timecode} ogImage={ogImage} {...frontmatter}>
      <MDXComponent components={postMarkdown} />
    </Post>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(JOBS_PATH, `${params.slug}.mdx`);
  const source = `${fs.readFileSync(postFilePath, 'utf-8')}

## Why work with Ey3?

At Ey3 we are focused on using technology with purpose to solve some of the hardest problems that affect not only our customers but also our community. We are committed to innovative solutions that demonstrate the creativity and ingenuity of our team and reflect our most personal passions where we work, where we live, and where we care. And, of course we love and value our employees...here's how we prove it:
- Ey3 offers a 100% employer-paid medical package including health, dental, and vision coverage for employees and family.
- Paid Time Off/Sick Leave/Holiday Leave: 24 days off per year based on a full time (40 hour) schedule, to include sick leave and mandatory leave week between Christmas and New Year's Day. In addition, Ey3 follows the Federal Government Holiday schedule per year (11 days) plus observes the day after Thanksgiving and Employee's Birthday.
- Training/Education Assistance
- 401K Match
- Annual Tech Budget
- Monthly Reimbursement Fund up to $125/month to include daycare, cell phone, gym membership, etc.
- And MORE!

## How to Apply
To apply for this role, please contact us [by email](mailto:tbazemore@ey3.tech?subject=Applying%20for%20%5BRole%5D&body=Please%20tell%20us%20a%20little%20bit%20about%20yourself%20and%20attach%20your%20resume.%20We'll%20get%20back%20to%20you%20soon!) with your resumé and a brief introduction. We look forward to hearing from you!
  `
  ;

  const { code, frontmatter, matter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrism,
        rehypeSlug,
        rehypeMinify,
        [rehypeImgSize, { dir: 'public' }],
      ];

      return options;
    },
  });
  console.log(code)

  const { time } = readingTime(matter.content);
  const timecode = formatTimecode(time);

  const ogImage = await generateOgImage({
    title: frontmatter.title,
    date: frontmatter.date,
    banner: frontmatter.banner,
    timecode,
  });

  return {
    props: { code, frontmatter, ogImage },
    notFound: process.env.NODE_ENV === 'production' && frontmatter.draft,
  };
};

export const getStaticPaths = async () => {
  const paths = jobFilePaths
    .map(filePath => filePath.replace(/\.mdx?$/, ''))
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
