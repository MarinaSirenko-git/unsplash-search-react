import './card.css'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <Link to={`/photo/${props.id}`} className="card">
      <img src={props.src} alt="Photo" className="card__image" />
      <p className="card__title">{props.title}</p>
      <p className="card__subtitle">{props.subtitle}</p>
    </Link>
  )
}

export default Card