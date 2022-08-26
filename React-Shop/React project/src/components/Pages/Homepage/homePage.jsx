
import "./homePage.css";
import ProductList from './produse.json';

function HomePage() {
    console.log(ProductList);
    return (
        <>
            <h1 className='home-title'>Home Page</h1>
            <div className="product-list">
                <div className="product">
                    {ProductList.map((product) => {
                        return (
                            <div className='products'>
                                <p>{product.title}</p>
                                <img src={product.image} alt="" />
                                <p>{product.price}</p>
                                <p>"{product.description}"</p>
                                <button>Add to card</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default HomePage;

