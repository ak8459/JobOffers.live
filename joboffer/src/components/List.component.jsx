import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanets } from '../Redux/planetRedux/action'
import { getColors } from '../Redux/colorRedux/action'
import { getShapes } from '../Redux/shapesRedux/action'
import { getSizes } from '../Redux/sizeRedux/action'
import ListCard from './ListCard.component'
const List = () => {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedShapes, setSelectedShapes] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const { Planet, isLoading, isError } = useSelector(state => {
        return state.PlanetReducer
    })
    const dispatch = useDispatch()


    const { colors } = useSelector(state => {
        return state.colorReducer
    })

    const { shapes } = useSelector(state => state.shapeReducer)
    // console.log(shapes);

    const { sizes } = useSelector(state => state.sizeReducer)

    useEffect(() => {
        dispatch(getPlanets())
        dispatch(getColors())
        dispatch(getShapes())
        dispatch(getSizes())
    }, [])


    const handleColorChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedColors(prevSelectedColors => [...prevSelectedColors, value]);
        } else {
            setSelectedColors(prevSelectedColors => prevSelectedColors.filter(color => color !== value));
        }
    };

    const handleShapeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedShapes(prevSelectedShapes => [...prevSelectedShapes, value]);
        } else {
            setSelectedShapes(prevSelectedShapes => prevSelectedShapes.filter(shape => shape !== value));
        }
    };


    return (
        <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'space-between', width: '80%', margin: 'auto' }} >
            <div className='filter-container'>
                <div className='color-filer'>
                    <h3>Color</h3>
                    {colors && colors?.map(color => (
                        <div key={color.id}>
                            <input type="checkbox" id={color.id} value={color.id} onChange={handleColorChange} checked={selectedColors.includes(color.id)} />
                            <label htmlFor={color.id}>{color.name}</label>
                        </div>
                    ))}
                </div>
                <div className="color-filter">
                    <h3>Shape</h3>
                    {shapes.map(shape => (
                        <div key={shape.id}>
                            <input type="checkbox" id={shape.id} value={shape.id} onChange={handleShapeChange} checked={selectedShapes.includes(shape.id)} />
                            <label htmlFor={shape.id}>{shape.name}</label>
                        </div>
                    ))}
                </div>

            </div>
            <hr width="1" size="500" />
            <div>
                {
                    isLoading ? <h1>Loading...</h1> : Planet?.map((planet) => {
                        return <ListCard key={planet.id} planet={planet} />
                    })
                }
            </div>
        </div>
    )
}

export default List