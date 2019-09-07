import React from 'react';
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
    `
    return (
        <div className='link-acc'>
            {
                props.followers.map(el => (
                    <FollowerContainer href={el.html_url}>
                        <Img src={el.avatar_url} alt="" />
                        <h1>{el.login} </h1>
                    </FollowerContainer>))
            }
        </div>
    );
}

export default OtherCards;