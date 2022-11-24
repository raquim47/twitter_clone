import { authService } from "fbase";
import { useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";
const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  }
  return (
    <>
      <button onClick={onLogOutClick}>LogOut</button>
    </>
  );
};

export default Profile;
