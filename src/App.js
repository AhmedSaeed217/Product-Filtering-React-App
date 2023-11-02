import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav'
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import data from './db/data';
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter } from 'react-router-dom';
function App() {



  const [selectedCategory, setSelectedCategory] = useState(null);
  let [wishlist, setWishlist] = useState([]);
  let [wishlistNum, setWishlistNum] = useState(0);

  // console.log(data)

  //Start Input Search Filter//
  const [searchWord, setSearchWord] = useState("")

  const handleInputChange = event => {
    setSearchWord(event.target.value);
    // console.log(searchWord);

  }

  const filteredItems = data.filter((product) => product.company.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()) || product.title.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()))

  //End Input Search Filter//

  const selectCategory = (event) => {
    setSelectedCategory(event.target.value)
  }

  const selectRadioInputs = (event) => {
    setSelectedCategory(event.target.value)
    // console.log(event.target.value)
  }

  function addWishlist(title, event) {
    let status = "notAdded"
    data.map((product) => {

      if (product.title === title) {
        if (wishlist.includes(product) === true) {
          toast.success("Product removed from your favorites")
          wishlist.pop(product);
          event.target.style.color = "#535353";
          setWishlistNum(wishlist.length);
        } else {
          wishlist.push(product);
          event.target.style.color = "red";
          toast.success("Product added to your favorites");
          setWishlistNum(wishlist.length);

        }
      }


    })
    console.log(wishlist)

  }


  function filterData(searchWord, selected) {
    let filteredProducts = data;
    if (searchWord) {
      filteredProducts = filteredItems
    }

    if (selected) {
      if (selected === "All") {
        filteredProducts = filteredProducts
      } else {
        filteredProducts = filteredProducts.filter((product) =>
          product.company === selected || product.category === selected || product.color === selected || product.newPrice === selected

        )
        // console.log(`Selected : ${selected}`)
      }
    }


    return filteredProducts
  }

  const results = filterData(searchWord, selectedCategory);



  return <>
    <Toaster />
    <Sidebar selectRadioInputs={selectRadioInputs} />
    <Nav handleInputChange={handleInputChange} wishlistNum={wishlistNum} />
    <Recommended selectCategory={selectCategory} />
    <Products results={results} addWishlist={addWishlist} />

  </>


}

export default App;
