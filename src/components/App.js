// import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import Navigation from "components/Navigation";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {isLoggedIn && <Navigation />}
      {init ? <AppRouter userObj={userObj} isLoggedIn={isLoggedIn} /> : "initializing..."}
      <footer>&copy; {new Date().getFullYear()} twiter</footer>
    </>
  );
}

export default App;
