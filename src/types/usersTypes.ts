interface User {
  email: string;
  gender: string;
  name: string;
  status: string;
  id: number;
}

interface Pagination {
  limit: number;
  links: {
    previous: null;
    current: string;
    next: string;
  };
  page: number;
  pages: number;
  total: number;
}

interface UsersPromise {
  data: User[];
  meta: { pagination: Pagination };
}

export { User, Pagination, UsersPromise };
