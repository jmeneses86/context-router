import { Navigate, Outlet /* useNavigate */ } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
/* import { useEffect } from "react"; */

const LayoutPrivate = () => {
    const { user } = useUserContext();

    /* const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user]);

    return (
        <>
            <Outlet></Outlet>
        </>
    ); */

    return <>{user ? <Outlet></Outlet> : <Navigate to="/"></Navigate>}</>;
};

export default LayoutPrivate;
