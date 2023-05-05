import React from 'react'

function Button({onClick,tittle,color}) {
    return (
        <div className='button'>
            <button onClick={onClick} className={`button-${color}`}>{tittle}</button>
        </div>
    )
}

export default Button