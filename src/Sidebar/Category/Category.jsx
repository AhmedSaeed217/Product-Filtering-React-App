import './Category.css'
export default function Category({ selectRadioInputs }) {
    return <div>
        <h2 className="sidebar-title">Category</h2>

        <div>
            <label className='sidebar-label-container'>
                <input onChange={selectRadioInputs} type="radio" name="test" value={'All'} />
                <span className="checkmark"></span>All
            </label>

            <label className='sidebar-label-container'>
                <input onChange={selectRadioInputs} type="radio" name="test" value={"sneakers"} />
                <span className="checkmark"></span>Sneakers
            </label>

            <label className='sidebar-label-container'>
                <input onChange={selectRadioInputs} type="radio" name="test" value={"flats"} />
                <span className="checkmark"></span>Flats
            </label>

            <label className='sidebar-label-container'>
                <input onChange={selectRadioInputs} type="radio" name="test" value={"sandals"} />
                <span className="checkmark"></span>Sandals
            </label>

            <label className='sidebar-label-container'>
                <input onChange={selectRadioInputs} type="radio" name="test" value={"heels"} />
                <span className="checkmark"></span>Heels
            </label>

        </div>


    </div>
}
