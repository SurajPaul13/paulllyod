import './index.css'

import {Component} from 'react'

import RepoItem from '../RepoItem/index'

class Github extends Component {
  state = {isLoading: true, repoItems: []}

  componentDidMount() {
    this.fetchRepoDetails()
  }

  fetchRepoDetails = async () => {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc',
      {
        headers: {
          Authorization: 'token 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',
        },
      },
    )
    this.setState({isLoading: true})

    const data = await response.json()

    this.setState({isLoading: false, repoItems: data.items})
  }

  renderLoader = () => (
    <div className="loader">
      <h1>Loading</h1>
    </div>
  )

  renderRepoList = () => {
    const {repoItems} = this.state
    console.log(repoItems)
    return (
      <div className="repo-list-card">
        {repoItems.map(eachItem => (
          <RepoItem repoInfo={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">GITHUB DASHBOAARD</h1>
        <div className="repos-main-card">
          <h2 className="most-starred-heading">Most Starred Repos</h2>
          {isLoading ? this.renderLoader() : this.renderRepoList()}
        </div>
      </div>
    )
  }
}

export default Github
