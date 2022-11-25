import { useEffect, useState } from "react";
import { authService } from "fbase";
import { onAuthStateChanged } from "firebase/auth";
import AppRouter from "components/Router";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } 
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} />
      ) : (
        "initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} twiter</footer>
    </>
  );
}

export default App;
