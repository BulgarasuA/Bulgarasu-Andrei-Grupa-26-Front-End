import './Layout.css';
import { Link } from "react-router-dom";
function Layout(props) {

    return (
        <div>
            <header>
                <title>My Shop</title>
                <h1>My Shop</h1>
                <nav>
                    <ul>
                        <li> <Link to="/home">Home</Link></li>
                        <li> <Link to="/cart">Cart</Link></li>
                    </ul>
                </nav>
            </header>
            <main id="app-main-content">
                {props.children}
            </main>
        </div>
    )
};

export default Layout;