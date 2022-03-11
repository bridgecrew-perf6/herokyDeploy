import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contacts from './pages/Contacts/Contacts';
import Main from './pages/Main/Main';
import Partners from './pages/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/partners' element={<Partners></Partners>}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
