import logo from "../images/logo-color.svg";

const Intro = () => {
    return ( 
        <section className="loader flex">
            <div className="loader__wrap flex">
                <img className="loader__logo" src={logo} alt="Yappie" />
                <div className="loader__text">Yappie</div>
            </div>
        </section>
     );
}
 
export default Intro;