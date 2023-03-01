import moment from "moment";
import { Link } from "react-router-dom";
import user from "../images/no-image.png";

const Post = (props) => {
    const { id, name, post, time, likes, replies } = props;
    const value = parseInt(time);
    return ( 
        <div className="post">
            <div className="post__col-1 flex">
                <div className="post__info flex">
                    <div className="post__image">
                        <img src={user} alt="user" />
                    </div>
                    <div className="post__deets">
                        <p className="post__name">{name}</p>
                        <p className="post__date">{moment(value).format("MMM DD")} &bull; {moment(value).format("hh:mm")}</p>
                    </div>
                </div>
                <div className="post__modal">
                    <span className="post__dots">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                    </span>
                    <div className="post__list flex">
                        <span className="post__item post--junk flex">
                            <i className="bx bx-trash"></i> Trash
                        </span>
                        <span className="post__item post--edit flex">
                            <i className="bx bx-edit"></i> Edit
                        </span>
                    </div>
                </div>
            </div>
            <div className="post__col-2">{post}</div>
            <div className="post__col-3 flex">
                <div className="post__ flex">
                    <span className="post__like flex">
                        <i className="bx bx-like"></i> {likes}
                    </span>
                    <span className="post__mesg flex">
                        <i className="bx bx-message-dots"></i> {replies.length}
                    </span>
                </div>
                <Link className="post__send" to={`/post/${id}`}>
                    <i className="bx bx-send"></i>
                </Link>
            </div>
        </div>
     );
}
 
export default Post;