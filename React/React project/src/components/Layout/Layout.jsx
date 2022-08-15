import './Layout.css';

function Layout(props) {

    return (
        <div>
            <header>
                <title>My personal blog</title>
                <h1>My Personal blog</h1>
                <nav>
                    <ul>
                        <li><a onClick={function () {
                            props.onPageChange('home')
                            console.log("HomeClicked")
                        }} href="#">Home</a></li>
                        <li><a onClick={function () {
                            props.onPageChange('about')
                            console.log("AboutClicked")
                        }} href="#">About</a></li>


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