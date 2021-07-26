export interface Asset {
  url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: {
    html: string;
    markdown: string;
  };
  publishedAt: string;
  children: BlogPost[];
  parent: BlogPost | null;
  next: BlogPost | null;
  banner: Asset;
}

