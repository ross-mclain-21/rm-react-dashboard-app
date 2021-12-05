export interface Image {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface IPortfolioItemInput {
  description: string;
  images: Image[];
  title: string;
  link?: string;
  technologies: string[];
  type: string;
  year: number;
}

export interface IPortfolioSkillInput {
  name: string;
  slug: string;
  icon: string;
  prefix?: string;
}

export interface IAdventChallenge {
  id: number;
  identifier: string;
  name: string;
  description: string;
  input: number[];
  success?: boolean;
  link?: string;
}
