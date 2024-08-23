import "./Details.css"
import ImgSide from '../ImgSide/ImgSide'
import Counter from '../Counter/Counter'
import Navbar2 from '../Navbar/Navbar2'
import { useState } from "react";



export default function Details() {
    const [cartCount, setCartCount] = useState(0);

    return (
      <>
        <div className="nav2">
            <Navbar2 cartCount={cartCount} setCartCount={setCartCount} ></Navbar2>
        </div>
        <div className="MainContainer">            
            <div>
                <ImgSide></ImgSide>
            </div>
            <div className='container'>
                <h3 className="title">Sneaker Company</h3>
                <h1 className="title2">Fall Limited Edition Sneakers</h1>
                <p className="paragraph">These low-profile sneakers are your perfect casual wear 
                    companion. Featuring a durable rubber outer sole, 
                    they’ll withstand everything the weather can offer.</p>
                <div className='priceContainer'>
                <span className="price">$125.00</span>
                <span className="sale">50%</span>
                </div>
                <span className="offer"><s>$250.00</s></span><br></br>
                <div className="btnsContainer">
                    <Counter setCartCount={setCartCount} ></Counter>
                </div>
            </div>
        </div>
      </>
    )
};




