import moment from "moment";
import user from "../images/no-image.png";

const Board = (props) => {
    const { name, post, time } = props;
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
            </div>
            <div className="post__col-2">{post}</div>  
        </div>
     );
}
 
export default Board;