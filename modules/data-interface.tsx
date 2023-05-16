export interface postsData {
  author: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tags?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  type: string;
}
