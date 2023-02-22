import { Navigate } from 'react-router-dom';

const ProtectRoute = ({tokenConfirm, children}) => {
    if(!tokenConfirm()){
        return <Navigate to="/" replace />
    }
    return children
}
 
export default ProtectRoute;