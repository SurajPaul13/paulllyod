import React, {Component} from 'react'

class EachRepo extends Component {
  state = {
    isLoading: true,
    repoItem: '',
  }

  componentDidMount() {
    this.fetchSpecificRepo()
  }

  fetchSpecificRepo = async () => {
    const {match} = this.props
    const {login, name} = match.params

    const response = await fetch(
      `https://api.github.com/repos/${login}/${name}`,
      {
        headers: {
          Authorization: 'token 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',
        },
      },
    )
    this.setState({isLoading: true})

    const data = await response.json()

    this.setState({isLoading: false, repoItem: data})
  }

  render() {
    const {isLoading, repoItem} = this.state
    console.log(repoItem)

    const updatedDetails = {
      fullName: repoItem.full_name,
      createdAt: repoItem.created_at,
      description: repoItem.description,
      openIssues: repoItem.open_issues,
      subscribers: repoItem.subscribers_count,
      language: repoItem.language,
    }
    console.log(isLoading)
    return (
      <div>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <div>
              <h2>{updatedDetails.fullName}</h2>
              <h3>{updatedDetails.description}</h3>
              <div>
                <p>{`Subscribers : ${updatedDetails.subscribers}`}</p>
                <p>{`Language ${updatedDetails.openIssues}`}</p>
                <p>{`Created at ${updatedDetails.createdAt} by ${updatedDetails.fullName}`}</p>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default EachRepo
