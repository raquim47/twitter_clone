import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  // const onClickNav = (route) => navigate(route); 
  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/profile")}>Profile</li>
      </ul>
    </nav>
  );
};
export default Navigation;
