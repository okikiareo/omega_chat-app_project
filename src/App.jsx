import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Enter from "./pages/Enter";
import Error from "./pages/Error";
import Comments from "./pages/Comments";

// LAYOUTS
import RootLayout from "./layouts/RootLayout";

// LOADERS
import loadPost from "./utils/loaders/loadPost";
import loadPosts from "./utils/loaders/loadPosts";

// ACTIONS
import formAction from "./utils/actions/formAction";
import loginAction from "./utils/actions/loginAction";
import commentAction from "./utils/actions/commentAction";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout />} errorElement={<Error />}>
                <Route
                    index
                    loader={loadPosts}
                    element={<Posts />}
                />
                <Route 
                    path="enter"  
                    action={formAction}
                    element={<Enter />}
                />
                <Route
                    path="post/:id"
                    loader={loadPost}
                    action={commentAction}
                    element={<Comments />}
                />
            </Route>
            <Route path="login" element={<Login />} action={loginAction} errorElement={<Error />}></Route>
        </>
    )
)

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;