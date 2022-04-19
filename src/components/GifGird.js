import React, { useState, useEffect } from 'react'
//import { getGif } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGirdItem } from './GifGirdItem';

export const GifGird = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            {loading && <p>Cargando</p>}
            <h3> {category} </h3>
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGirdItem
                            key={img.id}
                            {...img} /> //con el spread mandamos el argumento completo de images al componente hijo
                    ))
                }
            </div>
        </>
    )
}
