function UserInfo({ details, imgUrl }) {
    var d = new Date((details.Date.seconds * 1000));
    return (
        <>
            <h2 className="gender"> {details.Gender} </h2>
            <div className="subdet">
                <div className="details">
                    <h2> {details.ID} </h2>
                    <h3> Person Detected. </h3>
                    <div className="subdetails">
                        <p> Name &nbsp;&nbsp;&nbsp; : {details.Name} </p>
                        <p> Location: {details.Location} </p>
                        <p> Date &nbsp;&nbsp;&nbsp; : {d.getDate()}-{d.toLocaleString('default', { month: 'short' })}-{d.getFullYear().toString().substring(2, 4)} </p>
                        <p> Time &nbsp;&nbsp;&nbsp; : {details.Time} </p>
                        <p> Description: </p>
                        <p> {details.Name} detected at {details.Location} on {d.getDate()}th {d.toLocaleString('default', { month: 'long' })}, {d.getFullYear()}. </p>
                    </div>
                </div>
                <div className="image">
                    <img src={imgUrl} />
                </div>
            </div>
        </>
    );
}

export default UserInfo;