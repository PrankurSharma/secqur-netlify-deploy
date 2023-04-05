import { useEffect } from "react";

function Navbar({ data }) {
    var ctrFem = 0, ctrMal = 0;
    ctrMal += data.filter((val) => {
        return val.Gender === "Male";
    }).length;
    ctrFem += data.filter((val) => {
        return val.Gender === "Female";
    }).length;
    
    return (
        <div className='navbar'>
            <img src='/brand.jpg' className="brand"/>
            <div className="number">
                <ul>
                    <li className="mal"> {ctrMal} </li>
                    <li className="fem"> {ctrFem}  </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;