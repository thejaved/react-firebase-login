import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { db } from "../../../firebase";
import isUser from "../../config/isUser";

const Profile = () => {
  const [data, setData] = useState({});

  const getUserData = async () => {
    const res = await getDoc(doc(db, "users", isUser));
    setData(res.data());
  };
  const logOut = () => {
    swal({
      title: "Are you sure?",
      text: "You Wan't to logout!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! You are now logout! 🙁", {
          icon: "success",
        }).then(() => {
          window.location.replace("/");
        });
        sessionStorage.removeItem("login");
      } else {
        swal("Nice 🙂, You are safe to logout!");
      }
    });
  };

  useEffect(() => {
    getUserData();
    if (!isUser) {
      window.location.replace("/");
    }
  }, []);
  return (
    <div className="Profile center">
      <div className="profile_inner">
        <div className="logout_button">
          <button onClick={logOut}>Logout</button>
        </div>
        <div className="profile_image_content center">
          <div className="profile_image">
            <img
              src="https://cdn.pixabay.com/photo/2021/03/30/08/06/easter-eggs-6136257_960_720.jpg"
              alt="profile"
            />
          </div>
        </div>
        <div className="user_details">
          <div className="user_name">
            <strong>
              FullName:- {data.firstName} {data.lastName}
            </strong>
          </div>
          <div className="user_email">Email:- {data.email}</div>
          <div className="user_password">Password:- {data.password}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
