import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanets } from '../Redux/planetRedux/action'
import { getColors } from '../Redux/colorRedux/action'
import { getShapes } from '../Redux/shapesRedux/action'
import { getSizes } from '../Redux/sizeRedux/action'
import ListCard from './ListCard.component'
import SearchBar from './SearchBar.component'
import Loading from './Loading'
import SideBar from './SideBar.component'
import Color from './Color.component'
import Size from './Size.component'
import Shape from './Shape.component'
import './List.style.css'

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
            setQuery({ q: input })
            setInput('')
            dispatch(getPlanets(queryParams))
        }
    }


    return (
        <div>
            <SearchBar input={input} setInput={setInput} handleSearchKeyPress={handleSearchKeyPress} />
            <div className='filter'>
                <div className='filter-child' style={{ border: '1px solid black', display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto' }}>
                    <div className='filter-container' style={{ marginLeft: '20px' }}>
                        <div className='color-filer' >
                            <Color colors={colors} handleColorChange={handleColorChange} selectedColors={selectedColors} />
                        </div>
                        <div className="size-filter">
                            <Size sizes={sizes} handleSizeChange={handleSizeChange} selectedSizes={selectedSizes} />
                        </div>

                        <div className='shape-filter'>
                            <Shape shapes={shapes} handleShapeChange={handleShapeChange} selectedShapes={selectedShapes} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <hr width="1" size="500" />
                    </div>
                    <div style={{ marginRight: '20px' }}>
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