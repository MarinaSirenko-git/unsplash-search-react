// Вынесем излишний код и логику работы формы из App в данный ф-й компонент
import './Main.css'
import { useEffect, useState } from 'react'
import Card from '../Card/Card.js'
import Input from '../Input/Input.js'
import Button from '../Button/Button.js'

function Main ({handleFormSubmit, isLoading, cards}) {
  const [value, setValue] = useState('')

  const handleChange = (evt) => {
    setValue(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleFormSubmit(value)
  }

  return (
    <div className="app__content">
      <form className="app__search" onSubmit={handleSubmit}>
        <Input 
          placeholder={'Search free high-resolution photos'}
          handleChange={handleChange}
          value={value}
        />
        <Button text={'Search'} />
      </form>
      {isLoading 
        ? <p>Loading...</p> 
        : (<div className="app__cards">{cards.map(item => <Card key={item.id} {...item} />)}</div>)
      }
    </div>
  )
}

export default Main