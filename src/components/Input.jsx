export default function Input({ selectRadioInputs }) {
    return <label className='sidebar-label-container'>
        <input value={"All"} onClick={selectRadioInputs} type="radio" name="test" />
        <span className="checkmark"></span>All
    </label>
}
