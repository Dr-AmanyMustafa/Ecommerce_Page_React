import "./Counter.css"
import {useState} from 'react'



export default function Counter(props) {
   
const [count, setCount] = useState(0);   

const minus = () => {
  setCount((prevCount) => {
    if (count > 0) {
      return prevCount - 1;
    } else {
      return setCount(0);
    }
  });
};
const plus = () => {
  return setCount((prevCount) => prevCount + 1);
};
const handleInputChange = (e) => {
  setCount(e.target.value);
};

const handleAddToCart = (e) => {
  e.preventDefault();
  props.setCartCount(count);
  setCount(0);
};

return (
    <>    
        <div className="counter">
        <img src={"../../../public/images/icon-minus.svg"} alt="minus" className="minus" onClick={minus}/>
        <input
            type="number"
            name="number"
            value={count}
            id="number"
            onChange={handleInputChange}
            min="0"
        />
        <img src={"../../../public/images/icon-plus.svg"} alt="plus" className="plus" onClick={plus} />
        </div>
        <div className='cartContainer'>
            <img src="../../../public/images/icon-cart.svg" alt="cartImg" />
            <button className='cartbtn' onClick={handleAddToCart}>Add to Cart</button>
        </div> 
                
    </>
)

}