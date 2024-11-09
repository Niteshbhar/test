import { Route, Routes } from "react-router-dom";
import SignUp from "../signup/signUp";
import Login from "../login/login";
import Form from "../components/form";

function Router() {
    return ( <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>  );
}

export default Router;