import { FaHeartbeat } from "react-icons/fa";

function Card({ item }) {
    return (
        <div className="card">
            <img className="card--image" src={item.image} alt={item.title} />
            <div className="gradient"></div>
            <div className="card--description">
                <h3 className="card--title">{item.title}</h3>
                {item.healthScore >= 0 && <div className={item.healthScore > 70 ? "card--score green" : item.healthScore > 30 ? "card--score blue" : "card--score red"}>
                    <FaHeartbeat />
                    <span>{item.healthScore}</span>
                </div>}
            </div>
        </div>
    )
}

export default Card