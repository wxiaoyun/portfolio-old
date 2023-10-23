interface Img {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

type Url = string;

interface ExperienceItem {
  title: string;
  paragraphs: string[];
}

type Grade = 
  | "A+"
  | "A"
  | "A-"
  | "B+"
  | "B"
  | "B-"
  | "C+"
  | "C"
  | "D+"
  | "D"
  | "F"
  | "S"
  | "U"
  | "CS"
  | "CU"
  | "In Progress";

interface CourseItem {
  name: string;
  code: string;
  grade: Grade;
}
