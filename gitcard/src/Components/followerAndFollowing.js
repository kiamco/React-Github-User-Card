import React from 'react';
import Styled from 'styled-components'


const OtherCards = (props) => {

    const Img = Styled.img`
        width: 100px;
        border-radius:10rem;
    `

    const FollowerContainer = Styled.div`
        margin:20px;
        display:flex;
        flex-flow: column;
        align-items: center;
    `
    return (
        <div className='link-acc'>
            {
                props.followers.map(el => (
                    <FollowerContainer>
                        <Img src={el.avatar_url} alt="" />
                        <h1>{el.login} </h1>
                    </FollowerContainer>))
            }
        </div>
    );
}

export default OtherCards;