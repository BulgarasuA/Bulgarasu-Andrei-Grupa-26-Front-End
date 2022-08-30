import './cartpage.css'
import HomePage from '../Homepage/homePage';
function Cartpage() {

    return (
        <>
            <h1 class='h1-about'>Cart Page </h1>
            <div className="product-list"> <div className="product"> <p>WD 2TB Elements Portable External Hard Drive - USB 3.0 </p> <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="" /> <p>64  RON</p> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> <button>Add to cart</button> </div> </div>
        </>
    )

};
export default Cartpage;
