import propType from "prop-types"

const Flower = ({flower, handelCard}) => {
    const {name, price, image} = flower
  return (
    <div className="card bg-gray-200 p-[10px] space-y-[10px]">
        <img className="h-[200px] object-cover" src={`https://picsum.photos/140/240?random=${image}`} alt="" />
        <h2 className="text-2xl font-[600]">{name}</h2>
        <p>${price}</p>
        <button onClick={()=> handelCard(flower)} className="btn">Add To Card</button>
    </div>
  )
}

Flower.propTypes  = {
    flower : propType.object.isRequired,
    handelCard : propType.func.isRequired
}
export default Flower