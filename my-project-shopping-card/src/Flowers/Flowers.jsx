import { useEffect } from "react";
import { useState } from "react";
import Flower from "../flower/Flower";
import { addTolocalStore, checkLocalStore, removeFromLS } from "../storeDat/storeDatra";
import Carts from "../cart/carts";

const Flowers = () => {
    const [findData, setFindData] = useState([]);
    const [cart, setCatr] = useState([]);

    useEffect(()=>{
      fetch("data.json")
      .then((res)=> res.json())
      .then((data)=> setFindData(data))
    }, []);
    
    useEffect(()=>{
        if(findData.length > 0){
            const finddatas = checkLocalStore();
            const saveArr = [];
            for(const id of finddatas){
                const findFinial = findData.find((items)=> items.id === id);
                if(findFinial){
                    saveArr.push(findFinial)
                }
            }
            setCatr(saveArr)
        }
        
    }, [findData]);

    const handelCard = (flower)=>{
        const cardser = [...cart, flower]
        setCatr(cardser)
        addTolocalStore(flower.id)
    };
    const handelRemove = (id) => {
        const visualCard = cart.filter((item)=> item.id !== id)
        setCatr(visualCard);
        removeFromLS(id)
    }
  return (
    <>
    <Carts cart={cart} handelRemove={handelRemove}></Carts>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[23px]">
        {findData.map((flower)=> <Flower key={flower.id} flower={flower} handelCard={handelCard}></Flower> )}
    </div>
    </>
    
  )
}

export default Flowers