import type { CollectionEntry } from 'astro:content';

type NewsEntry = CollectionEntry<'news'>;

export function getNewsDate(news: NewsEntry): Date {
  return news.data.date ?? news.data.pubDate ?? new Date(0);
}

export function sortNews(items: NewsEntry[]): NewsEntry[] {
  return items.sort((a, b) => getNewsDate(b).valueOf() - getNewsDate(a).valueOf());
}
