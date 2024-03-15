import React from 'react'

const SearchBar = ({ input, setInput }) => {

    return (
        <div style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search" />
        </div>
    )
}

export default SearchBar