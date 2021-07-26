
export interface CategoryInterface{
  id: string;
  title: string;
  slug: string;
  children: CategoryInterface[];
}

export interface CategoryItemProperties{
  setMenuClose(): void;
  blogPost: CategoryInterface;
  level: number;
}