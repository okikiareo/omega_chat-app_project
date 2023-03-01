import { Link, useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import logo from "../images/logo-color.svg";

const Posts = () => {
    const posts = useLoaderData();
    return ( 
        <section className="posts">
            <div className="posts__banner banner">
                <div className="posts__wrap banner--wrap wrap flex">
                    <div className="posts__logo flex">
                        <img className="posts__brand" src={logo} alt="logo" />
                        <div className="posts__title">Yappie</div>
                    </div>
                    <Link className="posts__link btn" to="/enter">Add Posts</Link>
                </div>
            </div>
            <div className="posts__column column">
                <div className="column--wrap wrap flex">
                    {posts.map((post, index) => (
                        <Post key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Posts;