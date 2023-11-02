import Input from '../../components/Input'
import './Colors.css'

export default function Colors({ selectRadioInputs }) {
    return <div>
        <h2 className="sidebar-title color-title">Colors</h2>

        <label className='sidebar-label-container color-title'>
            <input onChange={selectRadioInputs} type="radio" name="test2" value={"All"} />
            <span className="checkmark"></span>All
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test2" value={"black"} />
            <span className="checkmark"></span>Black
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test2" value={"blue"} />
            <span className="checkmark"></span>Blue
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test2" value={"red"} />
            <span className="checkmark"></span>Red
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test2" value={"green"} />
            <span className="checkmark"></span>Green
        </label>

        <label className='sidebar-label-container'>
            <input onChange={selectRadioInputs} type="radio" name="test2" value={"white"} />
            <span className="checkmark"></span>White
        </label>
    </div>
}
