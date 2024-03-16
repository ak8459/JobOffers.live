
const SideBar = ({ colors, sizes, shapes, selectedColors, selectedShapes, selectedSizes, handleColorChange, handleShapeChange, handleSizeChange, handleSearch }) => {
   
    return (
        <div className='filter-container' >
            <div className='color-filer'>
                <h3>Color</h3>
                {colors && colors?.map(color => (
                    <div key={color.id}>
                        <input type="checkbox" id={color.id} value={color.id} onChange={handleColorChange} checked={selectedColors.includes(color.id)} />
                        <label htmlFor={color.id}>{color.name}</label>
                    </div>
                ))}
            </div>
            <div className="size-filter">
                <h3>Size</h3>
                {sizes && sizes.map(size => (
                    <div key={size.id}>
                        <input type="checkbox" id={size.id} value={size.id} onChange={handleSizeChange} checked={selectedSizes.includes(size.id)} />
                        <label htmlFor={size.id}>{size.name}</label>
                    </div>
                ))}
            </div>

            <div className='shape-filter'>
                <h3>Shape</h3>
                {shapes && shapes.map(shape => (
                    <div key={shape.id}>
                        <input type="checkbox" id={shape.id} value={shape.id} onChange={handleShapeChange} checked={selectedShapes.includes(shape.id)} />
                        <label htmlFor={shape.id}>{shape.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBar