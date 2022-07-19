import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
-
      {isLoggedIn
        ? (<>
            <Link to="/subjects">
              <button>Subjects</button>
            </Link>
            <Link to="/profile">
              <button>{user.name}</button>
            </Link>
            <button onClick={logOutUser}>Logout</button>
          </>)
        : 
        (<>
          <Link to="/signup"> <button>Signup</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>)
      }
    </nav>
  );
}

export default Navbar;