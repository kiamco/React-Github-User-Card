import React from 'react';
import Styled from 'styled-components';

const CardContainer = Styled.div`
    background: #333;
    margin:10px auto;
    display:flex;
    flex-flow: row wrap;
`
const Img = Styled.img`
    max-width:200px;
    height:200px;
`

const UserDetails = Styled.div`
    color:white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height:2;
    margin:30px;
`
class UserCard extends React.Component {

    

    render() {
        return (
            <CardContainer>
                <div>
                    <Img src={this.props.avatar} alt="avatar" />
                </div>
                <UserDetails>
                    <h1>Name: {this.props.name}</h1>
                    <p>Number of Repos: {this.props.repos}</p>
                    <p>Following: {this.props.following}</p>
                    <p>Followers: {this.props.followers}</p>
                </UserDetails>
            </CardContainer>
        )
    }
}

export default UserCard;