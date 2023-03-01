const Message = (props) => {
    const { detail, type } = props;
    return ( 
        <div className={`message flex ${type}`}>
            <span className="message__detail">{detail}</span>
            <span className="message__delete">
                <i className="bx bx-x"></i>
            </span>
        </div>
     );
}
 
export default Message;