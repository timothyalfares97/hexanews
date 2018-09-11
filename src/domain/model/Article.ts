/**
 * Model for the article.
 */

export type Article = {
  _id?: string,
  title: string,
  description: string,
  category?: string,
  authorId?: string,
  isFeatured?: boolean,
  views?: number,
  createdAt?: string,
}