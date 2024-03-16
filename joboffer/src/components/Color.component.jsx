import React from 'react'

const Color = ({ colors, selectedColors, handleColorChange }) => {
    return (
        <>
            <h3>Color</h3>
            {colors && colors?.map(color => (
                <div key={color.id}>
                    <input type="checkbox" id={color.id} value={color.id} onChange={handleColorChange} checked={selectedColors.includes(color.id)} />
                    <label htmlFor={color.id}>{color.name}</label>
                </div>
            ))}
        </>
    )
}

export default Color