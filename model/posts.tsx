export interface AllPostsData {
  allPostsData: PostContent[];
}

export interface PostContent {
  id: string;
  date: string;
  title: string;
  contentHtml?: string;
}
