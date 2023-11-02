import './Sidebar.css'
import { BsFillCartDashFill } from 'react-icons/bs'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
export default function Sidebar({ selectRadioInputs }) {
    return <>
        <section className="sidebar">
            <div className="logo-container">
                <h1><BsFillCartDashFill /></h1>
            </div>

            <Category selectRadioInputs={selectRadioInputs} />
            <Price selectRadioInputs={selectRadioInputs} />
            <Colors selectRadioInputs={selectRadioInputs} />
        </section>


    </>
}
