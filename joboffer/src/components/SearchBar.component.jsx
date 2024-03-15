import React from 'react'
import image from './iconmonstr-search-thin-64.png'
const SearchBar = ({ input, setInput, handleSearchKeyPress }) => {

    return (
        <div className="search-bar" >



            <input type="text"
                value={input}
                onKeyDown={handleSearchKeyPress}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search" />
            {/* <span> */}
            {/* <img src={image} alt="" /> */}

            {/* </span> */}
        </div>
    )
}

export default SearchBar