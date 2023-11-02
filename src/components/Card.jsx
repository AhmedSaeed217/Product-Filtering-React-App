import toast from 'react-hot-toast'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

export default function Card({ product, addWishlist }) {
    let { title, img, category, color, company, newPrice, prevPrice, reviews, star } = product
    return <section className="card">
        <img src={img} alt="shoe" className='card-img' />
        <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <h4 className="card-brand">{company}</h4>
            <div className="card-reviews">
                {star}
                {star}
                {star}
                {star}
                <span className="total-reviews">{reviews}</span>
            </div>
            <div className="card-price">
                <div className="price">
                    <del>{prevPrice}</del> {newPrice}
                </div>
                <div className="bag">
                    <BsFillBagHeartFill onClick={(event) => {

                        addWishlist(title, event)
                    }} className='bag-icon' />

                </div>
            </div>
        </div>
    </section>
}
