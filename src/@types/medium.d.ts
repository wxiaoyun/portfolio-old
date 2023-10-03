interface MediumData {
  status: string;
  feed: MediumFeed;
  items: MediumItem[];
}

interface MediumFeed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

interface MediumItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: unknown;
  categories: string[];
}

interface BlogState {
  data?: MediumData;
  isLoading: boolean;
  hasFetched: boolean;
}
