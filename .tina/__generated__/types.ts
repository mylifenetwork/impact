export type Posts = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string;
  imageUrl?: string;
  body?: string;
};

export type PostsDocument = {
  data?: Posts;
};

export type Query = {
  getPostsList?: {
    edges?: Array<{
      node?: {
        sys?: {
          basename?: string;
        };
      };
    }>;
  };
  getPostsDocument?: PostsDocument;
};
