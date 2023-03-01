import moment from "moment";
import user from "../images/no-image.png";

const Reply = (props) => {
    const { name, time, reply: text } = props;
    const timeSplit = moment(time).fromNow(true);

    return ( 
        <div className="reply">
            <div className="reply__box flex">
                <div className="reply__image">
                    <img src={user} alt="user" />
                </div>
                <div className="reply__deets flex">
                    <div className="reply__info">    
                        <span className="reply__name">{name}</span>
                        <span className="reply__text">{text}</span>
                    </div>
                    <div className="reply__action flex">
                        <span className="reply__time">
                            {timeSplit}
                        </span>
                        <span className="reply__like flex">
                            <i className="bx bx-like"></i> 0
                        </span>
                        {/* <span className="reply__"></span> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Reply;