import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class InputForm extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchQ: '',
    displayPassword: false,
  }

  getPasswordsList = filteredList => {
    const {displayPassword} = this.state
    return (
      <ul className="password-list">
        {filteredList.map(eachItem => (
          <PasswordItem
            key={eachItem.id}
            itemDetails={eachItem}
            removePassword={this.removePassword}
            display={displayPassword}
          />
        ))}
      </ul>
    )
  }

  addWebsite = event => {
    this.setState({website: event.target.value})
  }

  addUsername = event => {
    this.setState({username: event.target.value})
  }

  addPassword = event => {
    this.setState({password: event.target.value})
  }

  changeSearch = event => {
    this.setState({searchQ: event.target.value})
  }

  changeDisplay = () => {
    this.setState(prevState => ({displayPassword: !prevState.displayPassword}))
  }

  submitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
    }))
  }

  removePassword = id => {
    console.log('remove')
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  filterWebsitesList = () => {
    const {passwordList, searchQ} = this.state

    return passwordList.filter(
      eachItem =>
        eachItem.website.toLowerCase().includes(searchQ.toLowerCase()) ||
        eachItem.username.toLowerCase().includes(searchQ.toLowerCase()) ||
        eachItem.password.toLowerCase().includes(searchQ.toLowerCase()),
    )
  }

  render() {
    const {website, username} = this.state
    const filteredList = this.filterWebsitesList()

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="image"
          alt="app logo"
        />
        <div className="password-form-container">
          <div className="password-form">
            <h1 className="heading">Add New Password</h1>
            <form className="input-form" onSubmit={this.submitForm}>
              <div className="input-container">
                <div className="img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="image1"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  onChange={this.addWebsite}
                  value={website}
                />
              </div>
              <div className="input-container">
                <div className="img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="image1"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  onChange={this.addUsername}
                  value={username}
                />
              </div>
              <div className="input-container">
                <div className="img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="image1"
                    alt="password"
                  />
                </div>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.addPassword}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image2"
          />
        </div>
        <div className="results-container">
          <div className="results-top-container">
            <div className="text-container">
              <h1 className="heading">Your Passwords</h1>
              <p className="para">{filteredList.length}</p>
            </div>
            <div className="input-container search-container">
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="image1"
                />
              </div>
              <input
                type="search"
                className="input"
                placeholder="search"
                onChange={this.changeSearch}
              />
            </div>
          </div>
          <hr />
          <div className="results-bottom-container">
            <div className="checkbox-container">
              <input type="checkbox" id="check" onClick={this.changeDisplay} />
              <label htmlFor="check" className="label">
                Show Passwords
              </label>
            </div>
            <div className="results-bottom-container">
              {filteredList.length < 1 ? (
                <>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="image3"
                  />
                  <p>No Passwords</p>
                </>
              ) : (
                this.getPasswordsList(filteredList)
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InputForm
