import axios from "axios";

const loadPosts = async () => {
    const posts = await axios({ 
        method: "get", 
        url: "http://localhost:4000/posts"
    });

    return posts.data;
}

export default loadPosts;