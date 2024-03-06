import { useState } from "react";
import State from "./states1";

// this is child file
const Thirdcomponent = (props) => {
  console.log(props);
  // 1st destructure
  const a = props.data;
  // 2nd destructure
  const { data, setData } = props;
  console.log(data);
  const ab = (a) => {
    console.log(a);
    setData("cartoon");
  };
  return (
    <div>
      <button onClick={ab}>touch</button>

      <p>{`my name is   ${data} `}</p>
      <State  yash={props}/>
      {/* <button onClick={}>tak a shot</button> */}
    </div>
  );
};

export default Thirdcomponent;
