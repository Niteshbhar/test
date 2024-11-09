import { Route, Routes } from "react-router-dom";
import SignUp from "../signup/signUp";
import Login from "../login/login";

function Router() {
    return ( <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>  );
}

export default Router;