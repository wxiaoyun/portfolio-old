interface Img {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface HBImg {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurhash: string;
}

type Url = string;

interface ExperienceItem {
  title: string;
  paragraphs: string[];
}
