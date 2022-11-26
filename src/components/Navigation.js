import { useNavigate } from "react-router-dom";

const Navigation = ({ userObj }) => {
  const navigate = useNavigate();
  // const onClickNav = (route) => navigate(route);
  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/profile")}>{userObj.displayName}'s Profile</li>
      </ul>
    </nav>
  );
};
export default Navigation;
