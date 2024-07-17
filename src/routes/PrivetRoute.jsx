import PropTypes from 'prop-types';
import Loader from "../components/Loader/Loader";
import useUser from "../hooks/useUser";
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useUser();
    if (isLoading) return <Loader />
    if (user) return children
    return <Navigate state={location.pathname} to='/login' />
};

PrivetRoute.propTypes = {
    children: PropTypes.node
}

export default PrivetRoute;