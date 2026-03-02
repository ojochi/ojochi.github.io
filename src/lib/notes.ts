import { XMLParser } from 'fast-xml-parser';
import { SITE } from '../site.config';

export type NoteItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true
});

export async function fetchNotes(): Promise<NoteItem[]> {
  try {
    const response = await fetch(SITE.NOTE_RSS_URL);
    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }

    const xml = await response.text();
    const parsed = parser.parse(xml);
    const items = parsed?.rss?.channel?.item;
    if (!items) return [];

    const normalized = Array.isArray(items) ? items : [items];
    return normalized.slice(0, 12).map((item) => ({
      title: item.title ?? 'untitled',
      link: item.link ?? '#',
      pubDate: item.pubDate ?? '',
      description: (item.description ?? '').replace(/<[^>]+>/g, '').slice(0, 120)
    }));
  } catch {
    return [];
  }
}
