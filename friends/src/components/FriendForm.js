import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { addFriend } from '../actions/ActionIndex'

class FriendForm extends Component {
    state = {
        name: '',
        age: 0,
        email: '',
    }
    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="number" name="age" value={this.state.age} onChange={this.handleChange}/>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <button>Add New Friend</button>
            </form>
        );
    }
}

FriendForm.propTypes = {

};

export default FriendForm;