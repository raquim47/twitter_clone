import { Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Routes>
      <Route>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home userObj={userObj}/>}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
          </>
        ) : (
          <Route exact path="/" element={<Auth />}></Route>
        )}
      </Route>
    </Routes>
  );
};

export default AppRouter;
