/**
 * Model for Article object in the application.
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