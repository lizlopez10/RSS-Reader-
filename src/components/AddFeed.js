import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddFeed= ({ setFeeds }) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setFeeds( feeds => [ inputValue, ...feeds, ] );
            setInputValue('');
        }

    }
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />            
        </form>
    )
}


AddFeed.propTypes = {
    setFeeds: PropTypes.func.isRequired
}
