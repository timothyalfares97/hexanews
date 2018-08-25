import * as React from 'react'
// import { filter } from 'lodash'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import styles from './styles'

type Props = {
  history: History
}

interface ComponentState {
  query: string
}

class SearchArticle extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  renderAvatar = () => {
    return <Avatar style={styles.avatar}>HC</Avatar>
  }

  handleQueryChange = (event: any) => {
    this.setState({ query: event.target.value })
  }

  public render() {
    let articles = [
      { title: 'Implement Google Analytics', description: 'For almost every product that is built or launched' },
      { title: 'One Book at The Time', description: 'There had been times she had almost given up' },
      { title: 'Artificial Intelligence', description: 'Robots are getting smarter' }
    ]
    let query = this.state.query.trim().toLowerCase()

    if (query.length > 0) {
      articles = articles.filter(function (i) {
        return i.title.toLowerCase().match(query)
      })
    }

    return (
      <div style={styles.container}>
        <form>
          <TextField
            id='query'
            label='Search'
            value={query}
            onChange={this.handleQueryChange}
            style={styles.textField}
            margin='normal'
          />
        </form>

        <Grid container spacing={24}>
          <Grid item xs={12} style={styles.postContainer}>
            {articles.map(function (i) {
              return (
                <Card style={styles.card}>
                  <CardHeader
                    avatar={<Avatar style={styles.avatar}>HC</Avatar>}
                    title='Hillary Clinton'
                    subheader='20 August 2018'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='headline' component='h2'>
                      {i.title}
                    </Typography>
                    <Typography component='p'>
                      {i.description}
                    </Typography>
                  </CardContent>
                </Card>
              )
            })}

          </Grid>
        </Grid>
      </div >
    )
  }
}

export default SearchArticle
