import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <ul>
        <li onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
        </li>
        <li className="user" onClick={() => navigate("/profile")}>
          <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
          <span style={{ marginTop: 10 }}>
            {userObj.displayName
              ? `${userObj.displayName}'s Profile`
              : "Profile"}
          </span>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
