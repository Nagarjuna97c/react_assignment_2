import './index.css'

const PasswordItem = props => {
  const {itemDetails, removePassword, display} = props
  const {id, website, username, password} = itemDetails

  const deletePassword = () => {
    removePassword(id)
  }

  const displayPassword = display ? (
    <p className="para2">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="image4"
    />
  )
  return (
    <li className="password-data">
      <div className="para-div">
        <p className="para1">{website[0].toUpperCase()}</p>
      </div>
      <div className="list-text-container">
        <p className="para2">{website}</p>
        <p className="para2">{username}</p>
        {displayPassword}
      </div>
      <button
        className="button1"
        type="button"
        onClick={deletePassword}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="image1"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
