import { Link } from 'react-router-dom'
import './Nav.css'
import { AiFillHeart } from 'react-icons/ai'
export default function Nav({ handleInputChange, wishlistNum }) {
    return <nav>
        <div className="nav-container">
            <input onKeyUp={handleInputChange} type="text" className='search-input' placeholder='Enter shoes name or shoes brand' />
        </div>

        <div className="profile-container">

            <a href="#">
                <AiFillHeart className='nav-icon heartIcon' />
                <span style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>{wishlistNum}</span>
            </a>




        </div>



    </nav>
}
