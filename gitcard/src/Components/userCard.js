import React from 'react';

class UserCard extends React.Component {

    render() {
        return(
        <h1>Name: {this.props.name}</h1>
        )
    }
}

export default UserCard;