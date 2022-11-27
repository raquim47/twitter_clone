import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <div
        className="wrapper"
      >
        <Routes>
          <Route>
            {isLoggedIn ? (
              <>
                <Route
                  exact
                  path="/"
                  element={<Home userObj={userObj} />}
                ></Route>
                <Route
                  exact
                  path="/profile"
                  element={
                    <Profile userObj={userObj} refreshUser={refreshUser} />
                  }
                ></Route>
              </>
            ) : (
              <Route exact path="/" element={<Auth />}></Route>
            )}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
