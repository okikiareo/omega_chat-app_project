import axios from "axios";
import moment from "moment/moment";
import { nanoid } from "nanoid";
import { redirect } from "react-router-dom";

const formAction = async ({ request }) => {
    const data = await request.formData();   
    const user = {
        post: data.get("post")
    }
    
    if (!user.post) {
        return { error: "Please enter a post" }
    } else {
        const data = await axios
        .post("http://localhost:4000/posts", {
            id: nanoid(),
            name: "Guest User",
            post: user.post,
            time: moment().valueOf(),
            likes: 0,
            replies: []
        });
        console.log(data);
        return redirect("/");
    }
}

export default formAction;