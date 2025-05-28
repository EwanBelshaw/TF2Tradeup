import { useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const CallBackPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (isAuthenticated) {
      const redirectPath = localStorage.getItem("redirectPath");
      if (redirectPath) {
        localStorage.removeItem("redirectPath");
        navigate(redirectPath);
      }
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <p>Processing login</p>;
  }
  return <p>Finishing login</p>;
};
export default CallBackPage;
