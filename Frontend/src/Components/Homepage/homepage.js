import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import { Profile } from "../Profile";

const Homepage = (props) => {
  const navigate = useNavigate();
  const user = props.userdata;

  return (
    <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems:'center',
    //   }}
    >
      

      <Profile user={user} />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          {" "}
          <h4>Logout</h4>{" "}
        </button>
      </div>
    </div>
  );
};

export default Homepage;
