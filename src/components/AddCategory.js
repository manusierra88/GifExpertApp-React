import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');//debe ser un string vacio al menos para que no sea undefined

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategories(c => [inputValue, ...c])//setCategories viene del componente padre como parametro donde guardamos el input
            setInputValue('');//si no paso un valor el setInput es undefined y rompe la app
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                ></input>
            </form>





        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
