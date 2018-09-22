/**
 * Model for User object for our application.
 */

export type User = {
  _id: string,
  email: string,
  name: string,
  description?: string,
  createdAt?: string,
}