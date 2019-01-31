import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { getFriends } from '../actions/ActionIndex.js'



class FriendList extends React.Component {
  componentDidMount() {
    this.props.getFriends()
  }
  render() {
    return (
    <div>
      <h1>Friends:</h1>
    </div>
  )
}
}

FriendList.propTypes = {

}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps, { getFriends } )(FriendList)
