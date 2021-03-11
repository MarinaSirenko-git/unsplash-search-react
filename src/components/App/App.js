import './app.css';
import api from '../../api/api';
import Main from '../Main/Main.js';
import Photo from '../Photo/Photo.js';
import NotFound from '../NotFound/NotFound.js';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'

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

  const getPhotoById = (id) => {
    return cards.find((photo) => photo.id === id)
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Main
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            cards={cards} 
          />
        </Route>
        <Route path="/photo/:id">
          <Photo getPhoto={getPhotoById} />
        </Route>
        {/* Если мы не перешли ни по одному адресу до данного компонента, благодаря Swith выполнится NotFound*/}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
