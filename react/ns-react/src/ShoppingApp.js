import { useContext, useState } from "react";
import AuthContext from "./auth-context";

function Login(props) {
    return (
        <div>
            <p>LOGIN</p>
            <button onClick={() => props.loginHandler(true)}>Login</button>
        </div>
    );
}

function Home() {
    return (
        <div className="home">HOME</div>
    )
}

function NavMenuHook() {
    const context = useContext(AuthContext);
    return (
        <div className="nav-menu">
            {context.isLoggedIn && <a>Home</a>}
            {context.isLoggedIn && <a>Profile</a>}
            {context.isLoggedIn && <button onClick={() => context.loginHandler(false)}>Logout</button>}

            { !context.isLoggedIn && <button onClick={() => context.loginHandler(true)}>LOGIN</button> }
        </div>
    );
}

function NavMenu() {
    return (
        <AuthContext.Consumer>
            {
                (context) => {
                    return (
                        <div className="nav-menu">
                            {context.isLoggedIn && <a>Home</a>}
                            {context.isLoggedIn && <a>Profile</a>}
                            {context.isLoggedIn && <button onClick={() => context.loginHandler(false)}>Logout</button>}

                            { !context.isLoggedIn && <button onClick={() => context.loginHandler(true)}>LOGIN</button> }
                        </div>
                    );
                }
            }
        </AuthContext.Consumer>
    );
}

function Nav(props) {
    return (
        <div className="nav">
            <span>A web page</span>
            <NavMenu />
        </div>
    );
}

function ShoppingApp(props) {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (loggedIn) => {
        setLoggedIn(loggedIn);
    }

    return (
        <AuthContext.Provider value={ {isLoggedIn: loggedIn, loginHandler: handleLogin} }>
            { <Nav /> }
            { loggedIn && <Home /> }
        </AuthContext.Provider>
    );
}

export default ShoppingApp;

