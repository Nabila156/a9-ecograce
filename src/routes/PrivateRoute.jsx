import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span class="loading loading-ring loading-xs"></span>
            <span class="loading loading-ring loading-sm"></span>
            <span class="loading loading-ring loading-md"></span>
            <span class="loading loading-ring loading-lg"></span></div> 
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>

};

export default PrivateRoute;