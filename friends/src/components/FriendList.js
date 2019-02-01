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
      {this.props.friends.map(friend => {
        return (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>  
        )
      })}
    </div>
  )
}
}

FriendList.propTypes = {
  friends: PropTypes.array
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: state.error
})


export default connect(mapStateToProps, { getFriends } )(FriendList)
