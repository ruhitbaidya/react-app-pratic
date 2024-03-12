import PropType from "prop-types"

const Card = ({img, handelRemove}) => {
  return (
    <div key={img.id}> <img className="w-[100px] h-[100px]" src={`https://picsum.photos/140/240?random=${img.image}`} /> 
                <button onClick={()=> handelRemove(img.id)} className="btn">Remove Items</button>
            </div>
  )
}

Card.propTypes = {
    img : PropType.object.isRequired,
    handelRemove : PropType.func.isRequired
}
export default Card