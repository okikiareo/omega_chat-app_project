import axios from "axios";

const loadPost = async ({ params }) => {
    const { id } = params;
    const post = await axios({ 
        method: "get", 
        url: "http://localhost:4000/posts/" + id
    });
    return post.data;
}

export default loadPost;