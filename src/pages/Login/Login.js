import { useContext, useEffect, useState } from "react";
import "./Login.css";
import "./Modal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Swal from "sweetalert2";

function Login({ checkLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const { setUserInfo } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location: ", location);

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    let user = users.find(
      (item) => item.email == email && item.password == password
    );
    if (user != null) {
      setUserInfo(user);
      switch (location.state?.type) {
        case "wproduct":
          navigate("/products");
          break;
        default:
          navigate("/");
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Email or Password is not valid!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="login">
      <form className="login-container" onSubmit={handleLogin}>
        <h1>Sign in</h1>
        <div className="login-fields">
          <input
            type="text"
            placeholder="User Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" value="Login">
          Continue
        </button>
        <p className="login-login">
          Do not have an account?{" "}
          <span onClick={() => navigate(`/Signup`)}>Sign up here</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
