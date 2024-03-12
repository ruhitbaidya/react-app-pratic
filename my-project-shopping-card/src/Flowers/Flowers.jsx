import { useEffect } from "react";
import { useState } from "react";
import Flower from "../flower/Flower";

const Flowers = () => {
    const [findData, setFindData] = useState([]);

    useEffect(()=>{
      fetch("data.json")
      .then((res)=> res.json())
      .then((data)=> setFindData(data))
    }, [])
    console.log(findData)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[23px]">
        {findData.map((flower)=> <Flower key={flower.id} flower={flower}></Flower> )}
    </div>
  )
}

export default Flowers