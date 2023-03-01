import { Link, useLoaderData, Form, useActionData } from "react-router-dom";
import user from "../images/no-image.png";
import Board from "../components/Board";
import Reply from "../components/Reply";
import Message from "../components/Message";

const Comments = () => {
    const data = useLoaderData();
    const info = useActionData();
    const { id, replies } = data;
    return ( 
        <section className="comments">
            <div className="banner">
                <div className="banner--wrap wrap flex">
                    <Link className="comments__arrow" to="/">
                        <i className='bx bx-arrow-back'></i>
                    </Link>
                    <span className="comments__value">Comment</span>
                </div>
            </div>
            <div className="column">
                <div className="comments__column column--wrap wrap flex">
                    { info && info.error && <Message type="danger" detail={info.error} />}
                    <div className="board">
                        <Board {...data} />
                    </div>
                    {replies.map((reply, index) => (
                        <Reply key={index} {...reply} />
                    ))}
                </div>
            </div>
            <div className="footer">
                <div className="footer__wrap wrap">
                    <div className="footer__field flex">
                        <div className="footer__image">
                            <img src={user} alt="user" />
                        </div>
                        <Form method="post" action={`/post/${id}`}>
                            <div className="footer__input flex">
                                <textarea
                                    rows={1}
                                    className="footer__area"
                                    type="text"
                                    name="comment"
                                    maxLength={300}
                                    placeholder="Add a comment..."
                                />
                                <button className="footer__button">Post</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Comments;