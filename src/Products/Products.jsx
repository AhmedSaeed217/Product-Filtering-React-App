import './Products.css'

import Card from '../components/Card'

export default function Products({ results, addWishlist }) {
    return <>
        <section className='card-container'>
            {results.map((product, index) => <Card key={index} product={product} addWishlist={addWishlist} />)}



        </section>


    </>
}
