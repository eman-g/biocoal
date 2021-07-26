import { BlogPost } from "graphqlApi/types";

export interface BlogPostAppBarProperties {
  author: string;
  publishedAt: string;
}

export interface BlogShareProperties {
  blogPost: BlogPost
}