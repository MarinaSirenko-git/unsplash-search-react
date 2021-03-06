### Задачи проекта
1. Разбить макет на компоненты - главный компонент, строка поиска, кнопка поиска, группа изображений, 404 страница, отдельная страница изображения. Добавить стили
2. Для работы с API создать класс с нужными методами
3. Реализовать возможности: вводим в поле поиска ключевое слово, нажимаем кнопку Search, получаем обновленные изображения. Выдача по умолчанию `night city`
4. Показывать текст `Loading...`, пока ждем ответ от сервера
5. Реализовать маршрутизацию. По клику на изображение переходить на новую страницу
6. Реализовать страницу 404, если пользователь ввел несуществующий URL

### Инструменты проекта
`Create React App`, `Unsplash API`, `react-router`

### Решение
1. В директории `components`, для удобства и порядка, создадим под каждый компонент папку, в которой будем хранить сам компонент и его стили.
2. Создадим класс `api`, который будет принимать объект настроек {url, token}, обратимся к документации [Unsplash](https://unsplash.com/developers), напишем запрос, создадим экземпляр класса, экспортируем его. Теперь можем обращаться к нему из любого компонента.
3. Используем только функциональные компоненты. **Компонент App.** Добавим стейт переменную `searchQuery`, которая хранит ключевое слово, меняется по событию Submit формы, 
получая введенное значение в инпут. Хук useEffect отслеживает изменение стейт переменной и при её изменении посылает новый запрос на сервер. Добавим стейт переменную `cards` и после успешного ответа сервера меняем значение `cards`. Происходит рендеринг, ура!
4. Добавим флаг `isLoading` в App и будем менять его значение на этапе рендеринга в запросе к серверу. 
5. **Компонент Main.** Передадим обработчик формы и данные из компонента App. Вернем разметку страницы. Напишем логику работы с контролируемым компонентом Input и обработчик формы onSubmit.
6. Глупые компоненты - Button, Card, NotFound. Передадим в них данные и колбеки через props.
7. Установим библиотеку `React Router`. Обернём компонент App в `BrowserRouter`, а Main в `<Route path="/" exact>`
8. Создадим компонент страницы Photo, обернём в `<Route path="/photos/:id">`, получим id с помощью хука `useParams()`, получим данные по id и отобразим.
9. Создадим компонент страницы 404 - NotFound. В App подключим NotFound обернув в `<Route path="*">`
10. Обернём роуты в `<Switch>`

---
Cсылка на проект https://marinasirenko-git.github.io/unsplash-search-react/#/
