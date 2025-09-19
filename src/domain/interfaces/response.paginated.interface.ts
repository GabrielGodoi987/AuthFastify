export interface ResponsePaginated<T> {
  currentPage: number;
  next: number | null;
  previous: number | null;
  totalPages: number;
  totalItems: number;
  items: T[];
}
