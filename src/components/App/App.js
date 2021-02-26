import './app.css';
import api from '../../api/api';
import Main from '../Main/Main.js';
import { useEffect, useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState('night city')
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    if (searchQuery !== '') {
      api.search(searchQuery)
        .then(response => {
          const cards = response.results.map(item => {
            return {
              id: item.id,
              src: item.urls.regular,
              title: item.user.name,
              subtitle: item.description
            }
          })

          setCards(cards);
        })
        .finally(() => setIsLoading(false))
    }
  }, [searchQuery])

  const handleFormSubmit = (value) => {
    setSearchQuery(value)
  }

  return (
    <div className="app">
      <Main
        handleFormSubmit={handleFormSubmit}
        isLoading={isLoading}
        cards={cards} />
    </div>
  );
}

export default App;
