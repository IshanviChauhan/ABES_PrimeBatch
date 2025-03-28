import "./Card.css";

const Card = ({title, price, thumbnail}) => {
    return(
        <div className="card">
            <h4>{title}</h4>
            <h5>{price}</h5>
            <img src={thumbnail} alt="" />
        </div>
    )
}

export default Card;