import React from 'react';
import Styled from 'styled-components';

const CardContainer = Styled.div`
    max-width:200px;
`
const Img = Styled.img`
    max-width:200px;
    border-radius:10rem;
`
class UserCard extends React.Component {

    render() {
        return (
            <CardContainer>
                <Img src={this.props.avatar} alt="avatar" />
                <h1>Name: {this.props.name}</h1>
                <p>Followers: {this.props.followers}</p>
                <p>Number of Repos: {this.props.repos}</p>
            </CardContainer>
        )
    }
}

export default UserCard;