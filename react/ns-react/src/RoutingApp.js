import { Route, Link, NavLink, useParams, Switch } from "react-router-dom";

function WelcomePage(props) {
    return (
        <div>
            <p>Welcome to welcome page.</p>
            <Link to="/welcome/new-user"> I am a new user </Link>
            <Route path="/welcome/new-user">
                <p>Welcome new User!</p>
            </Route>
        </div>
    );
}

function MainHeader(props) {
    return (
        <div className="nav">
            <ul>
                <li><NavLink to="/welcome" activeClassName="selected">Welcome</NavLink></li>
                <li><NavLink to="/products" activeClassName="selected">Products</NavLink></li>
            </ul>
        </div>
    );
}

function Products(props) {
    return (
        <div>
            <div>Have a look at our latest products.</div>
            <ul>
                <li><Link to="/products/book">Book</Link></li>
                <li><Link to="/products/laptop">Laptop</Link></li>
                <li><Link to="/products/iphone">iPhone</Link></li>
            </ul>
        </div>
    );
}

function ProductDetails(props) {

    const params = useParams();
    console.log(params);

    return (
        <section>
            <h3>Details</h3>
            <p>{params.product}</p>
        </section>
    );
}

function RoutingApp(props) {
 
    return (
        <div className="root-div">
            <MainHeader />
            <Switch>

                <Route path="/welcome">
                    <WelcomePage />
                </Route> 

                {/* /products/book */}

                <Route path="/products" exact>    
                    <Products />
                </Route>

                <Route path="/products/:product"> 
                    <ProductDetails />
                </Route>

                <Route path="*">
                    404 Not Found
                </Route>

            </Switch>

            {/* localhost:3000/welcome */}
        </div>
    );

    // /product-details/book -> product = book
    // /product-details/laptop -> product = laptop

}

export default RoutingApp;

