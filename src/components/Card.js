

function Card({card}){
    return <div className="flex justify-between">
    <p>{card.title}</p>
    <p>{card.state}</p>
    </div>
}

export default Card;