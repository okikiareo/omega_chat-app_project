import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
    const data = await request.formData();
    const user = {
        name: "Guest user",
        email: data.get("email"),
        password: data.get("password")
    }
    console.log(user);
    return redirect("/");
}

export default loginAction;