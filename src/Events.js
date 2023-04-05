import { useEffect, useState } from 'react';
import { db, storage } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import Filters from './Filters';

function Events({ set_details, set_imgUrl, data, set_data, filterData, set_filterData }) {
    const [imageList, set_imageList] = useState([]);
    const [btnclick, set_btnclick] = useState(false);
    const [filters, set_filters] = useState([]);
    const [dateFilter, set_dateFilter] = useState("");
    const imageListRef = ref(storage, "Images/");

    const dataCollectionRef = collection(db, "Data");

    useEffect(() => {
        const getData = async () => {
            const myData = await getDocs(dataCollectionRef);
            set_data(myData.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getData();
        listAll(imageListRef).then((response) => {
            set_imageList(response.items);
        });
    }, []);

    useEffect(() => {
        if(filters.length === 0 && dateFilter === "") {
            set_filterData(data);
        }
        else {
            set_filterData(data.filter(d => {
                return ((filters.some(val => (val === d.Location) || (val === d.Gender))) || 
                (((new Date(d.Date.seconds * 1000)).getTime()) === ((new Date(dateFilter)).getTime())));   
            }
            ));
        }   
    }, [filters, dateFilter]);

    const getImage = (name) => {
        const img = imageList.find((item) => {
            return (item.name === (name + ".jpg"));
        });
        getDownloadURL(img).then((url) => {
            set_imgUrl(url);
        });
    }

    return (
        <div className='events'>
            <h1> Events </h1>
            <img src="/slider.svg" className='ficon' onClick={() => {
                set_btnclick((click) => !click);
            }} />
            {btnclick && (<div className='fil'>
                <Filters filters={filters} set_filters={set_filters} set_dateFilter={set_dateFilter}/>
            </div>)}
            {filterData.length === 0 && data.map((ele) => {
                return (
                    <div className='eventele' key={ele.ID} onClick={() => {
                        set_details(ele);
                        getImage(ele.Name);
                    }}>
                        <div className='eventhead'>
                            <h2> {ele.ID}: {ele.Location} </h2>
                            <h3 className='datetime'> {(new Date(ele.Date.seconds * 1000)).getDate()}-{(new Date(ele.Date.seconds * 1000)).getMonth() + 1}-{(new Date(ele.Date.seconds * 1000)).getFullYear().toString().substring(2, 4)} {ele.Time} </h3>
                        </div>
                        <h2> Person detected. </h2>
                    </div>
                );
            })}
            {filterData.length > 0 && filterData.map((ele) => {
                return (
                    <div className='eventele' key={ele.ID} onClick={() => {
                        set_details(ele);
                        getImage(ele.Name);
                    }}>
                        <div className='eventhead'>
                            <h2> {ele.ID}: {ele.Location} </h2>
                            <h3 className='datetime'> {(new Date(ele.Date.seconds * 1000)).getDate()}-{(new Date(ele.Date.seconds * 1000)).getMonth() + 1}-{(new Date(ele.Date.seconds * 1000)).getFullYear().toString().substring(2, 4)} {ele.Time} </h3>
                        </div>
                        <h2> Person detected. </h2>
                    </div>
                );
            })}
        </div>
    );
}
export default Events;