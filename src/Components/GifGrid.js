import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from '../Components/GifGridItem'

export const GifGrid = ({category}) => {

    const { data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate_animated animate_fadeIn'>{ category } </h3>

            { loading && <p className="animate_animated animate_flash">Cargando...</p>}

            {
                <div className='card-grid'> 
                    {
                        images.map( img => (
                            <GifGridItem 
                            key = {img.id!==undefined?img.id:"0"}
                            {...img} />
                        ))
                    }    
                </div>
            
            }
        </>
    )
}
