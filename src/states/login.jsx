
//
// // import NameChanger from "../component/namechanger";
// // import Headboy from "../component/headboy";
// // import Secondcomponent from "../component/secondcomponent";


import { useState } from "react";
import Thirdcomponent from "./thirdcomponent";
import State from "./states1";


// // import Header from "../component/Header";

// const Login = () => {
//   const [data, setData] = useState("monu");
//     console.log(data)
// //   const [joy,setJoy] = useState("home");
//   //   console.log(data,"cvvcx")
    const Login = ()=>{
        const[data, setData] = useState("singh")
        // console.log(data)
       
//   return (
//     <div>
//       {/* <p>my name is </p> */}
//       {/* <Header/> */}
//       {/* <NameChanger data={data} setData={setData}/> */}
//       {/* <Headboy joy={joy} setJoy={setJoy} data={data} setData={setData} /> */}
//       {/* <Thirdcomponent data={data} setData={setData} /> */}

//       {/* <Secondcomponent/> */}
      
//     </div>
//   );
    return(
        <div>
          <State data={data}/>
           
            {/* <Thirdcomponent data ={data} setData ={setData}/> */}
        </div>
    )
};
export default Login;
