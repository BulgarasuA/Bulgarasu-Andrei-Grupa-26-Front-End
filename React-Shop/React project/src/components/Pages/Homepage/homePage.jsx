
import "./homePage.css";
import ProductList from './produse.json';


const cart = [
    {
        id: 1,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        quantity: 2,
    }

]
function HomePage() {
    const onClickToCart = function (product) {
        console.log("Added to cart = " + product);
        const existProduct = cart.find((cartProduct) => {
            return cartProduct.id === product.id;
        })
        console.log('existProduct = ' + existProduct)
        if (existProduct) {
            existProduct.quantity += 1;

        } else {
            product.quantity = 1;
            cart.push(product);
        }
        console.log('Current cart = ' + cart);
        console.log(existProduct.quantity)
    }
    return (
        <>
            <h1 className='home-title'>Home Page</h1>
            <div className="product-list">
                <div className="product">
                    {ProductList.map((productObject) => {
                        return (
                            <div className='products'>
                                <p>{productObject.title}</p>
                                <img src={productObject.image} alt="" />
                                <p>{productObject.price}  RON</p>
                                <p>"{productObject.description}"</p>
                                <button onClick={() => {
                                    onClickToCart(productObject);
                                }}>Add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default HomePage;

