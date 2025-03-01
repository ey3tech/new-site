import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { JOBS_PATH, jobFilePaths } from 'utils/mdx';
import { formatTimecode } from 'utils/timecode';

export { Careers as default } from './Careers';

export function getStaticProps() {
  const allPosts = jobFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(JOBS_PATH, filePath));
    const { data, content } = matter(source);

    const { time } = data.timecode
      ? { time: data.timecode * 1000 + 1 }
      : readingTime(content);
    const timecode = formatTimecode(time);

    return {
      ...data,
      timecode,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  const featured = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    featured.featured = true;

  const posts = allPosts
    .filter(post => post.slug !== featured.slug)
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return {
    props: { posts, featured },
  };
}
