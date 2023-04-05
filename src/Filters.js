function Filters({ filters, set_filters, set_dateFilter }) {
    const setFilter = (e) => {
        if(e.target.checked){
            set_filters([...filters, e.target.name]);
        }
        else {
            set_filters(filters.filter(ele => ele !== e.target.name));
        }
    }

    const setDateFilter = (e) => {
        if(e.target.value !== ""){
            set_dateFilter(e.target.value);
        }
        else {
            set_dateFilter("");
        }
    }
    return (
        <div className="filters">
            <h2> Filters </h2>
            <div className="loc">
                <h3> Location </h3>
                <input name="Chennai" type="checkbox" onChange={(e) => {
                    setFilter(e);
                }}/>
                <label> Chennai </label>
                <input name="Hyderabad" type="checkbox" onChange={(e) => {
                    setFilter(e);
                }}/>
                <label> Hyderabad </label>
                <input name="Bangalore" type="checkbox" onChange={(e) => {
                    setFilter(e);
                }}/>
                <label> Bangalore </label>
            </div>
            <div className="gen">
                <h3> Gender </h3>
                <input name="Male" type="checkbox" onChange={(e) => {
                    setFilter(e);
                }}/>
                <label> Male </label>
                <input name="Female" type="checkbox" onChange={(e) => {
                    setFilter(e);
                }}/>
                <label> Female </label>
            </div>
            <div className="dat">
                <h3> Date </h3>
                <label> Date </label>
                <input type="date" onChange={(e) => {
                    setDateFilter(e);
                }}/>
            </div>
        </div>
    );
}

export default Filters;