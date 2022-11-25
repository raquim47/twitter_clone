import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        <Route>
          {isLoggedIn ? (
            <>
              <Route
                exact
                path="/"
                element={<Home userObj={userObj} />}
              ></Route>
              <Route exact path="/profile" element={<Profile />}></Route>
            </>
          ) : (
            <Route exact path="/" element={<Auth />}></Route>
          )}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
