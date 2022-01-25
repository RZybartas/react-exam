import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';


export const Authented = ({children}) => {
    const auth = useAuth();

    if (!auth.token) {
        return <Navigate to='/login' />;
    }

    return children;
}