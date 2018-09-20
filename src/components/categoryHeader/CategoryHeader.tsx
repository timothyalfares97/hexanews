/**
 * Display category header component.
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

type Props = {
  categories: Category[]
}

class CategoryHeader extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }

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