import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <div className="error__wrap column--wrap wrap flex">
                <h1 className="error__value">404</h1>
                <h2 className="error__title">Oops! This page can not be found</h2>
                <p className="error__place">Sorry but the page you are looking for 
                does not exist have been removed or temporarily unavailable. 
                Please also check your network.</p>
                <Link to="/" className="error__button btn">Go to Homepage</Link>
            </div>
        </div>
     );
}
 
export default Error;