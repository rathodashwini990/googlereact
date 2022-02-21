import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const LandingPage = () => {
    const [, setSearch]  = useState([]);
    const [result, setResult]  = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <img src="https://di5qs4dv32t01.cloudfront.net/wp-content/uploads/2021/11/Google-offering-apprenticeship-programme-in-Hyderabad.jpg" alt="" />
            <input 
                className="search-box"
                style={{ width: "80%", height: "45px", borderRadius: "40px"}}
                onChange={handleChange}
                onKeyUp={(e) => {
                    if(e.keyCode === 13){
                        axios.get(`https://fast-reef-22226.herokuapp.com/data?q={search}`)
                        .then((res) => setResult(res.data));
                    }
                }} ></input>

                <p>
                    {result.map((e) => {
                        return <p><Link to={`/search/${e.id}`}>{e.title}</Link></p>
                    })}
                </p>
        </div>
    );
};
