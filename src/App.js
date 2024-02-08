import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavBar: true,
    showRightNavBar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeftNavBar = () => {
    this.setState(prevState => ({showLeftNavBar: !prevState.showLeftNavBar}))
  }

  onToggleShowRightNavBar = () => {
    this.setState(prevState => ({showRightNavBar: !prevState.showRightNavBar})
  }

  render() {
    const {showContent, showLeftNavBar, showRightNavBar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavBar,
          showRightNavBar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavBar: this.onToggleShowLeftNavBar,
          onToggleShowRightNavBar: this.onToggleShowRightNavBar,
        }}
      >
        <div className="app-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
