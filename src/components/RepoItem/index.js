import {Link} from 'react-router-dom'

import './index.css'

const RepoItem = props => {
  const {repoInfo} = props
  const {description, owner, name} = repoInfo
  const {login} = owner

  const modifiedDetails = {
    avatarUrl: owner.avatar_url,
    stargazersCount: repoInfo.stargazers_count,
    updatedAt: repoInfo.updated_at,
    openIssues: repoInfo.open_issues,
  }

  return (
    <Link to={`/repo/${login}/${name}`}>
      <button type="button" className="repo-item-main">
        <div className="repo-button-container">
          <img
            src={modifiedDetails.avatarUrl}
            className="owner-avatar"
            alt={name}
          />
          <div className="repo-details-card">
            <h2 className="repo-description">{name}</h2>
            <h3 className="repo-description">{description}</h3>
            <div className="additional-details">
              <p className="repo-info">{`Stargazer Count : ${modifiedDetails.stargazersCount}`}</p>
              <p className="repo-info">{`Last published ${modifiedDetails.openIssues} by ${name}`}</p>
              <p className="repo-info">{`Last published ${modifiedDetails.updatedAt} by ${name}`}</p>
            </div>
          </div>
        </div>
      </button>
    </Link>
  )
}

export default RepoItem
