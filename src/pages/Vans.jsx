import React,{useEffect,useState} from "react"
import { Link } from "react-router-dom";

export default function Vans() {



     // eslint-disable-next-line
    const [vans ,setVans] = useState([])
    useEffect(() => {
 
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
        .catch((error) => {
            console.error("Error fetching vans:", error)});
      
    },[])
    console.log(vans)

    const vanElements = vans.map(van => (
        
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl}  alt="picc"/>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}