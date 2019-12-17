import React, {useState,useEffect}from 'react';
import Styled from 'styled-components'


const OtherCards = (props) => {

    const Img = Styled.img`
        width: 100px;
        border-radius:10rem;
        margin:20px;
    `

    const FollowerContainer = Styled.a`
        margin:20px;
        display:flex;
        flex-flow: column;
        align-items: center;
        width:150px;
        text-decoration:none;
        color:black;
        cursor: pointer;
        transition:.5s
        &:hover{
            background: #6cc644;
            border-radius: .5rem;
            margin-top:10px;
        }
    `

    const Login = Styled.h1`
        margin:0px 0px 20px;

    `

    return (
        <div className='link-acc'>
            {
                props.followers.map(el => (
                    <FollowerContainer onClick={() => props.getNewUser(el.login)}>
                        <Img src={el.avatar_url} alt="" />
                        <Login>{el.login} </Login>
                    </FollowerContainer>))
            }
        </div>
    );
}

export default OtherCards;
