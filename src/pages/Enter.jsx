import { Link, Form, useActionData } from "react-router-dom";
import Message from "../components/Message";

const Enter = () => {
    const data = useActionData();
    return ( 
        <section className="enter">
            <div className="banner">
                <div className="banner--wrap wrap flex">
                    <Link className="enter__arrow" to="/">
                        <i className='bx bx-arrow-back'></i>
                    </Link>
                    <span className="enter__title">New Post</span>
                </div>
            </div>
            <div className="column">
                <div className="enter__col column--wrap wrap flex">
                    { data && data.error && <Message type="danger" detail={data.error} />}
                    <Form method="POST" action="/enter">
                        <textarea
                            name="post"
                            maxLength={300}
                            className="enter__box"
                            placeholder="Write a post"
                         />
                        <button className="enter__button btn">Post</button>
                    </Form>
                </div>
            </div>
        </section>
     );
}
 
export default Enter;