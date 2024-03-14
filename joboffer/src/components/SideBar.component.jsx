import { useState } from "react"

const SideBar = () => {
    const [colors, setColors] = useState({
        red: false,
        green: false,
        blue: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setColors((prevColors) => ({
            ...prevColors,
            [name]: checked
        }))
    }
    console.log(colors);

    return (
        <div className='sidebar'>
            <div className="color-filter">
                <h3>Color</h3>
                <input type="checkbox"
                    name="red"
                    
                    checked={colors.red}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="">Red</label>
                <input type="checkbox"
                    name="green"
                    checked={colors.green}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="">Green</label>
                <input type="checkbox"
                    name="blue"
                    checked={colors.blue}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="">Blue</label>
            </div>
            <div className="shape-filter">
                <h3>Shape</h3>
                <input type="checkbox" />
                <label htmlFor="">Small</label>
                <input type="checkbox" />
                <label htmlFor="">Medium</label>
                <input type="checkbox" />
                <label htmlFor="">Large</label>
            </div>

            <div>
                <h3>Size</h3>
                <input type="checkbox" />
                <label htmlFor="">Round</label>
                <input type="checkbox" />
                <label htmlFor="">Oval</label>
            </div>

        </div>
    )
}

export default SideBar