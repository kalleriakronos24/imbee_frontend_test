export type BookResponse = {
  data: {
    id: string;
    title: string;
    writer: string;
    coverImage: string;
    price: number;
    tags: string[];
    createdAt: string;
    updatedAt: string;
  }[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    isExceed?: boolean;
  };
};

export type Book = {
  id: string;
  title: string;
  writer: string;
  coverImage: string;
  price: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};
