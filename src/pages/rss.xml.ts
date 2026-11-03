import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'm1b.de – IT Architecture & Software Engineering',
    description: 'Blog von Reinhard Moosauer über C#/.NET, Anwendungsarchitektur, DevOps, Cloud und Industrie-Automatisierung.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: `<author>${post.data.author}</author>`,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>de-de</language>`,
  });
}
