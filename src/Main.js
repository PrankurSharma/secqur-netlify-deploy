import { useState } from "react";
import Events from "./Events";
import UserInfo from "./UserInfo";
import Navbar from "./Navbar";

function Main() {
    const [details, set_details] = useState({});
    const [imgUrl, set_imgUrl] = useState("");
    const [data, set_data] = useState([]);
    const [filterData, set_filterData] = useState([]);

    return (
        <>
            <Navbar data={filterData.length === 0 ? data : filterData}/>
            <div className="main">
                <div className="info">
                    {imgUrl.length > 0 && <UserInfo details={details} imgUrl={imgUrl}/>}
                </div>
                <div className="eventlist">
                    <Events set_details={set_details} set_imgUrl={set_imgUrl} data={data} set_data={set_data} filterData={filterData} set_filterData={set_filterData}/>
                </div>
            </div>
        </>
    );
}

export default Main;