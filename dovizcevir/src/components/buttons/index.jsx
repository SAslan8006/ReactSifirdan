import React from 'react'

const button = ({ onClick, title }) => {
    return (
        <div className='px-3.5 rounded-lg bg-zinc-500 hover:bg-zinc-600 transition-colors py-2.5 text-white ' onClick={onClick} >
            {title}
        </div>
    )
}

export default button
