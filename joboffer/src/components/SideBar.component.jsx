
const SideBar = ({ colors, shapes, sizes, setColors, setShapes, setSizes }) => {
    const handleSetColors = (event) => {
        const { name, value } = event.target;
        if (!colors.includes(name)) {
            console.log('value not exist');
            setColors(prevValue => [...prevValue, value])
        } else {
            console.log('value  exist');
            setColors(prevValue => prevValue.filter(color => color !== value))
        }
    }

    const handleSetShapes = (event) => {
        const { name, value } = event.target;
        if (!shapes.includes(name)) {
            console.log('value not exist');
            setShapes(prevValue => [...prevValue, value])
        } else {
            console.log('value  exist');
            setShapes(prevValue => prevValue.filter(shape => shape !== value))
        }
    }

    const handleSetSizes = (event) => {
        const { name, value } = event.target;
        if (!sizes.includes(name)) {
            console.log('value not exist');
            setSizes(prevValue => [...prevValue, value])
        } else {
            console.log('value  exist');
            setSizes(prevValue => prevValue.filter(size => size !== value))
        }
    }


    // console.log(colors, shapes, sizes);


    return (
        <div className='sidebar'>
            <div className="color-filter">
                <h3>Color</h3>
                <input type="checkbox"
                    name="red"
                    value={'red'}
                    checked={colors.includes('red')}
                    onChange={
                        handleSetColors
                    }
                />
                <label htmlFor="">Red</label>
                <input type="checkbox"
                    name="green"
                    value={'green'}
                    checked={colors.includes('green')}
                    onChange={
                        handleSetColors
                    }
                />
                <label htmlFor="">Green</label>
                <input type="checkbox"
                    name="blue"
                    value={'blue'}
                    checked={colors.includes('blue')}
                    onChange={
                        handleSetColors
                    }
                />
                <label htmlFor="">Blue</label>
            </div>
            <div className="shape-filter">
                <h3>Shape</h3>
                <input type="checkbox"
                    name="small"
                    value={'small'}
                    checked={shapes.includes('small')}
                    onChange={
                        handleSetShapes
                    }
                />
                <label htmlFor="">Small</label>
                <input type="checkbox"
                    name="medium"
                    value={'medium'}
                    checked={shapes.includes('medium')}
                    onChange={
                        handleSetShapes
                    }
                />
                <label htmlFor="">Medium</label>
                <input type="checkbox"
                    name="large"
                    value={'large'}
                    checked={shapes.includes('large')}
                    onChange={
                        handleSetShapes
                    }
                />
                <label htmlFor="">Large</label>
            </div>

            <div>
                <h3>Size</h3>
                <input type="checkbox"
                    name="round"
                    value={'round'}
                    checked={sizes.includes('round')}
                    onChange={
                        handleSetSizes
                    }
                />
                <label htmlFor="">Round</label>
                <input type="checkbox"
                    name="oval"
                    value={'oval'}
                    checked={sizes.includes('oval')}
                    onChange={
                        handleSetSizes
                    } />
                <label htmlFor="">Oval</label>
            </div>

        </div>
    )
}

export default SideBar