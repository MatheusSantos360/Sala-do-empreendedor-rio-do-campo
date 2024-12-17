export interface ItemsProps {
  id: number;
  title: string;
  cards: CardProps[];
  icon?: React.ReactNode;
}

export interface CardProps {
  title: string;
  href: string;
  image: {
    url: string;
    alt: string;
  };
  description: string;
  badges?: string[];
}