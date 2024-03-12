import propTypes from "prop-types"
import Card from "./card"

const Carts = ({cart, handelRemove}) => {
  return (
    <div>
        <div className="mb-[5px] flex justify-end">
        <span className="bg-gray-200 p-[10px] rounded-lg">Card : {cart.length}</span>
        </div>
        <div className="flex">
        {
            cart.map((img)=> <Card handelRemove={handelRemove} img={img}></Card>)
        }
        </div>
        
    </div>
  )
}

Carts.propTypes = {
    cart : propTypes.array.isRequired,
    handelRemove : propTypes.func.isRequired
}
export default Carts