export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  expanded: boolean;
  comments: Array<Comment>;
  commentsLoaded: boolean;
}
