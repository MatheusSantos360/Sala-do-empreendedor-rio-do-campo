import { Card } from "./Card";

export interface Category {
  _id: string;
  title: string;
  cards: Card[];
}
