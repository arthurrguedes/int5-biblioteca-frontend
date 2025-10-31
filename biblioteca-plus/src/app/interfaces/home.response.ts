export interface Book {
  id: number;
  title: string;
  coverUrl: string;
  author: string;
}

export interface Category {
  title: string;
  seeMoreLink: string;
  books: Book[];
}

export interface HomeResponse {
  categories: Category[];
}