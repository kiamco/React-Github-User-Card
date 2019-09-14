import Styled from 'styled-components';
import React from 'react'



const Form = Styled.form`
        background:#101010	;
        margin-bottom: 0px;
        padding: 20px;
    `

class Search extends React.Component {

    state = {
        username: {}
    }

    onChangeHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    render() {
        return (
            <div>
                <Form onSubmit={() => this.props.searchUser(this.state.username)}>
                    <input type="text" name='user' placeholder='Git username' onChange={this.onChangeHandler} />
                    <button>search</button>
                </Form>
            </div>
        )
    }
}

export default Search;