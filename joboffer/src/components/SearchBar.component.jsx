import React from 'react'

const SearchBar = ({ input, setInput, handleSearchKeyPress }) => {

    return (
        <div style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>
            <input type="text" value={input}
                onKeyDown={handleSearchKeyPress}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search" />
        </div>
    )
}

export default SearchBar