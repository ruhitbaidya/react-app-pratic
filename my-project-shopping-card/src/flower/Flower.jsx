import propType from "prop-types"

const Flower = ({flower}) => {
    const {name, price, image} = flower
  return (
    <div className="card bg-gray-200 p-[10px] space-y-[10px]">
        <img className="h-[200px] object-cover" src={`https://picsum.photos/140/240?random=${image}`} alt="" />
        <h2 className="text-2xl font-[600]">{name}</h2>
        <p>${price}</p>
        <button className="btn">Bye Now</button>
    </div>
  )
}

Flower.propTypes  = {
    flower : propType.object.isRequired
}
export default Flower