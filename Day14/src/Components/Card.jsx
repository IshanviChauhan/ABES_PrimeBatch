const Card = ({title, text}) => {
    return (
        <div class="card">
            <h3>{title.toUpperCase()}</h3>
            <label>{text}</label>
        </div>
    )
}
export default Card;