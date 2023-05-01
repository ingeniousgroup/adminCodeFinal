import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
function ProtectedRoute({children}){
   const {currentAdmin}= useSelector((state)=>state.admin);
   if(!currentAdmin)
   return <Navigate to="/signIn"/>;
   return children;
}
export default ProtectedRoute;