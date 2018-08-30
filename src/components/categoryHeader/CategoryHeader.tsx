import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { map } from 'lodash'

import * as Config from '../../constants/config'
import styles from './styles'
import categories from './mockCategories'

type Props = {
}

class CategoryHeader extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  renderCategoriesList = () => (
    map(categories, (item) => {
      const link = item === 'more' ? Config.HEADER_LINK.categories : Config.HEADER_LINK.category(item)
      return (
        <Typography key={item} variant='button' color='primary' style={styles.flex}>
          <Link to={link} style={styles.category}>{item.toUpperCase()}</Link>
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