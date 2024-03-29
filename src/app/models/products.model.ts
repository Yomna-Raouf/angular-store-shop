export interface Product {
  id:                 number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  brand:              string;
  category:           string;
  thumbnail:          string;
  images:             string[];
}

export interface ProductsListResponse {
  products:   Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductsPaginator {
  products: Product[];
  page: number;
  total: number;
  searchToken?: string;
  hasMorePages: boolean;
}
