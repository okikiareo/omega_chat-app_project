import axios from "axios";
import moment from "moment";
import { redirect } from "react-router-dom";

const commentAction = async ({ request, params }) => {
    const data = await request.formData();
    const { id } = params;
    const user = {
        comment: data.get("comment")
    }

    if (!user.comment) {
        return { error: "Post cannot be empty" }
    } else {
        const replies = await axios
        .get("http://localhost:4000/posts/" + id);

        const data = await axios
        .patch("http://localhost:4000/posts/" + id, {
            replies: [...replies.data.replies, { 
                name: "Guest User",
                time: moment().valueOf(),
                reply: user.comment
         }]
        });
        console.log(data);
        return redirect("/");
    }
}

export default commentAction;