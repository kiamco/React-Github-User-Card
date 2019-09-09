import React from 'react';
import Axios from 'axios';
import Styled from 'styled-components';

const ListItem = Styled.div`
    border:1px solid #333;
    margin: 20px auto;
    padding: 20px;
    max-width:900px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    border-radius:0.5rem;
    background: #333;
    color:white;
    transition:.5s;
    &:hover{
        background: #6cc644;
        cursor: pointer;
        border:1px solid #6cc644;

  }
`

const Li = Styled.li`
    font-size:2rem;
`
class Repos extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.repoData.map(el => {
                            return (
                                <ListItem>
                                    <Li> {el.name}</Li>
                                </ListItem>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Repos;