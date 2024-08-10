import BotSpecsPage from './pages/BotSpecsPage'
import NotFoundPage from './pages/NotFoundPage'
import BotsPage from './pages/BotsPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<BotsPage />}></Route>
        <Route path='/robots' element={<BotsPage />}></Route>
        <Route path='/robots/:id' element={<BotSpecsPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
