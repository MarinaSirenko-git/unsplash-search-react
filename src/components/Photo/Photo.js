import "./Photo.css";

import {useParams, Link} from "react-router-dom";

function Photo({getPhoto}) {
  // Получаем то значение, которое мы передали в комронент Link атрибуту to
  const {id} = useParams();
  // используем деструктуризацию, извлекаем значения из полученного объекта
  const {title, subtitle, src} = getPhoto(id);

  return (
    <div className="photo">
      <Link className="photo-goback" to="/">⟵ Go back</Link>
      <img className="photo-image" src={src} alt={title} />
      <p className="photo-title">{title}</p>
      <p className="photo-subtitle">{subtitle}</p>
    </div>
  )
}

export default Photo;