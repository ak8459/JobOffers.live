import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanets } from '../Redux/planetRedux/action'
import { getColors } from '../Redux/colorRedux/action'
import { getShapes } from '../Redux/shapesRedux/action'
import { getSizes } from '../Redux/sizeRedux/action'
import ListCard from './ListCard.component'
import SearchBar from './SearchBar.component'
import Loading from './Loading'

import {
    StringParam, ArrayParam,
    withDefault,
    useQueryParams,
} from 'use-query-params'

const MyFiltersParam = withDefault(ArrayParam, [])
const List = () => {
    const [query, setQuery] = useQueryParams({
        color: MyFiltersParam,
        shape: MyFiltersParam,
        size: MyFiltersParam,
        q: StringParam
    });
    const [selectedColors, setSelectedColors] = useState(query.color || []);
    const [selectedShapes, setSelectedShapes] = useState(query.shape || []);
    const [selectedSizes, setSelectedSizes] = useState(query.size || []);
    const [input, setInput] = useState(query.q || '');




    const { Planet, isLoading } = useSelector(state => {
        return state.PlanetReducer
    })


    const dispatch = useDispatch()
    const { colors } = useSelector(state => state.colorReducer)

    const { shapes } = useSelector(state => state.shapeReducer)
    const { sizes } = useSelector(state => state.sizeReducer)


    useEffect(() => {
        dispatch(getColors())
        dispatch(getShapes())
        dispatch(getSizes())
    }, [])

    function FilterItem(selectedColors, selectedShapes, selectedSizes, input) {
        const queryParams = {}
        if (selectedColors.length > 0) {
            queryParams.color = selectedColors.join(',')
        }
        if (selectedShapes.length > 0) {
            queryParams.shape = selectedShapes.join(',')
        }
        if (selectedSizes.length > 0) {
            queryParams.size = selectedSizes.join(',')
        }
        if (input) {
            queryParams.name = input
        }

        return new URLSearchParams(queryParams).toString()
    }


    useEffect(() => {
        const queryParams = FilterItem(selectedColors, selectedShapes, selectedSizes, input)
        setQuery({ color: selectedColors, shape: selectedShapes, size: selectedSizes, q: input })
        dispatch(getPlanets(queryParams))
    }, [selectedColors, selectedShapes, selectedSizes])


    const handleColorChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedColors(prevSelectedColors => [...prevSelectedColors, value]);
        } else {
            setSelectedColors(prevSelectedColors => prevSelectedColors.filter(color => color !== value));
        }
    };

    const handleSizeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedSizes(prevSelectedSizes => [...prevSelectedSizes, value]);
        } else {
            setSelectedSizes(prevSelectedSizes => prevSelectedSizes.filter(size => size !== value));
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

    const handleSearchKeyPress = (event) => {
        if (event.key === 'Enter') {
            const queryParams = FilterItem(selectedColors, selectedShapes, selectedSizes, input)
            setQuery({ color: selectedColors, shape: selectedShapes, size: selectedSizes, q: input })
            dispatch(getPlanets(queryParams))
        }
    }


    return (
        <div>
            <SearchBar input={input} setInput={setInput} handleSearchKeyPress={handleSearchKeyPress} />
            <div style={{ marginTop: '80px', width: '80%', margin: 'auto' }} >
                <div style={{ border: '1px solid black', padding: '10px', display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
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
                    <div style={{ marginLeft: '50px' }}>
                        <hr width="1" size="500" />
                    </div>
                    <div >
                        {
                            isLoading ? <Loading /> : Planet?.map((planet) => {
                                return <ListCard key={planet.id} planet={planet} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default List