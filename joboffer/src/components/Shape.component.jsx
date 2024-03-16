import React from 'react'

const Shape = ({ shapes, selectedShapes, handleShapeChange }) => {
    return (
        <>
            <h3>Shape</h3>
            {shapes && shapes.map(shape => (
                <div key={shape.id}>
                    <input type="checkbox" id={shape.id} value={shape.id} onChange={handleShapeChange} checked={selectedShapes.includes(shape.id)} />
                    <label htmlFor={shape.id}>{shape.name}</label>
                </div>
            ))}
        </>
    )
}

export default Shape