export interface Card {
  title: string;
  href: string;
  image: {
    url: string;
  };
  description: string;
  badges?: string[];
}
