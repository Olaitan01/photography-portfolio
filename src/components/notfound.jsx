 import { NavLink } from "react-router-dom";
 function NotFound(){
    return<div className=" flex justify-center pt-[15em] flex-col  items-center text-center text-[1rem] text-headerGrey font-extrabold">
      <h1 className="text-[2rem]">Page Not Found 🥺</h1>
      <NavLink to={'/'} className="underline text-royalBlue pt-5 cursor-pointer">Go back To Home Page</NavLink>
    </div>
    
 }

 export default NotFound;