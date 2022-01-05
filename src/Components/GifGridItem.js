import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {

    if({id} !== undefined)
    {
        return (
            <div className='card animate_animated animate_fadeIn' key="Div{ id }">
                <img key="{ id }" src = { url } alt={ title } />
                <p>{ title }</p>
            </div>
        )
    }

    return (
        <div key="Div0"></div>
    )
}
