import Input from '../../components/Input'
import './Price.css'

export default function Price({ selectRadioInputs }) {
    return <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test3" value={"All"} />
            <span className="checkmark"></span>All
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test3" value={50} />
            <span className="checkmark"></span>$0 - $50
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test3" value={100} />
            <span className="checkmark"></span>$50 - $100
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test3" value={150} />
            <span className="checkmark"></span>$100 - $150
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test3" value={200} />
            <span className="checkmark"></span>Over $150
        </label>

    </div>
}
