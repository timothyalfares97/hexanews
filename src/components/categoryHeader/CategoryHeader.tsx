/**
 * The CategoryHeader Component for displaying all categories in home containers
 */

import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { map } from 'lodash'

import { Category } from '../../domain/model/Category'
import * as Config from '../../constants/config'
import styles from './styles'

/**
 * All props required by the components
 */
type Props = {
  categories: Category[]
}

class CategoryHeader extends React.Component<Props> {

  /**
   * Main constructor for CategoryHeader
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
  }

  /**
   * Function that render all categories text into the appBar
   */
  renderCategoriesList = () => (
    map(this.props.categories, (category: Category) => {
      const link = Config.HEADER_LINK.category(category.title)
      return (
        <Typography key={category.title} variant='button' color='primary' style={styles.flex}>
          <Link to={link} style={styles.category}>{category.title.toUpperCase()}</Link>
        </Typography>
      )
    })
  )

  /**
   * Render the Category Header component
   */
  public render() {
    return (
      <div style={styles.root}>
        <AppBar position='static' style={styles.appBar}>
          <Toolbar>
            {this.renderCategoriesList()}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default CategoryHeader