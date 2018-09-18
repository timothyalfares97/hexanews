/**
 * Utillity class containing all reusable functions.
 */

import { Article } from '../domain/model/Article'

const getFeaturedImage = (article: Article) => {
  const openTagImageIndex = article.description.search('<img')
  const remainingDescription = article.description.substr(openTagImageIndex)
  const closeTagImageIndex = remainingDescription.search('>')
  const imageContent = remainingDescription.substr(0, closeTagImageIndex)
  const articleOpenImageSrc = imageContent.search('src="')
  const remainingSource = remainingDescription.substr(articleOpenImageSrc)
  const articleStartImageSrc = remainingSource.search('"')
  const finalSource = remainingSource.substr(articleStartImageSrc + 1)
  const articleStopImageSrc = finalSource.search('"')
  const finalSrcContent = finalSource.substr(0, articleStopImageSrc)

  return finalSrcContent
}

export default {
  getFeaturedImage,
}
