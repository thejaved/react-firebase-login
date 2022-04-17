import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, db } from "../../../firebase";
import swal from "sweetalert";
import isUser from "../../config/isUser";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [isLoginItem, setIsLoginItem] = useState(true);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        userInput.email,
        userInput.password
      );
      sessionStorage.setItem("login", res.user.uid);
      swal("Welcome Back!", "You clicked the button!", "success").then(() => {
        window.location.replace("/");
      });
    } catch (error) {
      if (error) {
        swal("Wrong!", "email or password!", "warning");
      }
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userInput.email,
        userInput.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...userInput,
      });
      sessionStorage.setItem("login", res.user.uid);
      swal(
        `Welcome ${userInput.firstName}`,
        "You clicked the button!",
        "success"
      ).then(() => {
        window.location.replace("/");
      });
    } catch (error) {
      if (error) {
        swal(`email is already exist!`, "You clicked the button!", "warning");
      }
    }
  };

  useEffect(() => {
    if (isUser) {
      window.location.replace("/");
    }
  }, []);

  return (
    <>
      {isLoginItem ? (
        <div className="Login center">
          <div className="form_container">
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                name="myemail"
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="mypassword"
                value={userInput.password}
                onChange={(e) =>
                  setUserInput({ ...userInput, password: e.target.value })
                }
              />
              <span>
                Don't have an account -{" "}
                <a onClick={() => setIsLoginItem(!isLoginItem)}>
                  Register
                </a>
              </span>
              <button>Login</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="Register center">
          <div className="form_container">
            <form onSubmit={handleRegister}>
              <div className="userName_content">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) =>
                    setUserInput({ ...userInput, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setUserInput({ ...userInput, lastName: e.target.value })
                  }
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                name="myemail"
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="mypassword"
                value={userInput.password}
                onChange={(e) =>
                  setUserInput({ ...userInput, password: e.target.value })
                }
              />
              <span>
                Have a account -{" "}
                <a onClick={() => setIsLoginItem(!isLoginItem)}>
                  Login
                </a>
              </span>
              <button>Register</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
