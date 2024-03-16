import React from 'react'

const Size = ({ sizes, selectedSizes, handleSizeChange }) => {
    return (
        <>
            <h3>Size</h3>
            {sizes && sizes.map(size => (
                <div key={size.id}>
                    <input type="checkbox" id={size.id} value={size.id} onChange={handleSizeChange} checked={selectedSizes.includes(size.id)} />
                    <label htmlFor={size.id}>{size.name}</label>
                </div>
            ))}
        </>
    )
}

export default Size