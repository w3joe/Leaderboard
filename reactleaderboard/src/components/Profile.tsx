import React from "react";
import avatar1 from "../images/avatar2.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";
import { Leaderboard } from "./database";

export default function Profile({ Leaderboard }: { Leaderboard: any }) {
  return Item(Leaderboard);
}


function Item(data: any) {
  let navigate = useNavigate();
  return (
    <>
      {data.map((value: any, index: number) => (
        //<Fade in={true} timeout={1000 * index}> //iterative fade in
        <div className="ProfileContainer">
          <div className="flex left">
            <img src={value.img} alt="" />
          </div>
          <div className="flex center">
            <h3>{value.name}</h3>
          </div>
          <div className="flex right">
            <Button variant="contained" onClick={buttonClicked}>
              View Profile
            </Button>
          </div>
        </div>
        //</Fade>
      ))}
    </>
  );

  function buttonClicked(e: React.MouseEvent<HTMLButtonElement>) {
    navigate("/profile");
  }
}
function componentDidMount() {
  throw new Error("Function not implemented.");
}
