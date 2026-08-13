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

  const jobs = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (jobs.length === 0) {
    throw new Error('No careers found in src/careers; cannot build the index page.');
  }

  const [latest, ...rest] = jobs;
  const featured = { ...latest, featured: true };

  const posts = rest
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reverse();

  return {
    props: { posts, featured },
  };
}
