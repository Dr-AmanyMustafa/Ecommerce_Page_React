import { useState } from 'react';
import { Link } from "react-router-dom"
import './Navbar2.css';

function App(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleDeleteItems = () => {
    return props.setCartCount(0);
  };

  // CHECKOUT BUTTON IN BASKET
  const handleCheckout = () => {
    setCheckout((prevState) => !prevState);
    props.setCartCount(0);
  };
  return (
    <>
    <nav className="navbar">    
          <div className={isNavOpen ? "hide-title" : " toggle"}>
            <button onClick={toggleNav} className="nav-toggle ">
            ☰
            </button>            
              <Link  to="/"><img className="logo" src="../../../public/images/logo.svg" alt="logo" /> </Link>           
        </div>
        <ul className={isNavOpen ? "nav-link hide-logo  " : " nav-links"}>
        <li
            onClick={toggleNav}
              // close btn to appear only on small device
            className={isNavOpen ? "nav-link " : "nav-link hide-closebtn "}
          >
            <button className="close-btn">
              <img src="./images/icon-close.svg" alt="close navbar" />
            </button>
          </li>

            <Link  to="/"><img className={isNavOpen ? "logo3" : "logo2"} src="../../../public/images/logo.svg" alt="logo" /> </Link>           
            <li className="nav-link"><Link  to="/page1">Collections</Link></li>
            <li className="nav-link"><Link  to="/page2">Men</Link></li>
            <li className="nav-link"><Link  to="/page3">Women</Link></li>            
            <li className="nav-link"><Link  to="/page4">About</Link></li>            
            <li className="nav-link"><Link  to="/page5">Contact</Link></li>
        </ul>
        <ul className={
          isNavOpen
          // to handle the position of cart and avatar after opening the sub links container
            ? "secondary-links secondary-links-align"
            : "rightSide"
        }>
        <button onClick={toggleCart} className="cart-toggle">
          <p className={props.cartCount ? "cart-count" : "hide"}>
            {props.cartCount}
          </p>
          <img src="../../../public/images/icon-cart.svg"></img> 
            </button>
             <div >
              {isCartOpen == true ?
              (
                <> 
                <div className='cart-container'>
                  <h2 className='cart-title'>Cart</h2>
                  <div className={
                   props.cartCount ? "cart-items basket-layout" : "cart-items"
                    }>
                  {props.cartCount ? (
                      <div className="checkout-items">
                        <div className="item">
                            <img 
                              src="./images/image-product-1-thumbnail.jpg"
                              alt="checkout product"
                            />
                            <div className="item-desc">
                              <p>Fall Limited Edition Sneakers</p>
                              <p>
                                $125 x {props.cartCount}{" "}
                                <span className="total">
                                  {" "}
                                  - Total: ${125 * props.cartCount}
                                </span>
                              </p>
                            </div>
                            <img
                              className="delete-btn"
                              src="./images/icon-delete.svg"
                              alt="delete"
                              onClick={handleDeleteItems}
                            />
                        </div>
                        <button className="checkout-btn" onClick={handleCheckout}>
                          Checkout
                        </button>
                      </div>
                              ) : (
                      <p>{checkout ? "Checkout successful!" : "Your cart is empty"}</p>
                    )}
                  </div>
                  <div className='cart-items'>
                  </div>
                </div>
                          
              </>
              ) : (null) }
              </div>                   
            <li ><Link className="RightNav" to="/page7"><img src="../../../public/images/image-avatar.png" className="avatar"></img></Link></li>            
        </ul> 
    </nav>
        <div className="line"></div>
        </>
  );
}
export default App;
