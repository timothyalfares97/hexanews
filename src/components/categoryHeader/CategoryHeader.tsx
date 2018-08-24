import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

type Props = {
}

class CategoryHeader extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  renderCategoriesList = () => {
    const categories = ['tech', 'science', 'art', 'design', 'culture',
      'photography', 'leadership', 'math', 'economy', 'music', 'more']
    return categories.map((item, i) => {
      return (
        <Typography variant='button' color='primary' style={styles.flex}>
          <Link to='/' style={styles.category}>{item.toUpperCase()}</Link>
        </Typography>
      )
    })
  }

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