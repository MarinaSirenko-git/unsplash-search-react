import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound-note">Тут обитают драконы 🐉, лучше вернитесь <Link className="notfound-link" to="/">на главную 🐶🏠</Link></p>
    </div>
  );
}

export default NotFound;