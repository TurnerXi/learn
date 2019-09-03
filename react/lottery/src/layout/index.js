import React from 'react'

export default class Layout extends React.Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}
