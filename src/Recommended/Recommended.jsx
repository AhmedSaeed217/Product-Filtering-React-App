import { useEffect } from 'react'
import './Recommended.css'

export default function Recommended({ selectCategory }) {




    useEffect(() => {
        let btns = document.querySelectorAll('.recommended-btns button');
        let buttonsArray = Array.from(btns);
        buttonsArray.forEach((ele) => {
            ele.addEventListener("click", function (e) {
                buttonsArray.forEach((ele) => {
                    ele.classList.remove('clicked');
                })
                e.currentTarget.classList.add('clicked');
            })
        })
    }, [])


    return <>
        <div className=''>
            <h2 className='recommended-title'>Recommended</h2>
            <div className="recommended-btns">
                <button value={"All"} onClick={selectCategory} className='btn clicked'>All Products</button>
                <button value={"Nike"} onClick={selectCategory} className='btn'>Nike</button>
                <button value={"Adidas"} onClick={selectCategory} className='btn'>Adidas</button>
                <button value={"Puma"} onClick={selectCategory} className='btn'>Puma</button>
                <button value={"Vans"} onClick={selectCategory} className='btn'>Vans</button>
            </div>
        </div>



    </>
}
