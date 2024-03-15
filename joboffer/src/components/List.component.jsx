import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanets } from '../Redux/planetRedux/action'
import { getColors } from '../Redux/colorRedux/action'
const List = () => {

    const { Planet, isLoading, isError } = useSelector(state => {
        return state.PlanetReducer
    })
    const dispatch = useDispatch()


    const { colors } = useSelector(state => {
        return state.colorReducer
    })
    console.log(colors);


    useEffect(() => {
        dispatch(getPlanets())
        dispatch(getColors())
    }, [])

    return (
        <div>
            <h1>List</h1>
        </div>
    )
}

export default List