import React,{useState, useEffect} from 'react';

const Search = () => {

    const [username, setUsername] = useState('');

    const onChangeHandler = (event) => {
        setUsername({[event.target.name]:event.target.value})
    }   

    return(
        <div>
            <form>
                <label htmlFor="name">Search</label>
                <input type="text" name='user' placeholder='Git username' onChange={onChangeHandler}/>
            </form>
        </div>
    )
}

export default Search;