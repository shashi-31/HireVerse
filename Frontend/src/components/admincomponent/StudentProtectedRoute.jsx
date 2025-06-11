 
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StudentProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    
    if (!user ) {
      navigate("/");  
    }
  }, [user, navigate]);   
 
  if (!user ) {
    return null;   
  }

  return <>{children}</>;   
};

export default StudentProtectedRoute;
