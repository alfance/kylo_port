import React from 'react'
import {Link} from 'react-router'

export default class NavItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {id, name, link} = this.props

    return (
      <div>
        <Link key={id} to={link}><p><b>{name}</b></p></Link>
      </div>
    )
  }
}
