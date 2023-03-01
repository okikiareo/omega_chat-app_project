import { useState } from "react";
import logo from "../images/logo-color.svg";
import addr from "../images/icon-addr.svg";
import show from "../images/icon-show.svg";
import hide from "../images/icon-hide.svg";
import { Link, Form } from "react-router-dom";

const Login = () => {
    const [pass, setPass] = useState({
        hidden: true
    });

    const handleToggle = (e) => {
        setPass(state => (
            { hidden: !state.hidden }
        ));
    }

    return (
        <section className="login">
            <div className="login__wrap wrap">
                <div className="login__logo cntr">
                    <img src={logo} alt="logo" />
                </div>
                <div className="login__info">
                    <h1 className="login__title">Welcome Back!</h1>
                    <p className="login__place">New to Yappie?
                        <a className="login__link" href="">Sign up for free</a>
                    </p>
                </div>
                <div className="login__form">
                    <Form method="post" action="">
                        <div className="login__field">
                            <img className="login__descr"
                                src={addr}
                                alt=""
                            />
                            <input className="login__input"
                                type="email" 
                                name="email" 
                                placeholder="Email"
                             />
                        </div>
                        <div className="login__field">
                            <img className="login__descr"
                                src={pass.hidden ? hide : show}
                                alt={pass.hidden ? "hide": "show"}
                                onClick={handleToggle}
                            />
                            <input className="login__input"
                                type={pass.hidden ? "password" : "text"}
                                name="password" 
                                placeholder="Password"
                             />
                        </div>
                        {/* <div className="login__guest">
                            Sign in as a <Link to="/">guest user</Link>
                        </div> */}
                        <button className="login__button btn">Login</button>
                    </Form>
                </div>
            </div>
        </section>
     );
}

export default Login;