import React from 'react'

export const GifGirdItem = ({ title, url }) => { //hay q recibir el argumento de forma desestructurada

    
    return (
        <div className='card'>

            <img src={url} alt={title} />
            <p>{ title }</p>

        </div>
    )
}
