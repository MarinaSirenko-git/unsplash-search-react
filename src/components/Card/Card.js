import './card.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="Photo" className="card__image" />
      <p className="card__title">{props.title}</p>
      <p className="card__subtitle">{props.subtitle}</p>
    </div>
  )
}

export default Card