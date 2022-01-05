import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValueChanged = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            console.log("submit");
        
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue('');

        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" value={ inputValue } 
                onChange={ handleInputValueChanged } />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories:  PropTypes.func.isRequired
}