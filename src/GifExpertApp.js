import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGird } from './components/GifGird';


const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['']);

    

    return <>
        <h2> Gif Expert App</h2>
        <AddCategory setCategories={setCategories} />
        <hr></hr>
        
        <ol>
            {
                categories.map(category=>
                    <GifGird  key={category}
                    category={category}
                    />
                )
            }
        </ol>
    </>

}

export default GifExpertApp;